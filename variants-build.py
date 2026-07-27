#!/usr/bin/env python3
"""Erzeugt variants-data.js – die Varianten und Umleitungen des Cape Wrath Trail.

Zwei Geometrie-Quellen:
  * komoot – echte Tracks aus öffentlichen Komoot-Touren, liegen als JSON in
    gpx/komoot-varianten/. Höhenmeter kommen von Komoot.
  * osm    – über den öffentlichen Valhalla-Router (FOSSGIS) entlang echter
    OSM-Wege berechnet; Höhen aus dem /height-Endpunkt (SRTM-basiert, also
    ungefähr). Im UI entsprechend gekennzeichnet.

Braucht Netz für die osm-Varianten. Nicht im Deploy-Workflow:

    python3 variants-build.py
"""
import json
import math
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent
KOMOOT = ROOT / 'gpx' / 'komoot-varianten'
VALHALLA = 'https://valhalla1.openstreetmap.de'
UA = 'schottland-reise/1.0 (zacharias.beermann@intomedia.de)'


def hav(a, b):
    r, R = math.pi / 180, 6371
    h = (math.sin((b[0]-a[0])*r/2)**2
         + math.cos(a[0]*r)*math.cos(b[0]*r)*math.sin((b[1]-a[1])*r/2)**2)
    return 2 * R * math.asin(math.sqrt(h))


def length_km(pts):
    return sum(hav(pts[i-1], pts[i]) for i in range(1, len(pts)))


def post(path, body):
    """Python scheitert hier am TLS-Handshake – deshalb über curl."""
    p = subprocess.run(
        ['curl', '-s', '--max-time', '120', '-X', 'POST', VALHALLA + path,
         '-H', 'Content-Type: application/json', '-H', 'User-Agent: ' + UA,
         '-d', json.dumps(body)],
        capture_output=True, text=True, check=True)
    return json.loads(p.stdout)


def decode(shape, precision=6):
    """Valhalla-Polyline dekodieren."""
    out, i, lat, lng = [], 0, 0, 0
    factor = 10 ** precision
    while i < len(shape):
        for is_lat in (True, False):
            shift, result = 0, 0
            while True:
                b = ord(shape[i]) - 63
                i += 1
                result |= (b & 0x1f) << shift
                shift += 5
                if b < 0x20:
                    break
            d = ~(result >> 1) if result & 1 else (result >> 1)
            if is_lat:
                lat += d
            else:
                lng += d
        out.append([round(lat / factor, 5), round(lng / factor, 5)])
    return out


def overpass(bbox):
    # Bewusst OHNE Typfilter: Ein zu enger Filter zerreißt den Graphen. Das
    # Cluanie Inn etwa liegt an der A87 (trunk) – fehlt die, hängt der
    # Startpunkt an einer isolierten Insel und Dijkstra findet nichts.
    q = '[out:json][timeout:180];way["highway"](%s,%s,%s,%s);out geom;' % bbox
    for ep in ('https://overpass-api.de/api/interpreter',
               'https://overpass.kumi.systems/api/interpreter'):
        r = subprocess.run(['curl', '-s', '--max-time', '240', '-A', UA,
                            '-X', 'POST', '--data-binary', q, ep],
                           capture_output=True, text=True)
        try:
            return json.loads(r.stdout)['elements']
        except Exception:                            # noqa: BLE001
            continue
    raise SystemExit('Overpass nicht erreichbar')


