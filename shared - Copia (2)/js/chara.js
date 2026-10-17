/* =====================================================================
   chara.js — the "Characters" page (001.html) of every game.

   Characters come from window.CHARA_CONFIG (the game's own js/chara.js).
   The filter buttons come from window.CHARA_PAGE (js/chara-page.js).
   Needs: common.js, sprite-popup.js, chara-filters.js (loaded before this file).
   ===================================================================== */

const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');

const characters = window.CHARA_CONFIG?.characters || [];

const filters = Dex.initCharaFilters({ page: window.CHARA_PAGE, onChange: () => renderList() });

function passesFilters(c, searchTerm) {
  return c.name.toLowerCase().includes(searchTerm) && filters.matches(c);
}

// ---------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------
function buildCard(c) {
  const card = Dex.el('div', 'char-card');
  card.title = `${c.name} (${c.element}, ${c.rarity}★)`;

  const iconWrapper = Dex.el('div', 'icon-wrapper');
  iconWrapper.style.background = Dex.rarityGradient(c.rarity);

  if (c.out === false) card.classList.add('char-disabled');

  if ((c.status === 'new' || c.status === 'soon') && c.out !== false) {
    iconWrapper.appendChild(Dex.el('div', 'soon-label', c.status.toUpperCase()));
  }

  iconWrapper.appendChild(Dex.buildCharaIcon(c, window.CHARA_CONFIG, () => stepList, true));

  card.append(iconWrapper, Dex.el('div', '', c.name));
  return card;
}

// The picture popup steps through these (arrows / swipe / tap): the characters on screen that are out.
let stepList = [];

function renderList() {
  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  const visible = characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((c) => passesFilters(c, searchTerm));

  stepList = visible.filter((c) => c.out !== false);
  if (visible.length === 0) Dex.showNoResults(charListEl);
  else visible.forEach((c) => charListEl.appendChild(buildCard(c)));

  Dex.updateCharCount();
}

// ---------------------------------------------------------------
// Wiring
// ---------------------------------------------------------------
Dex.initFilterPanel();
searchInput.addEventListener('input', renderList);

renderList();
