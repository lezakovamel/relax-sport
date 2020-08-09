function getHeight() {
  var sec = document.getElementById("pool-section"),
    content = document.getElementById("pool-content");

  var bodyRect = document.body.getBoundingClientRect(),
    secRect = sec.getBoundingClientRect(),
    contentRect = content.getBoundingClientRect(),
    secOffset = secRect.top - bodyRect.top,
    conOffset = contentRect.top - bodyRect.top;
  var conTotal = content.offsetHeight + conOffset;
  var secTotal = sec.offsetHeight + secOffset;
  var plusHeight = 0;

  if (conTotal > secTotal) {
    plusHeight = conTotal - secTotal - 100;
    sec.style.minHeight = sec.offsetHeight + plusHeight + "px";
  }
}
document.addEventListener("DOMContentLoaded", getHeight);

document.addEventListener("resize", getHeight);

window.onscroll = function () {
  headerSize();
};

function headerSize() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("my-nav").classList.add("my-nav");
  } else {
    document.getElementById("my-nav").classList.remove("my-nav");
  }
}

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
});

$(".history-section").height($(".history-text").outerHeight());
$(".loc-section").height($(".loc-absolute").outerHeight());
