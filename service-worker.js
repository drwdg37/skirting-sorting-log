// Cache version v7
const CACHE = 'skirting-log-v7';
const ASSETS = [
  './',
  './index.html?v=7',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE && caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.mode === 'navigate') {
    event.respondWith(caches.match('./index.html?v=7').then(resp => resp || fetch('./index.html?v=7')));
    return;
  }
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        try {
          if (req.method === 'GET' && url.origin === self.location.origin) {
            caches.open(CACHE).then(cache => cache.put(req, res.clone()));
          }
        } catch(e){}
        return res;
      }).catch(() => caches.match('./index.html?v=7'))
    })
  );
});
