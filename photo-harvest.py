#!/usr/bin/env python3
"""Nachernte für Etappen mit zu wenigen Kandidaten: größerer Radius,
mehr Geduld mit der API, Fehler werden sichtbar gemeldet."""
import json, math, re, subprocess, sys, time, urllib.parse, urllib.request
from pathlib import Path

ROOT = Path('/Users/zacha/GitHub Repositories/schottland-reise')
UA = 'schottland-reise/1.0 (zacharias.beermann@intomedia.de)'
SAMPLE_KM = 6.0
RADIUS_M = 7000
MAX_DIST_KM = 4.0
MIN_W, MIN_H = 1100, 750

BAD = re.compile(r'\b(sign|signpost|plaque|memorial|milestone|bench|gate|stile|'
                 r'car ?park|parking|bus stop|telephone|postbox|post box|litter|bin|'
                 r'map|diagram|chart|logo|coat of arms|grave|cemetery|'
                 r'trig point|boundary stone|cattle grid|pylon|substation|manhole|'
                 r'skull|schädel|roadworks|fank|ruined building)\b', re.I)
GOOD = re.compile(r'\b(loch|glen|bealach|coire|corrie|beinn|ben |sgurr|stob|'
                  r'summit|ridge|falls|waterfall|river|burn|bay|beach|moor|strath|'
                  r'view|looking|panorama|sunset|sunrise|bothy|valley|mountain|'
                  r'lighthouse|cliff|dunes|sands|path|track|glen)\b', re.I)


def hav(a, b):
    r, R = math.pi / 180, 6371
    h = (math.sin((b[0]-a[0])*r/2)**2
         + math.cos(a[0]*r)*math.cos(b[0]*r)*math.sin((b[1]-a[1])*r/2)**2)
    return 2 * R * math.asin(math.sqrt(h))


def stages():
    js = ("global.window={};require('%s');const o=[];"
          "for(const k in window.TRAILS)for(const s of window.TRAILS[k].stages)"
          "o.push({id:s.id,coords:s.coords});console.log(JSON.stringify(o));"
          % (ROOT / 'trails-data.js'))
    return json.loads(subprocess.run(['node', '-e', js], capture_output=True,
                                     text=True, check=True).stdout)


def geosearch(lat, lng):
    p = {'action': 'query', 'format': 'json', 'generator': 'geosearch',
         'ggscoord': f'{lat}|{lng}', 'ggsradius': RADIUS_M, 'ggslimit': 40,
         'ggsnamespace': 6, 'prop': 'imageinfo|coordinates',
         'iiprop': 'url|size|extmetadata', 'iiurlwidth': 1280,
         'colimit': 'max'}
    u = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(p)
    for attempt in range(5):
        try:
            req = urllib.request.Request(u, headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=90) as f:
                return json.load(f)
        except Exception as e:                       # noqa: BLE001
            print(f'    Versuch {attempt+1} fehlgeschlagen: {e}', flush=True)
            time.sleep(3 * (attempt + 1))
    return {}


def strip(s):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', s or '')).strip()


def main():
    thin = sys.argv[1:]
    cand = json.loads(Path('photo-candidates.json').read_text())
    allst = {s['id']: s['coords'] for s in stages()}

    for sid in thin:
        c = allst[sid]
        pts, acc = [c[0]], 0.0
        for i in range(1, len(c)):
            acc += hav(c[i-1], c[i])
            if acc >= SAMPLE_KM:
                pts.append(c[i]); acc = 0.0
        pts.append(c[-1])
        have = {x['pid'] for x in cand.get(sid, [])}
        found = list(cand.get(sid, []))
        fails = 0
        for n, p in enumerate(pts):
            d = geosearch(p[0], p[1])
            pages = (d.get('query') or {}).get('pages', {})
            if not pages:
                fails += 1
            for page in pages.values():
                pid = page['pageid']
                if pid in have:
                    continue
                ii = (page.get('imageinfo') or [{}])[0]
                if not ii.get('thumburl'):
                    continue
                title = page['title'][5:]
                if not re.search(r'\.(jpe?g|png)$', title, re.I):
                    continue
                w, h = ii.get('width', 0), ii.get('height', 0)
                if w < MIN_W or h < MIN_H:
                    continue
                co = (page.get('coordinates') or [{}])[0]
                if co.get('lat') is None:
                    continue
                dist = min(hav([co['lat'], co['lon']], x) for x in c[::max(1, len(c)//500)])
                if dist > MAX_DIST_KM:
                    continue
                md = ii.get('extmetadata') or {}
                name = re.sub(r'\s*-\s*geograph\.org\.uk\s*-\s*\d+', '', title)
                name = re.sub(r'\.(jpe?g|png)$', '', name, flags=re.I).replace('_', ' ')
                score = (3 if GOOD.search(name) else 0) - (6 if BAD.search(name) else 0)
                score += min(3, (w * h) / 6e6) - dist
                have.add(pid)
                found.append({'pid': pid, 'title': title, 'name': name, 'w': w, 'h': h,
                              'dist': round(dist, 2), 'lat': co['lat'], 'lng': co['lon'],
                              'artist': strip((md.get('Artist') or {}).get('value')),
                              'lic': strip((md.get('LicenseShortName') or {}).get('value')),
                              'thumb': ii['thumburl'], 'descurl': ii.get('descriptionurl'),
                              'score': round(score, 2)})
            print(f'  {sid} Punkt {n+1}/{len(pts)} -> {len(found)} Kandidaten', flush=True)
            time.sleep(0.3)
        cand[sid] = sorted(found, key=lambda x: -x['score'])
        print(f'{sid}: {len(cand[sid])} Kandidaten ({fails} Fehlversuche)', flush=True)
        Path('photo-candidates.json').write_text(json.dumps(cand, ensure_ascii=False))
    print('fertig')


if __name__ == '__main__':
    main()