def graph_route(bbox, start, end):
    """Kürzester Weg über die tatsächlich in OSM erfassten Wege.

    Nötig, wo der öffentliche Router passt – im An Caorann Mòr etwa kennt er
    den durchgehenden Pfad nicht und schickt einen 68-km-Straßenumweg statt
    der 11 km über den Sattel."""
    import heapq
    ways = overpass(bbox)
    adj, nodes = {}, {}

    def key(p):
        return (round(p['lat'], 5), round(p['lon'], 5))

    for w in ways:
        g = w.get('geometry') or []
        for a, b in zip(g, g[1:]):
            ka, kb = key(a), key(b)
            nodes[ka], nodes[kb] = ka, kb
            d = hav(ka, kb)
            adj.setdefault(ka, []).append((kb, d))
            adj.setdefault(kb, []).append((ka, d))
    if not adj:
        raise SystemExit('keine Wege im Korridor')
    s = min(adj, key=lambda n: hav(n, start))
    e = min(adj, key=lambda n: hav(n, end))
    if hav(s, start) > 1.0 or hav(e, end) > 1.0:
        print(f'    Warnung: Anschlusspunkt {hav(s,start):.2f}/{hav(e,end):.2f} km entfernt')
    dist = {s: 0.0}
    prev, seen, pq = {}, set(), [(0.0, s)]
    while pq:
        d, n = heapq.heappop(pq)
        if n in seen:
            continue
        seen.add(n)
        if n == e:
            break
        for m, w in adj.get(n, ()):
            nd = d + w
            if nd < dist.get(m, 1e18):
                dist[m] = nd
                prev[m] = n
                heapq.heappush(pq, (nd, m))
    if e not in dist:
        raise SystemExit('kein durchgehender Weg gefunden')
    path, cur = [], e
    while cur != s:
        path.append([cur[0], cur[1]])
        cur = prev[cur]
    path.append([s[0], s[1]])
    return path[::-1]


def route(waypoints):
    body = {'locations': [{'lat': w[0], 'lon': w[1]} for w in waypoints],
            'costing': 'pedestrian',
            'costing_options': {'pedestrian': {'use_ferry': 0}},
            'directions_options': {'units': 'kilometers'}}
    d = post('/route', body)
    pts = []
    for leg in d['trip']['legs']:
        seg = decode(leg['shape'])
        pts += seg[1:] if pts else seg
    return pts


