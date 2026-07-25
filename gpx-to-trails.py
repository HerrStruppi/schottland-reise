#!/usr/bin/env python3
"""Erzeugt trails-data.js aus den GPX-Dateien in gpx/.

Aufruf:  python3 gpx-to-trails.py

Liest pro Trail eine GPX-Datei mit benannten Tracks (eine pro Etappe) und
schreibt window.TRAILS mit einer Etappenliste pro Trail:

  { whw: { title, stages: [{id, name, from, to, km, up, coords: [[lat,lng],…]}, …] },
    cwt: {…} }

Etappen behalten ihre eigenen Koordinaten, damit die Karte sie einzeln
antippbar machen kann. Tracks werden mit Douglas-Peucker (~6 m Toleranz)
vereinfacht, Koordinaten auf 5 Nachkommastellen gerundet. `up` sind die
Aufstiegs-Höhenmeter (aus den GPX-Höhen, geglättet).

WHW-Etappennamen stammen aus den Komoot-Tournamen ("WHW 1 (A - B)").
CWT-Touren heißen in Komoot nur "CWT 1"…"CWT 15"; Start/Ziel wurden per
Reverse-Geocoding der Endpunkte ermittelt (Stand Juli 2026, siehe CWT_NAMES).
"""
import json
import math
import os
import re
import xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.abspath(__file__))
SOURCES = {
    "whw": ("West Highland Way", "gpx/West-Highland-Way-komplett.gpx"),
    "cwt": ("Cape Wrath Trail", "gpx/Cape-Wrath-Trail-komplett.gpx"),
}
OUT = os.path.join(HERE, "trails-data.js")
TOLERANCE_DEG = 6e-5  # ~6 m in Breitengrad

# Start-/Zielorte der CWT-Etappen (Komoot-Namen sind nur nummeriert)
CWT_NAMES = {
    "CWT 1": ("Fort William (Camusnagaul)", "Glenfinnan"),
    "CWT 2": ("Glenfinnan", "Strathan (Loch Arkaig)"),
    "CWT 3": ("Strathan (Loch Arkaig)", "Barrisdale"),
    "CWT 4": ("Barrisdale", "Morvich (Shiel Bridge)"),
    "CWT 5": ("Morvich (Shiel Bridge)", "Maol-bhuidhe"),
    "CWT 6": ("Maol-bhuidhe", "Craig (Achnashellach)"),
    "CWT 7": ("Craig (Achnashellach)", "Kinlochewe"),
    "CWT 8": ("Kinlochewe", "Shenavall"),
    "CWT 9": ("Shenavall", "Inverlael (Loch Broom)"),
    "CWT 10": ("Inverlael (Loch Broom)", "Oykel Bridge"),
    "CWT 11": ("Oykel Bridge", "Inchnadamph"),
    "CWT 12": ("Inchnadamph", "Kylesku"),
    "CWT 13": ("Kylesku", "Rhiconich"),
    "CWT 14": ("Rhiconich", "Sandwood Bay"),
    "CWT 15": ("Sandwood Bay", "Cape Wrath"),
}

NS = {"gpx": "http://www.topografix.com/GPX/1/1"}


def haversine_km(a, b):
    lat1, lon1, lat2, lon2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = (math.sin((lat2 - lat1) / 2) ** 2
         + math.cos(lat1) * math.cos(lat2) * math.sin((lon2 - lon1) / 2) ** 2)
    return 2 * 6371.0 * math.asin(math.sqrt(h))


def ascent(eles, threshold=5.0):
    """Aufstiegs-Höhenmeter mit Hysterese gegen GPS-Rauschen."""
    total, ref = 0.0, None
    for e in eles:
        if e is None:
            continue
        if ref is None:
            ref = e
        elif e > ref + threshold:
            total += e - ref
            ref = e
        elif e < ref - threshold:
            ref = e
    return total


