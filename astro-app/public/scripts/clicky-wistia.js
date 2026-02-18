function attachWistiaTracking() {
  const player = document.querySelector("wistia-player");
  if (!player) return;

  player.addEventListener("click", function (event) {
    const path = event.composedPath ? event.composedPath() : [];
    const linkEl = path.find(el => el?.href);

    if (!linkEl) return;

    const link = linkEl.href;
    const title =
      (linkEl.textContent || linkEl.title || link).trim();

    if (window.clicky && window.clicky.log) {
      window.clicky.log(link, title, "outbound");
    }
  });
}

// Wait for Wistia to fully load
window.addEventListener("load", function () {
  attachWistiaTracking();
});
