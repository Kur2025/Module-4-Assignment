// goodbye.js
(function () {
  var goodbyeSpeaker = {};
  goodbyeSpeaker.speak = function (name) {
    console.log("Goodbye " + name);
  };

  // ✅ Expose the goodbyeSpeaker object globally
  window.goodbyeSpeaker = goodbyeSpeaker;
})();