def ascent(pts):
    """Höhenmeter über den /height-Endpunkt. Grob geglättet, damit das
    SRTM-Rauschen den Aufstieg nicht künstlich aufbläht."""
    step = max(1, len(pts) // 400)
    sample = pts[::step]
    heights = []
    for i in range(0, len(sample), 200):
        chunk = sample[i:i+200]
        d = post('/height', {'shape': [{'lat': p[0], 'lon': p[1]} for p in chunk]})
        heights += d.get('height', [])
    if len(heights) < 3:
        return None
    up, prev = 0.0, heights[0]
    for h in heights[1:]:
        if h is None:
            continue
        if h - prev > 8:           # Schwelle gegen SRTM-Rauschen
            up += h - prev
            prev = h
        elif h < prev:
            prev = h
    return int(round(up / 10.0) * 10)


def komoot(name):
    d = json.loads((KOMOOT / f'{name}.json').read_text())
    return [[round(p['lat'], 5), round(p['lng'], 5)] for p in d['items']], d


def cut_at(pts, target, tail=False):
    """Track am Punkt schneiden, der `target` am nächsten liegt."""
    i = min(range(len(pts)), key=lambda k: hav(pts[k], target))
    return pts[i:] if tail else pts[:i+1]


# ---------------------------------------------------------------- Definitionen
KINLOCHEWE = [57.60354, -5.29796]

VARIANTS = [
    {
        'id': 'v-torridon', 'trail': 'cwt', 'kind': 'landschaft',
        'name': 'Torridon-Variante',
        'replaces': ['cwt-7'],
        'why': 'Landschaftlich der stärkste Abschnitt des ganzen Trails – Liathach und Beinn Eighe aus der Nähe statt des flachen Coulin-Passes.',
        'text': 'Im Cicerone-Führer ist das die Hauptroute, unsere Etappe 7 über den Coulin Pass die Variante. Statt direkt nach Kinlochewe führt sie über Coulags und das Coire Fionnaraich nach Torridon, dann durch das Coire Dubh Mòr zwischen Liathach und Beinn Eighe. Kostet rund einen Tag mehr und ist deutlich anspruchsvoller; bei schlechtem Wetter ist der Coulin Pass ausdrücklich die klügere Wahl.',
        'src': 'https://capewrathtrailguide.org/route/strathcarron-kinlochewe/',
        'legs': [
            {'from': 'Achnashellach', 'to': 'Torridon', 'komoot': '1333538694'},
            {'from': 'Torridon', 'to': 'Fasag', 'komoot': '1333550213'},
            {'from': 'Fasag', 'to': 'Kinlochewe', 'komoot': '1333560067', 'cut_end': KINLOCHEWE},
        ],
    },
    {
        'id': 'v-fisherfield', 'trail': 'cwt', 'kind': 'landschaft',
        'name': 'Fisherfield: nördliche Linie',
        'replaces': ['cwt-8'],
        'why': 'Andere, etwas kürzere Linie durch die Great Wilderness nach Shenavall – dieselbe Stelle, an der auch die 380-km-Gesamtroute von unserer Spur abweicht.',
        'text': 'Ab dem Abzweig hinter Kinlochewe eine eigenständige Linie zur Shenavall-Bothy. Die Hochwasser-Warnungen der Standardetappe gelten hier genauso: Es gibt auf beiden Linien brückenlose Querungen, und eine echte Umgehung existiert für diesen Abschnitt nicht.',
        'src': 'https://www.walkhighlands.co.uk/torridon/kinlochewe-shenavall.shtml',
        'legs': [
            {'from': 'Abzweig hinter Kinlochewe', 'to': 'Shenavall', 'komoot': '1333565318'},
        ],
    },
    {
        'id': 'v-ullapool', 'trail': 'cwt', 'kind': 'versorgung',
        'name': 'Ullapool-Variante',
        'replaces': ['cwt-10'],
        'why': 'Die beste Versorgung der ganzen Nordhälfte – und gleichzeitig Ersatz für die navigatorisch schwierigste Etappe durch das weglose Glen Douchary.',
        'text': 'Im Cicerone-Führer als Alternative Stage 9 geführt. Von Inverlael nach Ullapool (Supermarkt, Apotheke, Outdoorladen, Busse), dann auf 4x4-Tracks über Loch Achall, Rhidorroch und die Knockdamph-Bothy zurück nach Oykel Bridge. Fast durchgehend Fahrweg – laut Führer die gute Wahl, wenn das Wetter mies ist oder die Beine nicht mehr wollen.',
        'src': 'https://capewrathtrailguide.org/route/inverlael-oykel-bridge',
        'legs': [
            {'from': 'Inverlael', 'to': 'Ullapool', 'komoot': '1333572567'},
            {'from': 'Ullapool', 'to': 'Knockdamph Bothy', 'osm': [
                [57.89582, -5.16022], [57.90820, -5.07648], [57.91024, -5.07868],
                [57.90542, -4.91004], [57.91490, -4.89484]]},
            {'from': 'Knockdamph Bothy', 'to': 'Oykel Bridge', 'osm': [
                [57.91490, -4.89484], [57.93628, -4.80462], [57.96753, -4.73146]]},
        ],
    },
    {
        'id': 'v-skiag', 'trail': 'cwt', 'kind': 'wetter',
        'name': 'Skiag Bridge: Straßenvariante',
        'replaces': ['cwt-12'],
        'why': 'Die Standardetappe ist mit 10–11 Stunden die zeitaufwendigste des Trails, teils weglos und bei Nebel heikel. Das hier ist die Notbremse.',
        'text': 'Statt über den Bealach na h-Uidhe und den Eas a\' Chùal Aluinn an der A837/A894 entlang: Ardvreck Castle, Skiag Bridge, dann nördlich um den Glas Bheinn herum und ab Loch na Gainmhich auf der Straße nach Kylesku. Deutlich kürzer und ohne die Furt der Abhainn an Loch Bhig. Der Führer nennt die Straße hier ausdrücklich als Option, wenn man müde ist oder näher an der Zivilisation bleiben will.',
        'src': 'https://capewrathtrailguide.org/route/inchnadamph-glendhu',
        'legs': [
            {'from': 'Inchnadamph', 'to': 'Kylesku', 'osm': [
                [58.14999, -4.97101], [58.16641, -4.99397], [58.17291, -5.00335],
                [58.21358, -4.98975], [58.25633, -5.01911]]},
        ],
    },
    {
        'id': 'v-achfary', 'trail': 'cwt', 'kind': 'wetter',
        'name': 'Achfary: Straßenvariante',
        'replaces': ['cwt-13'],
        'why': 'Umgeht den weglosen, sehr nassen Abschnitt über den Ben Dreavie – den einzigen Gipfel des Trails.',
        'text': 'Ab dem Bealach nam Fiann hinunter zur A838 und an Achfary und dem Loch Stack entlang. Achfary selbst hat keine Versorgung. Der Führer merkt an, dass die Straße so weit im Norden kaum befahren ist. Achtung: Die Furt des Allt Garbh vor Rhiconich liegt auf beiden Linien und ist bei Hochwasser unpassierbar – dann rund 0,5 km flussaufwärts queren, wo sich der Fluss verzweigt.',
        'src': 'https://capewrathtrailguide.org/route/glendhu-rhiconich',
        'legs': [
            {'from': 'Bealach nam Fiann', 'to': 'Lochstack Lodge', 'osm': [
                [58.30150, -4.94786], [58.31177, -4.91556], [58.33572, -4.91325],
                [58.36842, -4.92950]]},
        ],
    },
    {
        'id': 'v-greatglen', 'trail': 'cwt', 'kind': 'wetter',
        'name': 'Great-Glen-Variante',
        'replaces': ['cwt-1', 'cwt-2', 'cwt-3', 'cwt-4', 'cwt-4.5'],
        'why': 'Der leichtere, wegreichere Start mit Versorgung unterwegs – die Reserve, wenn die Vorhersage für die erste Woche schlecht ist.',
        'text': 'Von David Paterson begangen, von Cameron McNeish populär gemacht, Teil des Scottish National Trail. Statt durch Knoydart am Kaledonischen Kanal entlang nach Gairlochy und Laggan, über Invergarry ins Glen Loyne und zum Cluanie Inn, dann über Alltbeithe und die Camban-Bothy durch das Gleann Lichd nach Morvich. Rund 105 km mit vergleichsweise wenig Höhenmetern und Einkehr in Invergarry und am Cluanie Inn. Wichtig: Zwischen Strathan und Kinloch Hourn gibt es auf der Hauptroute faktisch keinen Ausstieg – hier schon.',
        'src': 'https://www.walkhighlands.co.uk/cape-wrath-trail.shtml',
        'legs': [
            {'from': 'Fort William', 'to': 'Gairlochy', 'osm': [
                [56.82098, -5.10752], [56.84490, -5.09601], [56.91268, -4.99683]]},
            {'from': 'Gairlochy', 'to': 'Laggan Locks', 'osm': [
                [56.91268, -4.99683], [56.94698, -5.00254], [57.02536, -4.82309]]},
            {'from': 'Laggan Locks', 'to': 'Invergarry', 'osm': [
                [57.02536, -4.82309], [57.06630, -4.80627]]},
            {'from': 'Invergarry', 'to': 'Cluanie Inn', 'osm': [
                [57.06630, -4.80627], [57.06340, -5.04300], [57.06611, -5.08179],
                [57.10165, -5.15698], [57.15627, -5.17861]]},
            {'from': 'Cluanie Inn', 'to': 'Alltbeithe',
             'osm': [[57.15627, -5.17861], [57.23249, -5.18490]],
             'graph': [57.145, -5.230, 57.245, -5.150]},
            {'from': 'Alltbeithe', 'to': 'Morvich', 'komoot': '1035751763'},
        ],
    },
]


def main():
    out = []
    for v in VARIANTS:
        legs, total_km, total_up, sources = [], 0.0, 0, set()
        for n, leg in enumerate(v['legs'], 1):
            if 'komoot' in leg:
                pts, meta = komoot(leg['komoot'])
                if leg.get('cut_end'):
                    pts = cut_at(pts, leg['cut_end'])
                km = length_km(pts)
                up = int(round(meta.get('up') or 0))
                if leg.get('cut_end'):
                    # Komoots Wert gilt für den ganzen Track – nach dem Schnitt
                    # stimmt er nicht mehr, also selbst nachrechnen.
                    up = ascent(pts)
                src = 'komoot'
            elif 'graph' in leg:
                print(f"  graph {v['id']} {leg['from']} -> {leg['to']} …", flush=True)
                pts = graph_route(tuple(leg['graph']), leg['osm'][0], leg['osm'][-1])
                km = length_km(pts)
                up = ascent(pts)
                src = 'osm'
            else:
                print(f"  route {v['id']} {leg['from']} -> {leg['to']} …", flush=True)
                pts = route(leg['osm'])
                km = length_km(pts)
                up = ascent(pts)
                src = 'osm'
            luft = hav(pts[0], pts[-1])
            if luft > 0.5 and km > 3.2 * luft:
                print(f'    !! unplausibel: {km:.1f} km bei {luft:.1f} km Luftlinie', flush=True)
            sources.add(src)
            total_km += km
            if up is not None:
                total_up += up
            legs.append({'id': f"{v['id']}-{n}", 'from': leg['from'], 'to': leg['to'],
                         'km': round(km, 1), 'up': up, 'src': src, 'coords': pts})
            print(f"    {leg['from']} → {leg['to']}: {km:.1f} km, "
                  f"{'—' if up is None else str(up)+' hm'} ({src}, {len(pts)} Punkte)", flush=True)
        out.append({k: v[k] for k in ('id', 'trail', 'kind', 'name', 'replaces', 'why', 'text', 'src')}
                   | {'km': round(total_km, 1),
                      'up': total_up if all(l['up'] is not None for l in legs) else None,
                      'sources': sorted(sources), 'stages': legs})
        print(f"{v['id']}: {total_km:.1f} km gesamt, {len(legs)} Etappen\n", flush=True)

    lines = ['// AUTOMATISCH ERZEUGT von variants-build.py – nicht von Hand editieren.',
             '// Varianten und Umleitungen des Cape Wrath Trail.',
             "// stages[].src: 'komoot' = echter Track, 'osm' = über OSM-Wege gerouteter",
             '// Verlauf (Valhalla/FOSSGIS), Höhen aus SRTM – beides ungefähr.',
             'window.VARIANTS = [']
    for v in out:
        lines.append('  {')
        for k in ('id', 'trail', 'kind', 'name'):
            lines.append(f'    {k}: {json.dumps(v[k], ensure_ascii=False)},')
        lines.append(f'    replaces: {json.dumps(v["replaces"])},')
        lines.append(f'    km: {v["km"]}, up: {v["up"] if v["up"] is not None else "null"},')
        lines.append(f'    sources: {json.dumps(v["sources"])},')
        for k in ('why', 'text', 'src'):
            lines.append(f'    {k}: {json.dumps(v[k], ensure_ascii=False)},')
        lines.append('    stages: [')
        for s in v['stages']:
            lines.append('      { id: %s, from: %s, to: %s, km: %s, up: %s, src: %s,' % (
                json.dumps(s['id']), json.dumps(s['from'], ensure_ascii=False),
                json.dumps(s['to'], ensure_ascii=False), s['km'],
                s['up'] if s['up'] is not None else 'null', json.dumps(s['src'])))
            lines.append('        coords: ' + json.dumps(s['coords']) + ' },')
        lines.append('    ]')
        lines.append('  },')
    lines.append('];')
    (ROOT / 'variants-data.js').write_text('\n'.join(lines) + '\n')
    print('variants-data.js geschrieben:', len(out), 'Varianten,',
          sum(len(v['stages']) for v in out), 'Etappen')


if __name__ == '__main__':
    main()
