let deferredPrompt;
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../../sw.js").then(function() {
    console.log("service worker registered!");
  });
}

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("beforeinstallprompt fired!");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

setTimeout(() => {
  console.log("Executed once timer is done");
}, 3000);

console.log("This is executed after setTimeOut");
