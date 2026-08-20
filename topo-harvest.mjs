// Einmaliger Kachel-Einsammler für die Geländekarte (läuft als GitHub Action,
// siehe .github/workflows/harvest-topo.yml).
//
// Lädt den Routen-Korridor (z8–16) EINMAL von OpenTopoMap und packt ihn in
// wenige Paketdateien unter tiles/. Die App lädt danach nur noch diese Pakete
// vom eigenen Hosting – schnell, ohne Drosselung, und OpenTopoMap wird nicht
// mehr von jedem Gerät einzeln belastet. Die Kacheln stehen unter CC-BY-SA
// (© OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung © OpenTopoMap);
// die Attribution bleibt in der App an der Kartenansicht.
//
// Höflich per Absicht: 2 parallele Verbindungen (OSM-Tile-Policy), sprechender
// User-Agent, bei 429/503 gemeinsame Pause mit wachsendem Backoff. Läuft das
// Skript erneut, werden vorhandene Kacheln übersprungen (Resume über topo-tiles/).
//
// Paketformat (.tpk): "TPK1" | uint32-LE Indexlänge | Index-JSON [[key,len],…]
// | PNG-Bytes in Indexreihenfolge. Muss zu unpackTopoPart() in index.html passen.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const RAW = path.join(ROOT, 'topo-tiles');          // Roh-Kacheln (gitignored)
const OUT = path.join(ROOT, 'tiles');
const UA = 'schottland-reise-offline-pack/1.0 (+https://github.com/HerrStruppi/schottland-reise; einmaliger Korridor-Download, danach Selbst-Hosting)';
const CONC = 4;                                     // moderat; 429/503 bremsen zusätzlich
/* Zwei verschiedene Sorten Lücke, die man nicht gleich behandeln darf:
   404/403 heißt "gibt es dort nicht" – Wiederholen hilft nie.
   Netzfehler/5xx heißen "gerade nicht" – die kann ein Folgelauf holen.
   Nur Letztere sind ein Grund, den Paketbau zu verweigern. */
const MAX_UNRESOLVED = 0.02;                        // 2 % echte Ausfälle toleriert
const PART_MAX = 88 * 1024 * 1024;                  // GitHub-Limit: 100 MB/Datei
const BUILD = (process.env.GITHUB_SHA || 'dev').slice(0, 10) + '-' + new Date().toISOString().slice(0, 10);
/* Zeitbudget: rechtzeitig VOR dem Job-Timeout sauber aufhören, damit der
   Zwischenstand über den Actions-Cache in den nächsten Lauf gerettet wird. */
const DEADLINE = Date.now() + (parseInt(process.env.TIME_BUDGET_MIN || '0', 10) || 1e6) * 60000;

/* ---------- Kachelliste: identische Korridor-Logik wie früher in der App ---------- */
function loadData(file) {
  const w = {};
  new Function('window', fs.readFileSync(path.join(ROOT, file), 'utf8'))(w);
  return w;
}
const { TRAILS } = loadData('trails-data.js');
const { PLACES } = loadData('places-data.js');
const TOPO_ZOOMS = [[8, 0], [9, 0], [10, 3], [11, 3], [12, 3], [13, 2.5], [14, 2], [15, 1.5], [16, 1]];

function tileList() {
  const pts = [];
  for (const key of Object.keys(TRAILS)) for (const s of TRAILS[key].stages) for (const c of s.coords) pts.push(c);
  for (const p of (PLACES || [])) pts.push([p.lat, p.lng]);
  const out = [];
  for (const [z, bufKm] of TOPO_ZOOMS) {
    const n = 2 ** z, set = new Set();
    const tileKm = 40075 * Math.cos(57 * Math.PI / 180) / n;
    const r = Math.ceil(bufKm / tileKm);
    for (const c of pts) {
      const x = Math.floor((c[1] + 180) / 360 * n);
      const lat = c[0] * Math.PI / 180;
      const y = Math.floor((1 - Math.log(Math.tan(lat) + 1 / Math.cos(lat)) / Math.PI) / 2 * n);
      for (let dx = -r; dx <= r; dx++) for (let dy = -r; dy <= r; dy++) set.add((x + dx) + '/' + (y + dy));
    }
    for (const k of set) out.push(z + '/' + k);
  }
  return out;
}

