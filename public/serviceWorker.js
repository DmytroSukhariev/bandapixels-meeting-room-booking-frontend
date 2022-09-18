const CACHE_NAME = 'meeting-room-booker-v1';

const urlsToCache = [
'/',
'/index.html',
];

self
  .addEventListener(
    'install',
    (event) => {
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
      );
      self.skipWaiting()
    }
  );

self
  .addEventListener(
    'fetch',
    (event) =>
      event
        .respondWith(
          caches
            .match(event.request)
            .then((response) => response ?? fetch(event.request))
        )
  );