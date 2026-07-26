# Schottland August 2026 – Trail- & Transportkarte

Interaktive, **mobile-first** Karte (Leaflet + OpenStreetMap) für eine Wanderung
auf dem **West Highland Way** (Milngavie–Fort William) und dem **Cape Wrath
Trail** (Fort William–Cape Wrath) im Zeitraum **21.08.–01.09.2026**, inklusive
aller relevanten Bahn- und Buslinien mit Fahrzeiten.

**PWA, offline-fähig.** Auf dem iPhone: Link in Safari öffnen → Teilen →
„Zum Home-Bildschirm“. Beim ersten Öffnen lädt die App automatisch das
Offline-Kartenpaket (~92 MB); danach funktioniert alles ohne Netz.

**Zugang:** Die App ist mit einem Passwort-Gate versehen (Standard:
`cape-wrath-2026`, danach Namen wählen). Ändern: neuen SHA-256-Hex-Hash in
`index.html` (`GATE.hash`) eintragen (`echo -n 'neues-pw' | shasum -a 256`).
Hinweis: Das Gate ist Komfort-Schutz im Client – das Repo selbst ist öffentlich.

**Features:** Etappen-Modus mit ausführlicher Beschreibung, ~190 Komoot-Fotos inkl.
Vollbild-Galerie
(`stage-info-data.js`, Fotos werden vom Komoot-CDN geladen und auf dem Gerät
gecacht, nicht im Repo gespeichert), Daumen-Bewertung (hoch/runter) pro Etappe mit Zählern (lokal pro Gerät,
`localStorage`; Datenstruktur für späteren Geräte-Sync vorbereitet), Zeltplatz-Kandidaten mit Quellen (`camps-data.js`,
Karte ab Zoom 10 + im Etappen-Sheet), Linien-Modus mit Fahrplantabellen und
„Zeiten prüfen“-Links zu den offiziellen Seiten.

## Installation & Updates

- **Hosting**: GitHub Pages, Deploy per GitHub Action bei jedem Push auf `main`
  (`.github/workflows/deploy.yml`: regeneriert `trails-data.js`, stempelt die
  Service-Worker-Version mit dem Commit-Hash, deployt).
- **Updates auf den Geräten**: automatisch beim nächsten Öffnen mit Netz
  (Service-Worker-Update, Toast „App aktualisiert“). Niemand muss neu installieren.
- **Offline-Architektur**:
  - App-Shell + Daten: Service-Worker-Precache (`sw.js`).
  - Basiskarte: Vektor-Kacheln (Protomaps/PMTiles, `tiles/scotland.pmtiles`,
    bbox −6.05…−3.8 / 55.75…58.8, z0–14). Die Seite rendert sie mit
    protomaps-leaflet über den virtuellen Endpoint `vt/{z}/{x}/{y}.mvt`,
    den der Service Worker bedient: bevorzugt aus dem lokal gespeicherten
    Paket (**IndexedDB** – iOS leert Cache Storage beim App-Schließen,
    IndexedDB bleibt), sonst per HTTP-Range-Request vom Server.
  - Außerhalb des Pakets: normale Online-OSM-Kacheln als Fallback-Ebene
    (leere Vektor-Kacheln bleiben transparent). OpenTopoMap-Umschalter ist
    online-only.
  - `tiles-meta.json` beschreibt das Paket (Größe/Build) für Integritäts-Check
    und Update-Erkennung; Statusanzeige und Nachladen in der Übersicht.
- **Kachelpaket erneuern** (z. B. neuer OSM-Stand):
  `pmtiles extract https://build.protomaps.com/<datum>.pmtiles tiles/scotland.pmtiles --bbox=-6.05,55.75,-3.8,58.8 --maxzoom=14`,
  dann Größe/Build in `tiles-meta.json` anpassen.

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | Die App (Karte + UI), eigenständig lauffähig (Internet nur für Kartenkacheln nötig). |
| `trails-data.js` | Generierte Trail-Daten (`window.TRAILS`): pro Etappe Name, Start/Ziel, km, Höhenmeter und eigene Koordinaten. **Nicht von Hand editieren** – mit `gpx-to-trails.py` neu erzeugen. |
| `transit-data.js` | ÖPNV-Daten (`window.TRANSIT`): Linien mit Strecken, Halten (inkl. Koordinaten), Fahrplantabellen, Hinweisen und Warnungen. Von Hand gepflegt, Quelle: `fahrplaene.md`. |
| `gpx-to-trails.py` | Konverter: liest die GPX-Dateien aus `gpx/`, vereinfacht (Douglas-Peucker ~6 m) und schreibt `trails-data.js`. Enthält die Ortsnamen der CWT-Etappen (`CWT_NAMES`). |
| `stage-info-data.js` | Etappen-Kurztexte + Komoot-Highlight-Foto-URLs (generiert, Stand Juli 2026) |
| `camps-data.js` | Zeltplatz-Kandidaten mit Beschreibung und Quelle (von Hand gepflegt) |
| `vendor/flavor-scotland.js` | Farbschema der Vektorkarte (OSM-Carto-angelehnt, generiert aus @protomaps/basemaps `light`) |
| `fahrplaene.md` | Zug- und Busfahrpläne als Text (Quelle der Fahrplantabellen) |
| `gpx/West-Highland-Way-komplett.gpx` | 12 Etappen als benannte Tracks, mit Höhendaten (Original-Export) |
| `gpx/Cape-Wrath-Trail-komplett.gpx` | 15 Etappen als benannte Tracks, mit Höhendaten (auf ~6 m vereinfachter Re-Export aus Komoot, Juli 2026) |

