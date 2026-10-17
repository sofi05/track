/* =====================================================================
   past.js — the "Past Games" popup of a game's menu page.

   Any game can use it: give the menu page a button  <a id="tab-past">  and a
   <div id="popup-cont"></div>, define window.PAST_GAMES in the game's js/past.js
   (see 03HI3/js/past.js) and load this file after it.
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const games = window.PAST_GAMES || [];
  const popupContainer = document.getElementById('popup-cont');
  const switchButton = document.getElementById('tab-past');
  if (!games.length || !popupContainer || !switchButton) return;

  const icons = games
    .map((g, i) => `<div class="game-hnk" data-index="${i}"><img src="${g.icon}" alt="${g.title}" /></div>`)
    .join('');
  popupContainer.innerHTML = `
    <div id="game-past" class="game-past hidden"><div class="popup-inner">
      <h3 style="text-align:center;">Past Games</h3>
      <div class="game-hnk-list">${icons}</div>
      <div id="slider-content" class="slider-content hidden"><div id="slider-message"></div></div>
    </div></div>`;

  const popup = document.getElementById('game-past');
  const sliderContent = document.getElementById('slider-content');
  const sliderMessage = document.getElementById('slider-message');
  let activeIcon = null;

  const resetIcons = () => {
    popup.querySelectorAll('.game-hnk img').forEach((img) => img.classList.remove('active', 'gray'));
    activeIcon = null;
  };

  switchButton.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('hidden');
  });

  // Clicking the background closes the popup.
  popup.addEventListener('click', (e) => {
    if (e.target !== popup) return;
    popup.classList.add('hidden');
    sliderContent.classList.add('hidden');
    resetIcons();
  });

  // Clicking a picture shows its text and greys out the others; clicking it again hides the text.
  popup.querySelectorAll('.game-hnk').forEach((icon) => {
    icon.addEventListener('click', () => {
      const game = games[icon.dataset.index];
      const img = icon.querySelector('img');

      if (activeIcon === img) {
        sliderContent.classList.add('hidden');
        resetIcons();
        return;
      }

      const title = game.link ? `<h4><a href="${game.link}">${game.title}</a></h4>` : `<h4>${game.title}</h4>`;
      sliderMessage.innerHTML = `${title}<p>${game.text || 'No content available'}</p>`;
      sliderContent.classList.remove('hidden');

      resetIcons();
      img.classList.add('active');
      activeIcon = img;
      popup.querySelectorAll('.game-hnk img').forEach((other) => {
        if (other !== img) other.classList.add('gray');
      });
    });
  });
});
