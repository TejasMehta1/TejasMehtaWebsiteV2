const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["sources/*.png"], "imagesWebp", {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(function() {
  console.log("Images converted!");
});
