/* Service Worker: App-Shell-Cache, Vektor-Kacheln aus dem PMTiles-Offline-Paket
   (oder per Range-Request vom Server), Raster-Fallback-Cache. */
'use strict';
importScripts('vendor/pmtiles.js');

const VERSION = '__VERSION__'; // wird beim Deploy durch den Commit-Hash ersetzt
const SHELL_CACHE = 'shell-' + VERSION;
const PKG_CACHE = 'tilepkg-v1';     // überlebt App-Updates
const RASTER_CACHE = 'raster-v1';
const PKG_KEY = 'pkg.pmtiles';

const SHELL = [
  './', 'index.html', 'trails-data.js', 'transit-data.js', 'tiles-meta.json',
  'stage-info-data.js', 'camps-data.js',
  'vendor/leaflet.min.js', 'vendor/leaflet.min.css',
  'vendor/protomaps-leaflet.js', 'vendor/pmtiles.js', 'vendor/flavor-scotland.js',
  'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(SHELL_CACHE)
      .then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) {
      if (k.startsWith('shell-') && k !== SHELL_CACHE) await caches.delete(k);
    }
    await self.clients.claim();
    const cs = await self.clients.matchAll();
    cs.forEach(c => c.postMessage({ type: 'sw-updated', version: VERSION }));
  })());
});

/* ---------- Paket-Speicher: IndexedDB ----------
   Wichtig für iOS: Cache Storage gilt als "purgeable" und wird bei
   Speicherdruck/App-Schließen geleert – IndexedDB-Daten bleiben erhalten. */
