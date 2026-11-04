const CACHE_NAME = 'toko-baju-v5';
const ASSETS = [
  '/',
  '/index.html',
  '/produk.html',
  '/css/style.css',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
];

// Install
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

// Hapus cache lama
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Ambil aset dari cache dulu
self.addEventListener('fetch', e => {
  if (e.request.url.includes('firebaseio.com') || e.request.url.includes('firebasestorage.googleapis.com')) return;
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