def simplify(pts, tol):
    """Douglas-Peucker im Gradraum, Längengrad mit cos(lat) skaliert."""
    if len(pts) < 3:
        return pts
    scale = math.cos(math.radians(pts[0][0]))

    def perp_dist(p, a, b):
        ax, ay = a[0], a[1] * scale
        bx, by = b[0], b[1] * scale
        px, py = p[0], p[1] * scale
        dx, dy = bx - ax, by - ay
        if dx == dy == 0:
            return math.hypot(px - ax, py - ay)
        t = max(0.0, min(1.0, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)))
        return math.hypot(px - (ax + t * dx), py - (ay + t * dy))

    keep = [False] * len(pts)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        i0, i1 = stack.pop()
        dmax, imax = 0.0, i0
        for i in range(i0 + 1, i1):
            d = perp_dist(pts[i], pts[i0], pts[i1])
            if d > dmax:
                dmax, imax = d, i
        if dmax > tol:
            keep[imax] = True
            stack.append((i0, imax))
            stack.append((imax, i1))
    return [p for p, k in zip(pts, keep) if k]


def stage_endpoints(key, name):
    if key == "cwt":
        return CWT_NAMES.get(name, (None, None))
    m = re.match(r".*\((.+?)\s*-\s*(.+?)\)", name)
    return (m.group(1), m.group(2)) if m else (None, None)


def read_trail(key, path):
    tree = ET.parse(path)
    stages = []
    for trk in tree.getroot().findall("gpx:trk", NS):
        name = trk.findtext("gpx:name", default="Etappe", namespaces=NS)
        pts, eles = [], []
        for seg in trk.findall("gpx:trkseg", NS):
            for p in seg.findall("gpx:trkpt", NS):
                pts.append((float(p.get("lat")), float(p.get("lon"))))
                ele = p.findtext("gpx:ele", default=None, namespaces=NS)
                eles.append(float(ele) if ele is not None else None)
        if not pts:
            continue
        km = sum(haversine_km(pts[i], pts[i + 1]) for i in range(len(pts) - 1))
        frm, to = stage_endpoints(key, name)
        num = re.search(r"([\d.]+)\s*$", name.split("(")[0])
        stages.append({
            "id": f"{key}-{num.group(1) if num else len(stages) + 1}",
            "name": name, "from": frm, "to": to,
            "km": round(km, 1), "up": int(round(ascent(eles))),
            "coords": [[round(la, 5), round(lo, 5)] for la, lo in simplify(pts, TOLERANCE_DEG)],
        })
    return stages


def main():
    trails = {}
    for key, (title, rel) in SOURCES.items():
        path = os.path.join(HERE, rel)
        if not os.path.exists(path):
            print(f"  {key}: {rel} fehlt – übersprungen")
            continue
        stages = read_trail(key, path)
        trails[key] = {"title": title, "stages": stages}
        total = sum(s["km"] for s in stages)
        pts = sum(len(s["coords"]) for s in stages)
        print(f"  {key}: {len(stages)} Etappen, {pts} Punkte, {total:.0f} km, "
              f"{sum(s['up'] for s in stages)} hm")

    lines = ["// Automatisch erzeugt von gpx-to-trails.py – nicht von Hand editieren.",
             "window.TRAILS = {"]
    for key, t in trails.items():
        lines.append(f'  {key}: {{\n    title: "{t["title"]}",\n    stages: [')
        for s in t["stages"]:
            coords = ",".join(f"[{la},{lo}]" for la, lo in s["coords"])
            j = lambda v: json.dumps(v, ensure_ascii=False)
            lines.append(
                f'      {{id:{j(s["id"])},name:{j(s["name"])},from:{j(s["from"])},'
                f'to:{j(s["to"])},km:{s["km"]},up:{s["up"]},\n'
                f'       coords:[{coords}]}},')
        lines.append("    ]\n  },")
    lines.append("};")
    with open(OUT, "w") as f:
        f.write("\n".join(lines) + "\n")
    print(f"geschrieben: {os.path.relpath(OUT, HERE)} "
          f"({os.path.getsize(OUT) // 1024} kB)")


if __name__ == "__main__":
    main()
