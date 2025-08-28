// Cache for offline support
const CACHE = 'break-breathe-v2-3';
const ASSETS = ['./','./index.html','./manifest.webmanifest'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE ? caches.delete(k) : null))));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request).then((net) => {
      if (ASSETS.includes(url.pathname) || ASSETS.includes('./')) {
        const clone = net.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return net;
    }).catch(() => caches.match('./index.html')))
  );
});
