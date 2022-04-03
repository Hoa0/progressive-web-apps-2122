const CORE_CACHE_VERSION = 'v8' // cache naam in de application
const CORE_ASSETS = [
  '/',
  '/offline',  
  '/css/rijksmuseum.css',
]
const OFFLINEFALLBACK = '/offline'

self.addEventListener('install', event => {
  console.log('Installing service worker')
  console.log(CORE_ASSETS)

/**
 * Het van een cache en voer het volgende opdracht uit
 */
  event.waitUntil(
    caches.open(`${CORE_CACHE_VERSION}`).then(function(cache) {
      return cache.addAll(CORE_ASSETS).then(() => {
        console.log(`adding assets to cache ${CORE_CACHE_VERSION}`)
        self.skipWaiting()
      });

      // return console.log(`CORE ASSETS stored in ${CORE_CACHE_VERSION}`)
    })
  );
});

//Offline pagina serveren
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch((error) => {
        return caches.match(OFFLINEFALLBACK);
      })
  );
});