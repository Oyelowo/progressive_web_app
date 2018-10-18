self.addEventListener("install", event => {
  console.log("[Service worker] Installing service worker ...", event);
});

self.addEventListener("activate", event => {
  console.log("[Service worker] activating service worker ...", event);
  return self.clients.claim();
});

self.addEventListener("fetch", event => {
  console.log("[Service Woring] Fetchin something", event);
  event.respondWith(fetch(event.request));
});
