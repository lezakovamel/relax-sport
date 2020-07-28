/*var window_width = $(window).width() - $(".wave-img").width();

var document_height = $(document).height() - $(window).height();

window.addEventListener("scroll", function () {
  var element = document.querySelector(".wave-img");
  var element = document.getElementById("wave-1-up");
  var position = element.getBoundingClientRect();
  var offset = $(".inner").offset();
  var waveOffset = $(".wave-content").offset();
  console.log(`wave left: ${waveOffset.left}`);
  console.log(`offset left: ${offset.left}`);
  console.log(`position top ${position.top}`);

  // checking whether fully visible
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    console.log("Element is fully visible in screen");
  }

  // checking for partial visibility
  if (position.top < window.innerHeight && position.bottom >= 0) {
    var st = $(this).scrollTop();
    console.log(`st: ${st}`);
    console.log("Element is partially visible in screen");

    $("#wave-1-up").css("left", waveOffset.left - st / 10);

    $("#wave-2-up").css("left", waveOffset.left - st / 10);

    $("#wave-1-down").css("left", waveOffset.left - st / 10);
    $("#wave-2-down").css("left", waveOffset.left - st / 10);
  }
});*/

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
    plusHeight = conTotal - secTotal;
    sec.style.minHeight = sec.offsetHeight + plusHeight + "px";
  }
}
document.addEventListener("DOMContentLoaded", getHeight);
document.addEventListener("resize", getHeight);
