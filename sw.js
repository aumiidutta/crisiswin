/**
 * sw.js — CrisisWin (PWA)
 *
 * Strategy: Cache-First for assets, Network-First for data.
 * This lets the app work offline once assets are cached.
 */

const CACHE_NAME = 'crisiswin-v1';


// Files to cache on install (app shell)
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/data.js',
  '/manifest.json',
  '/assets/logo.png',
  '/assets/africa.jpeg',
  '/assets/asia.jpeg',
  '/assets/europe.jpeg',
  '/assets/north-america.jpeg',
  '/assets/south-america.jpeg',
  '/assets/australia.jpeg',
  '/assets/antarctica.jpeg'
];


// ── Install: pre-cache the app shell ─────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching app shell');
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});


// ── Activate: clean up old caches ────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    )
  );
  self.clients.claim();
});


// ── Fetch: Cache-first strategy ──────────────────────────────
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests (GitHub API, flagcdn, etc.)
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Not in cache — fetch from network and cache the response
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
