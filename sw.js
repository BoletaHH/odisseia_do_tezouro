/* Service worker mínimo.
   A app é só online, por isso este ficheiro NÃO guarda nada em cache.
   Existe apenas para o Android reconhecer a app como instalável e para a
   atualização mensal chegar sempre atualizada, sem versões antigas presas. */

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(nomes => Promise.all(nomes.map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
