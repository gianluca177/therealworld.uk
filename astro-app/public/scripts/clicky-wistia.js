window._wq = window._wq || [];

_wq.push({
  id: "qkkqo44eoi",
  onReady: function (video) {

    video.bind("link", function (link) {
      if (!link || !link.url) return;

      const url = link.url;
      const title = link.text || url;

      if (window.clicky && window.clicky.log) {
        window.clicky.log(url, title, "outbound");
      }
    });

  }
});

