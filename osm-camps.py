#!/usr/bin/env python3
"""Zeltstellen aus OpenStreetMap entlang der Routen einsammeln.

Die OpenTopoMap zeigt online viele von der Community eingetragene Zeltplätze
("really small camp site", "fits 2 person tent…"). Die Vektorkarte im
Offline-Paket rendert diese POIs NICHT (der Protomaps-Basemap-Layer kennt
tourism=camp_site nicht) – ohne diesen Export wären sie also unterwegs weg.

Das Skript zieht sie einmalig über die Overpass-API und schreibt
osm-camps-data.js. Nicht im Deploy-Workflow (braucht Netz); bei Bedarf
von Hand laufen lassen:

    python3 osm-camps.py

Kuratierte Punkte aus camps-data.js gewinnen: Was dort schon steht (250 m
Umkreis), wird hier nicht wiederholt.
"""
import json
import math
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent
CORRIDOR_KM = 1.5          # max. Abstand zur Route
DUP_KM = 0.25              # Umkreis, in dem ein kuratierter Punkt gewinnt
DUP_KM_NAMED = 0.9         # benannte Betriebe: großzügiger, sonst doppelt sich alles
BBOX = (55.85, -6.00, 58.75, -4.15)

QUERY = """[out:json][timeout:240];
(
  nwr["tourism"="camp_site"]({0},{1},{2},{3});
  nwr["tourism"="caravan_site"]({0},{1},{2},{3});
  nwr["tourism"="wilderness_hut"]({0},{1},{2},{3});
  nwr["amenity"="shelter"]["shelter_type"~"basic_hut|lean_to"]({0},{1},{2},{3});
);
out center tags;""".format(*BBOX)

ENDPOINTS = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
]


def hav(a, b):
    r, R = math.pi / 180, 6371
    h = (math.sin((b[0] - a[0]) * r / 2) ** 2
         + math.cos(a[0] * r) * math.cos(b[0] * r) * math.sin((b[1] - a[1]) * r / 2) ** 2)
    return 2 * R * math.asin(math.sqrt(h))


def load_stages():
    """trails-data.js ist JS, kein JSON – über node einlesen."""
    js = ("global.window={};require('%s');"
          "const o=[];for(const k in window.TRAILS)for(const s of window.TRAILS[k].stages)"
          "o.push({id:s.id,coords:s.coords});console.log(JSON.stringify(o));"
          % (ROOT / 'trails-data.js'))
    return json.loads(subprocess.run(['node', '-e', js], capture_output=True,
                                     text=True, check=True).stdout)


def load_curated():
    t = (ROOT / 'camps-data.js').read_text()
    rows = re.findall(r"lat: ([-\d.]+), lng: ([-\d.]+)", t)
    return [(float(a), float(b)) for a, b in rows]


def fetch():
    import urllib.request
    for ep in ENDPOINTS:
        try:
            req = urllib.request.Request(ep, data=QUERY.encode(),
                                         headers={'User-Agent': 'schottland-reise/1.0'})
            with urllib.request.urlopen(req, timeout=280) as r:
                return json.loads(r.read())
        except Exception as e:                      # noqa: BLE001
            print(f'  {ep}: {e}', file=sys.stderr)
    raise SystemExit('Overpass nicht erreichbar')


