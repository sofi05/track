document.addEventListener('DOMContentLoaded', () => {
  // Popup HTML (inserted directly)
  const popupHTML = `
<div id="game-switcher" class="game-switcher hidden">
  <div class="switcher-content">
    <h3>Select Game</h3>
    <div class="game-icons">
      <div class="game-icon" data-url="../GenshinImpact/index.html">
        <img src="../assets/gameico/gi.webp"/>
      </div>
      <div class="game-icon" data-url="../StarRail/index.html">
        <img src="../assets/gameico/hsr.webp"/>
      </div>
      <div class="game-icon" data-url="../NexusAnima/index.html">
        <img src="../assets/gameico/hna.webp" />
      </div>
      <div class="game-icon" data-url="../ZenlessZone/index.html">
        <img src="../assets/gameico/zzz.png" />
      </div>
      <div class="game-icon" data-url="../HonkaiImpact/index.html">
        <img src="../assets/gameico/hi3.webp" />
      </div>
    </div>
  </div>
</div>

  `;
  
  // Insert popup HTML into the container
  document.getElementById('popup-container').innerHTML = popupHTML;

  // Now set up the event listeners
  const switcherPopup = document.getElementById('game-switcher');
  const switchButton = document.getElementById('tab-play');

  // Open popup
  switchButton.addEventListener('click', (e) => {
    e.preventDefault();
    switcherPopup.classList.remove('hidden');
  });

  // Close popup on background click
  switcherPopup.addEventListener('click', (e) => {
    if (e.target === switcherPopup) {
      switcherPopup.classList.add('hidden');
    }
  });

  // Handle icon click (navigate to game)
  document.querySelectorAll('.game-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const url = icon.dataset.url;
      if (url) window.location.href = url;
    });
  });
});