/* ---------- Download mit Resume, 2 Workern und gemeinsamer Backoff-Pause ---------- */
const sleep = ms => new Promise(r => setTimeout(r, ms));
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47]);

const ABSENT_FILE = path.join(RAW, '_absent.json');
function loadAbsent() {
  try { return new Set(JSON.parse(fs.readFileSync(ABSENT_FILE, 'utf8'))); } catch { return new Set(); }
}

async function harvest(list) {
  fs.mkdirSync(RAW, { recursive: true });
  const known = loadAbsent();
  const todo = list.filter(k => {
    if (known.has(k)) return false;                 // schon als nicht vorhanden bekannt
    const f = path.join(RAW, k.replaceAll('/', '_') + '.png');
    return !(fs.existsSync(f) && fs.statSync(f).size > 0);
  });
  console.log(`${list.length} Kacheln im Korridor, ${todo.length} fehlen noch` +
    (known.size ? `, ${known.size} bekannt nicht vorhanden.` : '.'));
  let next = 0, done = 0, pauseUntil = 0, backoff = 4000;
  const failed = [], absent = [...known];
  const t0 = Date.now();
  const SUB = ['a', 'b', 'c'];

  async function worker() {
    for (;;) {
      const now = Date.now();
      if (now > DEADLINE) break;
      if (now < pauseUntil) { await sleep(Math.min(1000, pauseUntil - now)); continue; }
      if (next >= todo.length) break;
      const idx = next++;
      const k = todo[idx];
      const [z, x, y] = k.split('/');
      let attempts = 0, saved = false;
      while (attempts < 8 && !saved) {
        attempts++;
        while (Date.now() < pauseUntil) await sleep(1000);
        try {
          const r = await fetch(`https://${SUB[idx % 3]}.tile.opentopomap.org/${z}/${x}/${y}.png`, {
            headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000)
          });
          if (r.status === 429 || r.status === 503) {
            const ra = parseInt(r.headers.get('retry-after'), 10);
            const wait = ra > 0 && ra <= 300 ? ra * 1000 : backoff;
            backoff = Math.min(backoff * 2, 120000);
            pauseUntil = Date.now() + wait;
            console.log(`HTTP ${r.status} – Pause ${Math.round(wait / 1000)}s (Kachel ${k})`);
            continue;
          }
          if (r.status === 404 || r.status === 403 || r.status === 410) {
            /* Endgültig: Die Kachel gibt es dort nicht. Achtmal nachfragen
               kostet nur Zeit. Fehlende Kacheln sind unkritisch – der Service
               Worker lässt an der Stelle die Vektorkarte durchscheinen. */
            absent.push(k);
            saved = true;
            break;
          }
          if (!r.ok) throw new Error('HTTP ' + r.status);
          const buf = Buffer.from(await r.arrayBuffer());
          if (!buf.subarray(0, 4).equals(PNG_MAGIC)) throw new Error('kein PNG');
          fs.writeFileSync(path.join(RAW, k.replaceAll('/', '_') + '.png'), buf);
          backoff = 4000;
          saved = true;
        } catch (e) {
          if (attempts >= 8) { failed.push(k + ' (' + e.message + ')'); break; }
          await sleep(1500 * attempts);
        }
      }
      done++;
      if (done % 250 === 0 || done === todo.length) {
        const rate = done / ((Date.now() - t0) / 1000);
        const eta = Math.round((todo.length - done) / Math.max(rate, 0.1) / 60);
        console.log(`${done}/${todo.length} (${rate.toFixed(1)}/s, noch ~${eta} min)`);
      }
    }
  }
  await Promise.all(Array.from({ length: CONC }, () => worker()));
  if (absent.length) {
    fs.writeFileSync(ABSENT_FILE, JSON.stringify(absent));
    console.log(`${absent.length} Kacheln gibt es bei OpenTopoMap nicht (404/403) – übersprungen.`);
  }
  if (failed.length) {
    console.error(`${failed.length} Kacheln in diesem Lauf gescheitert (erste 20):\n` + failed.slice(0, 20).join('\n'));
  }
  return { absent, failed };
}

