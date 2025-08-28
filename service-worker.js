// v2.8.0 Service Worker
const VERSION = 'v2.8.0';
const CACHE = 'bb-cache-' + VERSION;
const ASSETS = ['./','./index.html','./manifest.webmanifest'];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE) ? caches.delete(k) : Promise.resolve()));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== location.origin) return;
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request).then((net) => {
      const clone = net.clone();
      caches.open(CACHE).then(c => c.put(event.request, clone));
      return net;
    }).catch(() => caches.match('./index.html')))
  );
});
