importScripts('https://cdn.letreach.com/js/sworkers/a99d6ff3dec6106a641e37d249ac4762.js');
// Offline SW
const filesToCache = [
  'https://lax18.github.io/WebJROTC/css/font.css',
  'https://lax18.github.io/WebJROTC/css/material.indigo-red.min.css',
  'https://lax18.github.io/WebJROTC/js/firebase.js',
  'https://lax18.github.io/WebJROTC/js/material.min.js'
];

const staticCacheName = 'NokomisJROTC';


self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

      // TODO 4 - Add fetched files to the cache

    }).catch(error => {

      // TODO 6 - Respond with custom offline page

    })
  );
});
