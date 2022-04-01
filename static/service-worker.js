const CORE_CACHE_VERSION = 'v3'
const CORE_ASSETS = [
  '/offline',
  '/rijksmuseum.css',
]

self.addEventListener('install', event => {
  console.log('Installing service worker')

  event.waitUntil(
    caches.open(CORE_CACHE_VERSION).then(function(cache) {
      return cache.addAll(CORE_ASSETS).then(() => self.skipWaiting());
    })
  );
});