function idbOpen() {
  return new Promise((res, rej) => {
    const q = indexedDB.open('highlands', 1);
    q.onupgradeneeded = () => q.result.createObjectStore('kv');
    q.onsuccess = () => res(q.result);
    q.onerror = () => rej(q.error);
  });
}
async function idbGet(key) {
  const db = await idbOpen();
  return new Promise((res, rej) => {
    const r = db.transaction('kv', 'readonly').objectStore('kv').get(key);
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function idbSet(key, val) {
  const db = await idbOpen();
  return new Promise((res, rej) => {
    const tx = db.transaction('kv', 'readwrite');
    tx.objectStore('kv').put(val, key);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}

/* ---------- PMTiles-Quellen ---------- */
class BlobSource {
  constructor(blob) { this.blob = blob; }
  getKey() { return 'pkg'; }
  async getBytes(offset, length) {
    const data = await this.blob.slice(offset, offset + length).arrayBuffer();
    return { data };
  }
}
let pkgPromise = null;    // memoisiertes Promise (verhindert Races bei parallelen Kacheln)
let remoteInstance = null;

function getPkg() {
  if (!pkgPromise) {
    pkgPromise = (async () => {
      try {
        let blob = await idbGet('pkg');
        if (!blob) {
          // Migration von früherer Version, die den Cache Storage nutzte
          try {
            const cache = await caches.open(PKG_CACHE);
            const resp = await cache.match(PKG_KEY);
            if (resp) {
              blob = await resp.blob();
              await idbSet('pkg', blob);
              await cache.delete(PKG_KEY);
            }
          } catch (e) { /* Migration optional */ }
        }
        if (!blob) return null;
        return new pmtiles.PMTiles(new BlobSource(blob));
      } catch (err) { return null; }
    })();
  }
  return pkgPromise;
}
function getRemote() {
  if (!remoteInstance) {
    const url = new URL('tiles/scotland.pmtiles', self.registration.scope).href;
    remoteInstance = new pmtiles.PMTiles(new pmtiles.FetchSource(url));
  }
  return remoteInstance;
}

async function serveTile(z, x, y) {
  const headers = { 'Content-Type': 'application/x-protobuf', 'Cache-Control': 'no-store' };
  const pkg = await getPkg();
  if (pkg) {
    try {
      const t = await pkg.getZxy(z, x, y);
      if (t && t.data && t.data.byteLength) return new Response(t.data, { headers });
      return new Response('', { status: 204 });
    } catch (err) { /* Paket kaputt? -> remote versuchen */ }
  }
  try {
    const t = await getRemote().getZxy(z, x, y);
    if (t && t.data && t.data.byteLength) return new Response(t.data, { headers });
    return new Response('', { status: 204 });
  } catch (err) {
    return new Response('', { status: 503 });
  }
}

/* Rasterkachel-Cache begrenzen: undurchsichtige ("opaque") Antworten werden
   vom Browser mit einem großzügigen Aufschlag auf das Speicherkontingent
   angerechnet – ohne Deckel würde die Geländekarte das Kontingent sprengen
   und im schlimmsten Fall das Offline-Paket mitreißen. */
const RASTER_MAX = 1400;
let trimming = false;
async function trimRaster() {
  if (trimming) return;
  trimming = true;
  try {
    const cache = await caches.open(RASTER_CACHE);
    const keys = await cache.keys();
    for (let i = 0; i < keys.length - RASTER_MAX; i++) await cache.delete(keys[i]);
  } catch (err) { /* egal */ }
  trimming = false;
}

/* ---------- Fetch-Routing ---------- */
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;

  // Virtuelle Vektor-Kachel-URL: …/vt/{z}/{x}/{y}.mvt
  const vt = url.pathname.match(/\/vt\/(\d+)\/(\d+)\/(\d+)\.mvt$/);
  if (vt && url.origin === self.location.origin) {
    e.respondWith(serveTile(+vt[1], +vt[2], +vt[3]));
    return;
  }

  // Das Offline-Paket selbst nie abfangen (Download läuft über die Seite)
  if (url.pathname.endsWith('.pmtiles')) return;

  // Etappen-Fotos (Wikimedia/Geograph/Komoot): cache first, dauerhaft offline
  if (/wikimedia\.org|wikipedia\.org|geograph\.org|komoot\.|cloudfront\.net/.test(url.host)) {
    e.respondWith((async () => {
      const cache = await caches.open('photos-v1');
      const hit = await cache.match(e.request);
      if (hit) return hit;
      try {
        const resp = await fetch(e.request);
        if (resp && (resp.ok || resp.type === 'opaque')) cache.put(e.request, resp.clone());
        return resp;
      } catch (err) { return new Response('', { status: 503 }); }
    })());
    return;
  }

  // Online-Rasterkacheln (OSM/OpenTopoMap): network first, Cache als Fallback.
  // OpenTopoMap liefert keine CORS-Header -> die Antwort ist "opaque" und
  // resp.ok ist false. Trotzdem speichern, sonst wäre die (standardmäßig
  // aktive) Geländekarte offline komplett leer.
  if (/tile\.openstreetmap\.org|opentopomap\.org/.test(url.host)) {
    e.respondWith((async () => {
      const cache = await caches.open(RASTER_CACHE);
      try {
        const resp = await fetch(e.request);
        if (resp && (resp.ok || resp.type === 'opaque')) {
          cache.put(e.request, resp.clone()).then(trimRaster);
        }
        return resp;
      } catch (err) {
        const hit = await cache.match(e.request);
        return hit || new Response('', { status: 503 });
      }
    })());
    return;
  }

  // App-Shell: cache first
  if (url.origin === self.location.origin) {
    e.respondWith((async () => {
      const hit = await caches.match(e.request, { ignoreSearch: true });
      if (hit) return hit;
      try { return await fetch(e.request); }
      catch (err) {
        const idx = await caches.match('index.html');
        return idx || new Response('offline', { status: 503 });
      }
    })());
  }
});

/* ---------- Nachrichten von der Seite ---------- */
self.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type === 'pkg-updated') { pkgPromise = null; }
  if (d.type === 'get-version' && e.source) e.source.postMessage({ type: 'sw-version', version: VERSION });
});
