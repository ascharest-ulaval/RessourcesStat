/* Public GoatCounter endpoint for RessourcesStat. */
(() => {
  const endpoint = "https://ascharest.goatcounter.com/count";
  if (!endpoint || location.hostname !== "ascharest-ulaval.github.io" ||
      !location.pathname.startsWith("/RessourcesStat/")) return;

  // Count page visits only; do not send applet inputs or query parameters.
  window.goatcounter = {
    path: location.pathname,
    no_events: true
  };
  const script = document.createElement("script");
  script.dataset.goatcounter = endpoint;
  script.src = "https://gc.zgo.at/count.js";
  script.async = true;
  document.head.appendChild(script);
})();
