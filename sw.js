// Service Worker - Makes app work offline
const CACHE_NAME = 'ibadah-tracker-v2';
const urlsToCache = [
    './',
    './Attendance.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// Install event - cache files
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serve from cache
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                return response || fetch(event.request);
            })
    );
});