## Aufbau der App

Eine HTML-Datei ohne Build-Tools, Design orientiert an Google Maps mobil:

- **Vollbild-Karte** (OSM/OpenTopoMap umschaltbar, Standort-Button) mit
  **Bottom Sheet** (ziehbar: Peek / halb / voll).
- **Trails als Hauptlinien** (WHW grün, CWT orange), jede Etappe einzeln
  antippbar; ÖPNV bewusst dünn und gedeckt, aber mit Beschriftungs-Pill
  (🚂/🚌/⛴) auf der Strecke.
- **Zwischenstationen** (Etappenpunkte) mit Namen; Labels erscheinen ab
  Zoom 8, Bahn-/Bushalte ab Zoom 9 oder im Linien-Modus.
- **Etappen-Modus** (Etappe antippen): Zoom auf die Etappe, Karte dimmt den
  Rest; Sheet zeigt Start → Ziel, km, Aufstieg, Hinweise sowie die
  ÖPNV-Anbindung an Start und Ziel (Halte im Umkreis von 5 km Luftlinie,
  automatisch aus `transit-data.js` berechnet). Blättern zwischen Etappen.
- **Linien-Modus** (Linie/Halt/Pill antippen): Zoom auf die Linie, alle Halte
  mit Namen, Fahrplantabellen, Betriebstage, Warnungen (rot) und
  Telefon-Buttons (z. B. Cape-Wrath-Fähre).
- Datenmodell: `window.TRAILS` (`trails-data.js`) + `window.TRANSIT`
  (`transit-data.js`), beide als `<script src>` vor Leaflet geladen.
- Bus-/Bahnlinien sind vereinfachte Punkt-zu-Punkt-Polylinien (nicht straßengenau).

## Datenherkunft & Stand

- **Trails**: Komoot-Collection "Schottland August 2026" (27 Touren: WHW 1–8
  mit Zwischenetappen, CWT 1–15), exportiert Juli 2026 über die Komoot-API
  (`/api/v007/tours/{id}/coordinates`). CWT-Tracks liegen nur als auf ~6 m
  vereinfachter Re-Export vor (für die Karte irrelevant).
- **CWT-Etappennamen**: Komoot-Touren heißen nur "CWT 1–15"; Start-/Zielorte
  wurden per Reverse-Geocoding (Nominatim) der Endpunkte bestimmt und in
  `gpx-to-trails.py` (`CWT_NAMES`) festgeschrieben.
- **Zugzeiten West Highland Line**: Detailfahrplan Sommer 2026
  (railwaydata.co.uk, Table 023), gültig **17.05.–12.09.2026** – deckt den
  Reisezeitraum ab. Gegengeprüft mit ScotRail-Buchungsdaten.
- **Busse** (Stand Juli 2026): Citylink 915 (bustimes.org), 805 Far North
  (thedurnessbus.com / bustimes.org), Westerbus 700/700A/707
  (Betreiber-Timetable), Citylink 961 + D&E 61.
- **Wichtige Eigenheiten**: Zug teilt sich in Crianlarich (hinterer Teil →
  Mallaig); sonntags kein 805er und kein Morgenzug ab Glasgow; Inchnadamph
  und Kylesku haben 2026 **keinen** Linienbus; Cape-Wrath-Fähre nur ca.
  Mai–Sep, gezeiten-/wetter-/MOD-abhängig (Fähre +44 1971 511246,
  Minibus +44 7742 670196).

⚠️ Fahrzeiten vor der Reise gegen travelinescotland.com / ScotRail-App
prüfen (Bauarbeiten, kurzfristige Änderungen).

## Ideen für die Weiterarbeit

- Höhenprofile aus den GPX-Dateien im Etappen-Sheet anzeigen
- Vote-Sync zwischen den drei Geräten (z. B. privates Gist; Datenstruktur ist vorbereitet)
- Tagesplan-Ansicht: Datum wählen → passende Abfahrten hervorheben
- Unterkünfte (B&Bs/Hostels) als eigene Ebene ergänzen
