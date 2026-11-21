// Remove o app antigo (Regional 7) instalado e libera o redirecionamento
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll())
      .then(clients => clients.forEach(c => c.navigate('https://carbankapp1-dev.github.io/regional-2/')))
  );
});
