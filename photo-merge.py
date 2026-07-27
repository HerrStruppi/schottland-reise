#!/usr/bin/env python3
"""Schreibt die ausgewählten Commons-Fotos in stage-info-data.js.

Eingabe: picks.json  {stage_id: [pid, pid, ...]}  – die visuell bestätigten Bilder.
Von den bisherigen Komoot-Fotos bleiben je Etappe die ersten KEEP_KOMOOT übrig:
sie zeigen oft Dinge, die auf Commons niemand fotografiert hat (Bothy-Inneres,
Fähre, eine bestimmte Furt).
"""
import json, re
from pathlib import Path

ROOT = Path('/Users/zacha/GitHub Repositories/schottland-reise')
KEEP_KOMOOT = 2

cand = json.loads(Path('photo-candidates.json').read_text())
picks = json.loads(Path('picks.json').read_text())
by_pid = {c['pid']: c for lst in cand.values() for c in lst}


def thumb_urls(titles, width):
    """Wikimedia erlaubt beim Hotlinking nur feste Thumbnail-Breiten
    (250/330/500/960/1280/1920/3840). Deshalb NICHT die URL umschreiben,
    sondern von der API die passende erzeugen lassen. 50 Titel je Anfrage."""
    import urllib.request, urllib.parse
    UA = ('schottland-reise/1.0 (https://github.com/HerrStruppi/schottland-reise; '
          'zacharias.beermann@intomedia.de)')
    out = {}
    for i in range(0, len(titles), 50):
        chunk = titles[i:i+50]
        p = {'action': 'query', 'format': 'json', 'titles': '|'.join('File:' + x for x in chunk),
             'prop': 'imageinfo', 'iiprop': 'url', 'iiurlwidth': width}
        u = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(p)
        d = json.load(urllib.request.urlopen(
            urllib.request.Request(u, headers={'User-Agent': UA}), timeout=60))
        for pg in d['query']['pages'].values():
            ii = (pg.get('imageinfo') or [{}])[0]
            if ii.get('thumburl'):
                out[pg['title'][5:]] = ii['thumburl']
    return out


def credit(c):
    artist = c['artist'] or 'unbekannt'
    artist = re.sub(r'\s*\(.*?\)\s*$', '', artist).strip()
    src = 'geograph.org.uk' if 'geograph' in c['title'].lower() else 'Wikimedia Commons'
    lic = c['lic'] or 'CC'
    return f'© {artist}, {src}, {lic}'


def js_str(s):
    return json.dumps(s, ensure_ascii=False)


# Alle ausgewählten Titel einsammeln und beide Größen von der API holen
sel_titles = []
for pids in picks.values():
    for pid in pids:
        c = by_pid.get(pid)
        if c and c['title'] not in sel_titles:
            sel_titles.append(c['title'])
print(f'{len(sel_titles)} Bilder – hole URLs in beiden Größen …')
SMALL = thumb_urls(sel_titles, 500)
BIG = thumb_urls(sel_titles, 1280)
print(f'  {len(SMALL)} / {len(BIG)} URLs erhalten')

t = ROOT.joinpath('stage-info-data.js').read_text()
total_new = total_kept = 0

for sid, pids in picks.items():
    # bisherigen photos-Block dieser Etappe finden
    m = re.search(r'("%s":\s*\{.*?)photos:\s*\[(.*?)\]\n' % re.escape(sid), t, re.S)
    if not m:
        print('kein photos-Block für', sid); continue
    old = re.findall(r'\{ url: "(.*?)", big: "(.*?)", credit: "(.*?)" \}', m.group(2))
    keep = old[:KEEP_KOMOOT]

    lines = []
    for pid in pids:
        c = by_pid.get(pid)
        if not c:
            print('  unbekannte pid', pid, 'bei', sid); continue
        small, big = SMALL.get(c['title']), BIG.get(c['title'])
        if not small or not big:
            print('  keine URL für', c['title']); continue
        lines.append('      { url: %s, big: %s, credit: %s }' % (
            js_str(small), js_str(big), js_str(credit(c))))
    for u, b, cr in keep:
        lines.append('      { url: "%s", big: "%s", credit: "%s" }' % (u, b, cr))

    total_new += len(pids); total_kept += len(keep)
    block = 'photos: [\n' + ',\n'.join(lines) + '\n    ]\n'
    t = t[:m.start(0)] + m.group(1) + block + t[m.end(0):]

ROOT.joinpath('stage-info-data.js').write_text(t)
print(f'{total_new} Commons-Fotos eingesetzt, {total_kept} Komoot-Fotos behalten')
