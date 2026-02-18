document.addEventListener("DOMContentLoaded", function () {
  const player = document.querySelector("wistia-player");

  if (!player) return;

  player.addEventListener("click", function (event) {
    const target = event.target;
    if (!target) return;

    const link = target.href;
    if (!link) return;

    const title =
      (target.textContent || target.title || link).trim();

    if (window.clicky && window.clicky.log) {
      window.clicky.log(link, title, "outbound");
    }
  });
});
