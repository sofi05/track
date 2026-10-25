/* =====================================================================
   char-popup.js — the info card that opens when you click a character on
   a game's home page (sprite, version, phase, rarity + live countdowns).

   Usage:  Dex.openCharPopup(char)
   Looks: see ".char-popup*" in shared/css/index.css
   ===================================================================== */
(function () {
  const Dex = (window.Dex = window.Dex || {});
  const Phase = Dex.phase;

  let closeCurrent = null; // closes the popup that is open right now, if any

  Dex.openCharPopup = function (char) {
    if (closeCurrent) closeCurrent();

    const spriteSrc = window.CHARA_CONFIG.getSpritePath(char);
    const isCurrent = Phase.isCurrentVersion(char.version);
    const timers = [];

    // ---------------- build the DOM ----------------
    const backdrop = Dex.el('div');
    backdrop.id = 'popup-backdrop';

    const popup = Dex.el('div', 'responsive-popup');
    popup.id = 'char-popup';

    const imageBox = Dex.el('div', 'char-popup__image');
    const sprite = Dex.el('img', 'char-popup__sprite');
    sprite.src = spriteSrc;
    sprite.alt = char.name;
    sprite.onerror = () => {
      sprite.style.display = 'none';
      const fallback = Dex.el('img', 'char-popup__fallback');
      fallback.src = Dex.FALLBACK_SPRITE;
      fallback.alt = 'Loading…';
      imageBox.classList.add('is-fallback');
      imageBox.appendChild(fallback);
    };

    const closeButton = Dex.el('button', 'close-btn', '✕');
    imageBox.append(sprite, closeButton);

    const nameEl = Dex.el('h2', 'char-popup__name', char.name);

    const versionLine = Dex.el('div', 'char-popup__version-line');
    const countdownEl = Dex.el('span', 'inline-countdown', '');
    versionLine.append(Dex.el('span', '', `Version: ${char.version || 'N/A'}`), countdownEl);

    const phaseEl = Dex.el('div', 'char-popup__phase');
    const phaseStatus = Dex.el('span', 'char-popup__phase-status');
    if (char.ph) phaseEl.append(Dex.el('span', '', `Phase ${char.ph}`), phaseStatus);
    else if (window.CHARA_CONFIG && window.CHARA_CONFIG.showPart) phaseEl.append(Dex.el('span', '', `Part ${char.p || 1}`)); // Honkai Impact: story part

    const rarityEl = Dex.el('p', 'char-popup__rarity', `Rarity: ${char.rarity || 'N/A'} ★`);

    popup.append(imageBox, nameEl, versionLine, phaseEl, rarityEl);

    // ---------------- live texts ----------------
    // "(in 3d)" next to the version of an upcoming character.
    const releaseDate = Phase.releaseDate(char.version, char.ph || 1);
    function updateVersionCountdown() {
      if (!releaseDate || isCurrent) {
        countdownEl.textContent = '';
        return;
      }
      const diff = releaseDate - new Date();
      countdownEl.textContent = diff <= 0 ? ' (Released)' : ` (in ${Phase.shortDuration(diff)})`;
    }
    if (releaseDate) {
      updateVersionCountdown();
      timers.push(setInterval(updateVersionCountdown, 1000));
    }

    // "(active)" / "(ended)" / "(3h)" next to the phase of a current-version character.
    const { start: phaseStart, end: phaseEnd } = Phase.findWindow(char.version, char.ph || 1);
    function updatePhaseStatus() {
      if (!char.ph || !phaseStart) return;
      if (!isCurrent) {
        phaseStatus.textContent = '';
        return;
      }
      const now = new Date();
      if (!phaseEnd || now < phaseStart) {
        phaseStatus.textContent = `(${Phase.shortDuration(phaseStart - now, { approx: true })})`;
      } else {
        phaseStatus.textContent = now >= phaseEnd ? '(ended)' : '(active)';
      }
    }
    updatePhaseStatus();
    timers.push(setInterval(updatePhaseStatus, 1000));

    // ---------------- open / close ----------------
    function onKeyDown(e) {
      if (e.key === 'Escape') close();
    }
    function close() {
      popup.remove();
      backdrop.remove();
      timers.forEach(clearInterval);
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      closeCurrent = null;
    }
    closeCurrent = close;

    closeButton.addEventListener('click', close);
    backdrop.addEventListener('click', close);
    window.addEventListener('keydown', onKeyDown);

    document.body.append(backdrop, popup);
    document.body.style.overflow = 'hidden';
  };
})();