# --- Beschreibungstext aus den OSM-Tags bauen -------------------------------
def describe(tg):
    bits = []
    if tg.get('tourism') in ('wilderness_hut',):
        bits.append('Schutzhütte')
    elif tg.get('camp_site') == 'basic' or tg.get('informal') == 'yes':
        bits.append('einfache, informelle Zeltstelle')
    elif tg.get('tourism') == 'caravan_site':
        bits.append('Wohnmobil-/Caravanplatz')
    else:
        bits.append('Zeltstelle')
    if tg.get('backcountry') == 'yes':
        bits.append('abseits der Straße')
    if tg.get('tents') == 'only':
        bits.append('nur Zelte')
    if tg.get('tents') == 'no':
        bits.append('keine Zelte erlaubt')
    if tg.get('capacity'):
        bits.append(f"Platz für ca. {tg['capacity']}")
    if tg.get('drinking_water') == 'yes':
        bits.append('Trinkwasser')
    elif tg.get('drinking_water') == 'no':
        bits.append('kein Trinkwasser')
    if tg.get('toilets') == 'yes':
        bits.append('Toiletten')
    if tg.get('access') == 'permit' or tg.get('fee') == 'yes':
        bits.append('Genehmigung/Gebühr')
    # Nicht .capitalize() – das würde die deutschen Substantive kleinschreiben.
    txt = bits[0][0].upper() + bits[0][1:] + (', ' + ', '.join(bits[1:]) if bits[1:] else '') + '.'
    orig = ' '.join(x for x in (tg.get('description'), tg.get('note')) if x)
    if orig:
        txt += ' Notiz aus OSM: „' + ' '.join(orig.split()) + '“'
    return txt


def kind(tg):
    if tg.get('tourism') == 'wilderness_hut' or tg.get('amenity') == 'shelter':
        return 'bothy'
    if tg.get('access') == 'permit' or tg.get('fee') == 'yes' or tg.get('tourism') == 'caravan_site':
        return 'camp'
    if tg.get('camp_site') in ('basic', None) and not tg.get('operator'):
        return 'wild'
    return 'camp'


def main():
    print('Overpass abfragen …')
    els = fetch()['elements']
    stages = [(s['id'], s['coords']) for s in load_stages()]
    curated = load_curated()

    out = []
    for e in els:
        tg = e.get('tags', {})
        lat = e.get('lat') or (e.get('center') or {}).get('lat')
        lon = e.get('lon') or (e.get('center') or {}).get('lon')
        if lat is None:
            continue
        best, sid = 999.0, None
        for s_id, coords in stages:
            step = max(1, len(coords) // 800)
            for i in range(0, len(coords), step):
                d = hav([lat, lon], coords[i])
                if d < best:
                    best, sid = d, s_id
        if best > CORRIDOR_KM:
            continue
        lim = DUP_KM_NAMED if tg.get('name') else DUP_KM
        if any(hav([lat, lon], c) < lim for c in curated):
            continue
        out.append({
            'stage': sid, 'type': kind(tg),
            'name': tg.get('name') or 'Zeltstelle (OSM)',
            'lat': round(lat, 5), 'lng': round(lon, 5),
            'text': describe(tg), 'osm': f"{e['type']}/{e['id']}",
            'd': round(best, 2),
        })
    out.sort(key=lambda x: (x['stage'], x['d']))

    lines = [
        '// AUTOMATISCH ERZEUGT von osm-camps.py – nicht von Hand editieren.',
        '// Von der OpenStreetMap-Community eingetragene Zelt- und Biwakstellen im',
        f'// {CORRIDOR_KM}-km-Korridor um die Route. Ungeprüft: Das sind fremde Notizen,',
        '// keine eigene Recherche – deshalb im UI klar getrennt von camps-data.js.',
        '// Die Vektorkarte im Offline-Paket zeigt diese POIs nicht, die Topo-Karte',
        '// nur online – dieser Export macht sie offline verfügbar.',
        'window.OSM_CAMPS = [',
    ]
    for o in out:
        lines.append(
            "  { stage: '%s', type: '%s', name: %s, lat: %s, lng: %s, d: %s,\n"
            "    text: %s, osm: '%s' },"
            % (o['stage'], o['type'], json.dumps(o['name'], ensure_ascii=False),
               o['lat'], o['lng'], o['d'],
               json.dumps(o['text'], ensure_ascii=False), o['osm']))
    lines.append('];')
    (ROOT / 'osm-camps-data.js').write_text('\n'.join(lines) + '\n')
    print(f'{len(els)} OSM-Objekte -> {len(out)} Punkte in osm-camps-data.js')


if __name__ == '__main__':
    main()
