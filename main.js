var video = document.getElementById("video");
if (video) {
  var start = v.getAttribute("data-bs-start");
  var end = v.getAttribute("data-bs-end");
  var videoSrc = v.getAttribute("data-bs-video");
  var playThis =
    "https://www.youtube.com/watch?v=aMso3mOTMXQ" +
    videoSrc +
    "?autoplay=1&start=" +
    start +
    "&end=" +
    end +
    "&controls=0&playlist=0&loop=1&rel=0";
  video.src = playThis;
  var length = (end - start) * 1000;
  setTimeout(function () {
    video.src = "";
  }, length);
}
