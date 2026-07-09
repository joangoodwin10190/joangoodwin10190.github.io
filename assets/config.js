/* ozem-shop.de — first-touch click-id capture. The outbound affiliate URL is never in the
   page DOM: CTAs point at the first-party /go/ path, which builds + fires the real link.
   Tracking rule: sub1 = gclid (paid) else "ozshopde" (organic). */
(function () {
  "use strict";
  var KEYS = ["gclid", "fbclid", "ttclid", "msclkid", "utm_source", "utm_medium", "utm_campaign"];
  try {
    var q = new URLSearchParams(location.search);
    var s = JSON.parse(localStorage.getItem("oz_track") || "{}");
    KEYS.forEach(function (k) { var v = q.get(k); if (v && !s[k]) s[k] = v; });
    if (!s._ts) s._ts = Date.now();
    if (!s._lp) s._lp = location.pathname;
    localStorage.setItem("oz_track", JSON.stringify(s));
  } catch (e) {}

  // sticky mobile CTA reveal after slight scroll
  function onScroll() {
    var bar = document.getElementById("sticky-cta");
    if (!bar) return;
    if (window.scrollY > 600) bar.classList.add("show"); else bar.classList.remove("show");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
