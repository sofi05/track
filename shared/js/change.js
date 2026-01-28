document.addEventListener('DOMContentLoaded', () => {
  const popupHTML = `
<div id="game-switcher" class="game-switcher hidden">
  <div class="switcher-content">
    <h3>Select Game</h3>
    <div class="game-icons">
      <div class="game-icon" data-url="../00GI/000.html">
        <img src="../assets/gameico/gi.webp"/>
      </div>
      <div class="game-icon" data-url="../01HSR/000.html">
        <img src="../assets/gameico/hsr.webp"/>
      </div>
      <div class="game-icon" data-url="../02ZZZ/000.html">
        <img src="../assets/gameico/zzz.png" />
      </div>
      <div class="game-icon" data-url="../03HI3/000.html">
        <img src="../assets/gameico/hi3.webp" />
      </div>
      <div class="game-icon" data-url="../Endfield/000.html">
        <img src="../assets/gameico/ae.webp" />
      </div>
      <div class="game-icon" data-url="../03HNA/000.html" style="filter: grayscale(100%); opacity: 0.7;" onmouseover="this.style.filter='none'; this.style.opacity='1';" onmouseout="this.style.filter='grayscale(100%)'; this.style.opacity='0.7';">
        <img src="../assets/gameico/hna.webp" />
      </div>
    </div>
  </div>
</div>

  `; //<div class="game-icon" data-url="..//000.html" style="filter: grayscale(100%); opacity: 0.7;" onmouseover="this.style.filter='none'; this.style.opacity='1';" onmouseout="this.style.filter='grayscale(100%)'; this.style.opacity='0.7';"><img src="../assets/gameico/ae.webp" /></div>

  document.getElementById('popup-container').innerHTML = popupHTML;

  const switcherPopup = document.getElementById('game-switcher');
  const switchButton = document.getElementById('tab-play');

  switchButton.addEventListener('click', (e) => {
    e.preventDefault();
    switcherPopup.classList.remove('hidden');
  });

  switcherPopup.addEventListener('click', (e) => {
    if (e.target === switcherPopup) {
      switcherPopup.classList.add('hidden');
    }
  });

  document.querySelectorAll('.game-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const url = icon.dataset.url;
      if (url) window.location.href = url;
    });
  });
});