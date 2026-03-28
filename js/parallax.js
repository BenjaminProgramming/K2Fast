// Lightweight parallax: scroll-based transform on hero image (no library, GPU-friendly)
(function () {
  var heroImg = null;
  var ticking = false;
  var lastScrollY = 0;

  function getScrollY() {
    return window.scrollY || window.pageYOffset;
  }

  function updateParallax() {
    if (!heroImg) return;
    var scrolled = getScrollY();
    var rate = 0.35; // move image slower than scroll
    var y = scrolled * rate * 0.5;
    heroImg.style.transform = "translate3d(0," + y + "px,0)";
    ticking = false;
  }

  function onScroll() {
    lastScrollY = getScrollY();
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateParallax);
    }
  }

  function init() {
    heroImg = document.querySelector(".hero-bg.parallax");
    if (!heroImg) return;
    heroImg.style.willChange = "transform";
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    }, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