/* ---------- Packen: Teile ≤ 88 MB, niedrige Zoomstufen zuerst ---------- */
function pack(list, stats = {}) {
  // z aufsteigend, dann x/y – so ist die Karte schon nach dem ersten Teil
  // grob nutzbar und wird mit jedem weiteren Teil feiner.
  const sorted = [...list].sort((a, b) => {
    const [az, ax, ay] = a.split('/').map(Number), [bz, bx, by] = b.split('/').map(Number);
    return az - bz || ax - bx || ay - by;
  });
  for (const f of fs.readdirSync(OUT)) {
    if (/^topo-pack-\d+\.tpk$/.test(f)) fs.unlinkSync(path.join(OUT, f));
  }
  const parts = [];
  let cur = [], curBytes = 0;
  const flushPart = () => {
    if (!cur.length) return;
    const i = parts.length;
    const index = Buffer.from(JSON.stringify(cur.map(([k, buf]) => [k, buf.length])));
    const head = Buffer.alloc(8);
    head.write('TPK1', 0, 'ascii');
    head.writeUInt32LE(index.length, 4);
    const file = `topo-pack-${i}.tpk`;
    fs.writeFileSync(path.join(OUT, file), Buffer.concat([head, index, ...cur.map(([, b]) => b)]));
    const size = fs.statSync(path.join(OUT, file)).size;
    parts.push({ file, size, tiles: cur.length });
    console.log(`${file}: ${cur.length} Kacheln, ${(size / 1048576).toFixed(1)} MB`);
    cur = []; curBytes = 0;
  };
  for (const k of sorted) {
    const buf = fs.readFileSync(path.join(RAW, k.replaceAll('/', '_') + '.png'));
    if (curBytes + buf.length > PART_MAX) flushPart();
    cur.push([k, buf]);
    curBytes += buf.length;
  }
  flushPart();
  const meta = {
    build: BUILD,
    zooms: '8-16',
    tiles: list.length,
    corridor: stats.total ?? list.length,
    missing: stats.missing ?? 0,
    absent: stats.absent ?? 0,
    size: parts.reduce((a, p) => a + p.size, 0),
    parts,
    attribution: '© OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung © OpenTopoMap (CC-BY-SA)'
  };
  fs.writeFileSync(path.join(OUT, 'topo-meta.json'), JSON.stringify(meta, null, 1));
  console.log(`Gesamt: ${list.length} Kacheln, ${(meta.size / 1048576).toFixed(1)} MB in ${parts.length} Teilen.`);
}

const list = tileList();
const { absent } = await harvest(list);

const have = list.filter(k => {
  const f = path.join(RAW, k.replaceAll('/', '_') + '.png');
  return fs.existsSync(f) && fs.statSync(f).size > 0;
});
const missing = list.length - have.length;
const unresolved = missing - absent.length;
console.log(`${have.length} von ${list.length} Kacheln vorhanden ` +
  `(${(have.length / list.length * 100).toFixed(2)} %); ` +
  `${absent.length} nicht vorhanden, ${unresolved} offen.`);

/* Früher wurde hier bei auch nur einer fehlenden Kachel abgebrochen. Das hat
   einen kurzen 404-Schluckauf des Kartenservers in den Totalverlust eines
   sechsstündigen Laufs verwandelt – und weil der Actions-Cache nach sieben
   Tagen verfällt, war der Zwischenstand dann auch weg. Fehlende Kacheln sind
   in Wahrheit harmlos: Der Service Worker lässt dort einfach die Vektorkarte
   durchscheinen. Also packen wir, sobald der Korridor im Wesentlichen steht,
   und schreiben die Lücken in die Metadaten. */
if (unresolved > list.length * MAX_UNRESOLVED) {
  console.error(`${unresolved} Kacheln noch offen (über ${(MAX_UNRESOLVED * 100)} %) – keine Pakete gebaut. ` +
    'Zwischenstand liegt in topo-tiles/ (Actions-Cache); der nächste Lauf setzt dort fort.');
  process.exit(1);
}
pack(have, { total: list.length, missing, absent: absent.length });
