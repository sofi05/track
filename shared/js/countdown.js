/* =====================================================================
   countdown.js — the small "Next in 3d" text next to "New Characters".

   initializeCountdown('GenshinImpact', 'countdown-newchars')
   Reads the dates from vs.js (window.GAME_VERSIONS).
   ===================================================================== */
function initializeCountdown(gameKey, elementId) {
  const el = document.getElementById(elementId);
  const data = window.GAME_VERSIONS?.[gameKey];
  if (!el || !data) return;

  const dates = [data.date1, data.date2].map((text) => (text ? new Date(text) : null));

  function render() {
    const now = new Date();
    const target = dates.find((date) => date && now < date);

    if (target) {
      el.textContent = `Next in ${Dex.phase.shortDuration(target - now)}`;
      el.style.opacity = '0.8';
    } else {
      el.textContent = 'No date yet';
      el.style.opacity = '0.3';
    }
  }

  render();
  setInterval(render, 1000);
}
