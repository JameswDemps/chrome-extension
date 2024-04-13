console.log("Dem-C extension loaded");

var images = document.getElementsByTagName("video");

console.log(images);
console.log(images[0]);

images[0].playbackRate = 1.1;

// Step 1: Create a MutationObserver
const observer = new MutationObserver((mutations) => {
  // Step 2: Define the callback
  mutations.forEach((mutation) => {
    switch (mutation.type) {
      case "attributes":
        // Handle attribute changes
        const changedNode = mutation.target;
        console.log("mutation");
        console.log(changedNode);
    }
  });
});
