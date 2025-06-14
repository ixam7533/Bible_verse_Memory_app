const CACHE = 'bible-app-v2';
const ASSETS = [
  '/', '/index.html', '/manifest.json',
  '/screenshot.png',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)))
);
self.addEventListener('fetch', e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
);
