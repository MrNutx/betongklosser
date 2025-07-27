const CACHE_NAME = 'v1';
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/images/favicon_io_kloss/favicon.png',
  '/images/Betongblokker SW/160x80x80.png',
  '/images/Betongblokker SW/160x80x80 Topp.png',
  '/images/Betongblokker SW/120x80x80.png',
  '/images/Betongblokker SW/120x80x80 Topp.png',
  '/images/Betongblokker SW/80x80x80.png',
  '/images/Betongblokker SW/80x80x80 Topp.png',
  '/images/Betongblokker SW/160x40x40.png',
  '/images/Betongblokker SW/160x40x40 Topp.png',
  '/images/Betongblokker SW/120x40x40.png',
  '/images/Betongblokker SW/120x40x40 Topp.png',
  '/images/Betongblokker SW/80x40x40.png',
  '/images/Betongblokker SW/80x40x40 Topp.png',
  '/images/Betongblokker SW/160x40x80.png',
  '/images/Betongblokker SW/160x40x80 Topp.png',
  '/images/Betongblokker SW/120x40x80.png',
  '/images/Betongblokker SW/120x40x80 Topp.png',
  '/images/Betongblokker SW/80x40x80.png',
  '/images/Betongblokker SW/80x40x80 Topp.png',
  '/images/Betongblokker SW/160x80x40.png',
  '/images/Betongblokker SW/160x80x40 Topp.png',
  '/images/Betongblokker SW/120x80x40.png',
  '/images/Betongblokker SW/120x80x40 Topp.png',
  '/images/Betongblokker SW/80x80x40.png',
  '/images/Betongblokker SW/80x80x40 Topp.png',
  '/images/Betongblokker SW/40x40x40.png',
  '/images/Betongblokker SW/40x40x40 Topp.png',
  '/images/Betongblokker SW/160x80x40 Topp Skrå.png',
  '/images/Betongblokker SW/160x80x80 Skrå.png',
  '/images/Betongblokker SW/160x80x80 Radius.png',
  '/images/Betongblokker SW/160x80x80 Topp Radius.png',
  '/images/Betongblokker SW/160x80x40 Topp Radius.png',
  '/images/Betongblokker SW/160x80x80 Spesial 1.png',
  '/images/Betongblokker SW/160x40x40 Spesial 2.png',
  // legg til flere filer du ønsker å cache
];

// Installer service worker og cache filer
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Caching files');
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

// Hent ressurser fra cache eller nett
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
