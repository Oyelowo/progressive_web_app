self.addEventListener("install", event => {
  console.log("[Service worker] Installing service worker ...", event);
});

self.addEventListener("activate", event => {
  console.log("[Service worker] activating service worker ...", event);
  return self.clients.claim();
});
