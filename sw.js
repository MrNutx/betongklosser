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
  '/images/2D_example_1.PNG',
  '/images/2D_example_2.PNG',
  '/images/2D_example_3.PNG',
  '/images/2D_example_4.PNG',
  '/images/2D_example_5.PNG',
  '/images/2D_example_6.PNG',
  '/images/2D_example_7.PNG',
  '/images/2D_example_8.PNG',
  '/images/2D_example_9.PNG',
  '/images/2D_example_10.PNG',
  '/images/Gallery_1.jpg',
  '/images/Gallery_2.jpg',
  '/images/Gallery_3.jpg',
  '/images/Gallery_4.jpg',
  '/images/Gallery_5.jpg',
  '/images/Gallery_6.jpg',
  '/images/Gallery_7.jpg',
  '/images/Gallery_8.jpg',
  '/images/Gallery_9.jpg',
  '/images/Gallery_10.jpg',
  '/images/Gallery_11.jpg',
  '/images/Gallery_12.jpg',
  '/images/Gallery_13.jpg',
  '/images/Gallery_14.jpg',
  '/images/Gallery_15.jpg',
  '/images/Gallery_16.jpg',
  '/images/KFB.jpg',
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
