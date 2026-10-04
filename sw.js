// This copy of Behaviour Data is retired. A device that installed it picks up this
// file on its next visit online: it deletes the old app's saved files, removes itself,
// and reloads the page, which now points to the new address.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) await caches.delete(key);
      await self.registration.unregister();
      for (const client of await self.clients.matchAll({ type: 'window' })) client.navigate(client.url);
    })(),
  );
});
