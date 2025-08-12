// Cache version v6
const CACHE = 'skirting-log-v6';
const ASSETS = [
  './',
  './index.html',
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
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        try {
          const url = new URL(req.url);
          if (req.method === 'GET' && url.origin === self.location.origin) {
            caches.open(CACHE).then(cache => cache.put(req, res.clone()));
          }
        } catch(e){}
        return res;
      }).catch(() => {
        if (req.mode === 'navigate') return caches.match('./index.html');
      })
    })
  );
});
