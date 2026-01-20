self.addEventListener('fetch', (event) => {
  // Esto permite que la app funcione como PWA
  event.respondWith(fetch(event.request));
});
