/* =====================================================================
   bday.js — today's birthdays.

   Each game has a js/bday.js with its own list, e.g.
       window.BDAY_CONFIG = {
         birthdays: { '03-14': ['Name', ...] },   // 'MM-DD' -> entries
         createImageElement(entry) { ... return an element ... },
       };
   (it also adds itself to window.ALL_BDAY_CONFIGS, which the main page uses)

   This file does the rest, depending on the page:
     * game home page (has #birthday-icons)  -> shows that game's birthdays
     * main page      (has #birthday-button) -> button + popup with every game's
   ===================================================================== */
(function () {
  const Dex = (window.Dex = window.Dex || {});

  /** Today as 'MM-DD', the key used in the birthday lists. */
  Dex.todayKey = function () {
    const now = new Date();
    return `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  };

  const entriesToday = (config) => config.birthdays?.[Dex.todayKey()] || [];

  // ---------------------------------------------------------------
  // Game home page: icons of today's birthdays
  // ---------------------------------------------------------------
  function showGameBirthdays(container, config) {
    container.innerHTML = '';
    const entries = entriesToday(config);

    if (entries.length === 0) {
      container.appendChild(emptyNote());
      return;
    }
    entries.forEach((entry) => {
      const icon = config.createImageElement ? config.createImageElement(entry) : document.createTextNode(entry);
      container.appendChild(icon);
    });
  }

  function emptyNote() {
    const note = document.createElement('div');
    note.className = 'birthday-empty';
    note.textContent = 'No birthdays today!';
    return note;
  }

  // ---------------------------------------------------------------
  // Main page: button + popup with the birthdays of every game
  // ---------------------------------------------------------------
  function initBirthdayPopup(configs) {
    const popup = document.getElementById('popup-overlay');
    const openButton = document.getElementById('birthday-button');
    const closeButton = document.getElementById('popup-close');
    const list = document.getElementById('birthday-list');

    // Nobody has a birthday today: no button at all.
    if (!configs.some((config) => entriesToday(config).length)) {
      openButton.style.display = 'none';
      return;
    }

    // The game lists use paths like "../assets/..." (made for the game pages).
    // From the main page the same file is "assets/...".
    function iconFor(config, entry) {
      const icon = config.createImageElement(entry);
      const img = icon.querySelector('img');
      if (img) img.src = img.getAttribute('src').replace(/^\.\.\//, '');
      return icon;
    }

    function fillPopup() {
      list.innerHTML = '';
      const seen = new Set(); // the same person can be in two lists
      configs.forEach((config) => {
        entriesToday(config).forEach((entry) => {
          const name = typeof entry === 'string' ? entry : entry.name || entry;
          if (seen.has(name)) return;
          seen.add(name);
          list.appendChild(iconFor(config, entry));
        });
      });
    }

    const close = () => popup.classList.remove('active');
    openButton.addEventListener('click', () => {
      fillPopup();
      popup.classList.add('active');
    });
    closeButton.addEventListener('click', close);
    popup.addEventListener('click', (e) => {
      if (e.target === popup) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('birthday-icons');
    if (gameContainer && window.BDAY_CONFIG) showGameBirthdays(gameContainer, window.BDAY_CONFIG);

    if (document.getElementById('birthday-button')) {
      const configs = window.ALL_BDAY_CONFIGS || [];
      if (configs.length) initBirthdayPopup(configs);
      else console.warn('bday.js: no birthday lists found (is each game\'s js/bday.js loaded?)');
    }
  });
})();
