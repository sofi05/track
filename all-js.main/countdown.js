function initializeCountdown(gameKey, elementId) {
  const el = document.getElementById(elementId);
  const data = window.GAME_VERSIONS?.[gameKey];
  const date1 = data.date1 ? new Date(data.date1) : null;
  const date2 = data.date2 ? new Date(data.date2) : null;

  function updateCountdown(targetDate) {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) return null;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `Next in ${days}d`;
    if (hours > 0) return `Next in ${hours % 24}h`;
    if (minutes > 0) return `Next in ${minutes % 60}m`;
    return `Next in ${seconds % 60}s`;
  }

  function render() {
    const now = new Date();
    let label = '';

    if (date1 && now < date1) {
      label = updateCountdown(date1);
    } else if (date2 && now < date2) {
      label = updateCountdown(date2);
    }

    if (label) {
      el.textContent = label;
      el.style.opacity = '0.8';
    } else {
      el.textContent = 'No date yet';
      el.style.opacity = '0.3';
    }
  }

  render();
  setInterval(render, 1000);
}