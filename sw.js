/*
 * Network-first service worker.
 * Online: always fetch the latest file from the server, revalidating any cached copy.
 * Offline: fall back to the last copy that was fetched successfully.
 */
const CACHE = "adhkar-v1";

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const { request } = event;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(request.url, { cache: "no-cache", credentials: "same-origin" });
      /* Safari rejects redirected responses for page loads, so hand the redirect back to the browser. */
      if (request.mode === "navigate" && response.redirected) {
        return Response.redirect(response.url, 302);
      }
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      const cached = await cache.match(request, { ignoreSearch: request.mode === "navigate" });
      if (cached) {
        return cached;
      }
      throw error;
    }
  })());
});
