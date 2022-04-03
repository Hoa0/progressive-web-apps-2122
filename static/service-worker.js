const CORE_CACHE_VERSION = 'v4' // cache naam in de application
const CORE_ASSETS = [
  '/offline',
  '/rijksmuseum.css',
]


self.addEventListener('install', event => {
  console.log('Installing service worker')

/**
 * Het van een cache en voer het volgende opdracht uit
 */
  event.waitUntil(
    caches.open(CORE_CACHE_VERSION).then(function(cache) {
      return cache.addAll(CORE_ASSETS).then(() => self.skipWaiting());
    })
  );
});
