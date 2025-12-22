const CACHE_NAME = 'prelucari-cald-v1';
const ASSETS = [
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    './images/welding_helmet.png',
    './images/welding_gloves.png',
    './images/welding_jacket.png',
    './images/safety_boots.png',
    './images/welding_respirator.png'
];

// Install Event
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(ASSETS);
            })
    );
});

// Activate Event
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// Fetch Event
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then((response) => {
                return response || fetch(e.request);
            })
    );
});
