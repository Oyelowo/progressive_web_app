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

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Executed once timer is done");
    reject({ code: 500, error: "something went wrong" });
  }, 3000);
});

promise
  .then(
    response => {
      return response + "lowo";
    },
    err => {
      console.log(err.error, err.code)
    }
  )
  .then(anotherResponse => {
    console.log(anotherResponse);
  });

console.log("This is executed after setTimeOut");
