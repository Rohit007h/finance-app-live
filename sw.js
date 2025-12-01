self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fintrack-store').then((cache) => cache.addAll([
      'index.html',
      'qr.png'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
