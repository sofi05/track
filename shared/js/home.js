/* =====================================================================
   home.js — builds a game's home page (000.html):
   "New Characters", "Reruns" and "Permanent" rows of character cards.

   Everything it needs comes from the game's window.CHARA_CONFIG (js/chara.js):
       gameId            key of the game in vs.js, e.g. 'GenshinImpact'
       characters        the list
       getIconPath(c)    small portrait
       getElementPath(c) element badge
       getFallbackPath() / getSpritePath(c)   used for missing icons / the popup

   Needs: common.js, phase.js, char-popup.js, countdown.js, and vs.js (main folder)
   ===================================================================== */
(function () {
  const Dex = (window.Dex = window.Dex || {});

  const EMPTY_NEW_TEXT = 'Σ(⊙_⊙;) You got them all already???';
  const EMPTY_RERUN_TEXT = 'ヽ(°〇°)ﾉ Woah... Dedication!';

  const byVersionThenPhase = (a, b) => (a.ph || 0) - (b.ph || 0);

  // ---------------------------------------------------------------
  // Which characters go in which row
  // ---------------------------------------------------------------
  Dex.groupCharacters = function (characters) {
    // NEW: not owned yet and (new or soon)
    const fresh = characters
      .filter((c) => c.have === false && (c.status === 'new' || c.status === 'soon'))
      .sort((a, b) => (a.version !== b.version ? a.version - b.version : byVersionThenPhase(a, b)));

    // PERMANENT: always available
    const permanent = characters
      .filter((c) => c.perma === true)
      .sort((a, b) => numericVersion(b) - numericVersion(a));
    const permanentIds = new Set(permanent.map((c) => c.id || c.name));

    // RERUNS: not owned, currently available, and not permanent
    const reruns = characters
      .filter((c) => c.have === false && c.status === 'available' && !permanentIds.has(c.id || c.name))
      .sort((a, b) => (b.version !== a.version ? b.version - a.version : byVersionThenPhase(a, b)));

    return { fresh, reruns, permanent };
  };

  // Versions that are missing / not a number sort last.
  function numericVersion(char) {
    const n = Number(char.version);
    return isNaN(n) ? -Infinity : n;
  }

  // ---------------------------------------------------------------
  // One card
  // ---------------------------------------------------------------
  function buildCard(char, config) {
    const card = Dex.el('div', 'version-box');

    const iconWrapper = Dex.el('div', 'icon-wrapper');
    iconWrapper.style.background = Dex.rarityGradient(char.rarity);

    const icon = Dex.el('img', 'char-icon');
    icon.src = config.getIconPath(char);
    icon.alt = char.name;
    Dex.applyIconFit(icon, char);
    icon.onerror = () => {
      icon.onerror = null;
      icon.src = config.getFallbackPath(char);
    };

    iconWrapper.append(icon);
    const badge = Dex.elementBadge(char, (e) => config.getElementPath({ ...char, element: e }));
    if (badge) iconWrapper.append(badge);

    const info = Dex.el('div', 'char-info');
    const marker = char.want === 1 ? ' ★' : char.want === 2 ? ' ☆' : '';
    info.append(Dex.el('h3', '', char.name + marker), Dex.el('div', '', `Version: ${char.version || 'N/A'}`));

    card.append(iconWrapper, info);
    card.addEventListener('click', () => Dex.openCharPopup(char));

    // Coloured outline for characters of the version that is live now.
    if (Dex.phase.isCurrentVersion(char.version)) {
      card.classList.add(`phase-${Dex.phase.statusOf(char) || 'active'}`);
    }
    // Characters that are not out yet are greyed out.
    if (char.out === false) card.classList.add('is-out');

    return card;
  }

  // ---------------------------------------------------------------
  // Page
  // ---------------------------------------------------------------
  function fillRow(row, characters, config, emptyText) {
    if (!row) return;
    if (characters.length === 0 && emptyText) {
      row.appendChild(Dex.el('div', 'empty-note', emptyText));
      return;
    }
    const liveVersion = Dex.phase.liveVersion();
    characters.forEach((char) => {
      const card = buildCard(char, config);
      if (char.version && liveVersion && char.version === liveVersion) card.classList.add('version-match');
      row.appendChild(card);
    });
  }

  function addTotalBadge(total) {
    const badge = Dex.el('div', 'total-badge', `Total: ${total} Characters`);
    document.body.appendChild(badge);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const config = window.CHARA_CONFIG;
    if (!config) return console.error("home.js: window.CHARA_CONFIG is missing (is the game's js/chara.js loaded?)");
    const characters = (config.characters || []).filter((c) => !Dex.isUnconfirmed(c)); // not out and no version: not shown here

    if (typeof initializeCountdown === 'function') initializeCountdown(config.gameId, 'countdown-newchars');

    const { fresh, reruns, permanent } = Dex.groupCharacters(characters);
    const countable = (list) => list.filter((c) => c.out !== false).length; // greyed-out (out:false) are not counted here
    addTotalBadge(countable(fresh) + countable(reruns) + countable(permanent));

    fillRow(document.getElementById('new-characters-slider'), fresh, config, EMPTY_NEW_TEXT);
    fillRow(document.getElementById('reruns-slider'), reruns, config, EMPTY_RERUN_TEXT);
    fillRow(document.getElementById('perma-slider'), permanent, config);

    if (permanent.length === 0) {
      const section = document.getElementById('perma');
      if (section) section.style.display = 'none';
    }
  });
})();
