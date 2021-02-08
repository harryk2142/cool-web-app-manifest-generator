var cacheName = 'cool-web-app-manifest-generator';
var filesToCache = [
  '/',
  '/index.html',
  '/js/modules.js',
  '/js/main.js',
  '/app.js',
  '/css/colors.css',
  '/css/app.css'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});


/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
