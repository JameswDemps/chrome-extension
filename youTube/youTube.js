// var menuItems = document.getElementsByClassName("ytp-menuitem-content");
// var menuOptions = document.getElementsByClassName("ytp-menuitem-label");

const observer = new MutationObserver((mutations) => {
  // Step 2: Define the callback
  mutations.forEach((mutation) => {
    switch (mutation.type) {
      case "attributes":
        try {
          // Handle attribute changes
          const changedNode = mutation.target;
          const changedAttribute = mutation.attributeName;
          const newValue = changedNode.getAttribute(changedAttribute);
          if (
            mutation.target.children[2].children[1].innerHTML ==
            "Playback speed"
          ) {
            var images = document.getElementsByTagName("video");
            images[0].playbackRate;
            mutation.target.children[2].children[1].parentElement.children[2].innerHTML = `${images[0].playbackRate} because we fast`;
          }
        } catch {}
    }
  });
});

const observerVideo = new MutationObserver((mutations) => {
  // Step 2: Define the callback
  mutations.forEach((mutation) => {
    switch (mutation.type) {
      case "attributes":
        try {
          var images = document.getElementsByTagName("video");
          images[0].playbackRate = 1.1;
        } catch {}
    }
  });
});

// Step 4: Configure and attach the observer
const config = { childList: true, attributes: true, subtree: true }; // Observe direct children and descendants

observer.observe(document.querySelector("#ytp-id-18 > div > div"), config); // Attach observer to the body element

console.log(config);

observerVideo.observe(
  document.querySelector("#movie_player > div.html5-video-container"),
  config
); // Attach observer to the body element
