// hello.js
(function () {
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };

  // ✅ Expose the helloSpeaker object globally
  window.helloSpeaker = helloSpeaker;
})();


