/* =====================================================================
   mc.js — the "Main" page (003.html): the Traveler / Trailblazer / ...

   Characters come from window.CHARA_CONFIG (the game's own js/mc.js). One card per line.
   * Lines with DIFFERENT names (Lumine / Aether): the switch changes the page, by gender ('f' / 'm').
     The big title is the name of that page.
   * Lines that all have the SAME name (Endministrator): one page, no switch, every gender together.
   A line with several elements (element: ['Pyro', 'Hydro']) gets a badge that flips through them.
   A character you do not have (have: false) gets a small dark-red "false" in the corner of its popup.
   Needs: common.js, sprite-popup.js (loaded before this file).
   ===================================================================== */

const config = window.CHARA_CONFIG || {};
const characters = config.characters || [];

const charListEl = document.getElementById('charList');
const genderToggle = document.getElementById('genderToggleBtn');
const titleEl = document.getElementById('characterName');

const names = [...new Set(characters.map((c) => String(c.name).trim()))];
const genders = [...new Set(characters.map((c) => c.gender))];
const singlePage = names.length < 2 || genders.length < 2; // a neutral name: one page, no switch

let selectedGender = genders.includes('f') ? 'f' : genders[0];

const isShown = (c) => singlePage || c.gender === selectedGender;

// the corner note of the popup
config.popupNote = (c) => (c.have ? '' : 'false');

// ---------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------
// Address of the picture of one element (the game can give getElementIconPath, or the same getElementPath the
// Characters page uses).
function elementIconPath(c, element) {
  if (config.getElementIconPath) return config.getElementIconPath(element);
  return config.getElementPath ? config.getElementPath({ ...c, element }) : null;
}

// A small element badge. With several elements it flips through them every second.
function buildElementBadge(c, elements) {
  const badge = Dex.el('div', 'element-icon');
  const show = (el) => {
    const path = elementIconPath(c, el);
    if (path)
      Dex.resolveImage(path).then((url) => {
        if (url) badge.style.backgroundImage = `url('${url}')`;
      });
    badge.title = el;
  };
  show(elements[0]);

  if (elements.length > 1) {
    let n = 0;
    Dex.startCycle(() => show(elements[++n % elements.length]), 1000);
  }
  return badge;
}

function buildCard(c) {
  const card = Dex.el('div', 'char-card');

  const elements = (Array.isArray(c.element) ? c.element : [c.element]).filter((el) => el != null && String(el).trim() !== '');
  card.title = elements.length ? `(${elements.join(', ')}, ${c.rarity}★)` : `(${c.rarity}★)`;

  const iconWrapper = Dex.el('div', 'icon-wrapper');
  iconWrapper.style.background = Dex.rarityGradient(c.rarity);

  if (c.status === 'new') iconWrapper.appendChild(Dex.el('div', 'soon-label', 'NEW'));
  if (c.status === 'soon') iconWrapper.appendChild(Dex.el('div', 'soon-label', 'SOON'));

  // Several elements (a list) make the badge flip through them (any game).
  if (elements.length > 1 || (elements.length && config.getElementIconPath)) {
    iconWrapper.appendChild(buildElementBadge(c, elements));
  }

  iconWrapper.appendChild(Dex.buildCharaIcon(c, config, () => currentList));

  card.appendChild(iconWrapper);
  return card;
}

let currentList = [];
function renderList() {
  Dex.stopCycles();
  charListEl.innerHTML = '';

  const visible = characters.filter(isShown); // the order you wrote them in

  currentList = visible; // the popup steps through these
  visible.forEach((c) => charListEl.appendChild(buildCard(c)));
  Dex.updateCharCount(visible.length);
}

// The big title: the name of the page ("Lumine" / "Aether" ...).
function updateTitle() {
  const match = singlePage ? characters[0] : characters.find((c) => c.gender === selectedGender);
  if (match) titleEl.textContent = match.name;
}

if (genderToggle) {
  if (singlePage) genderToggle.closest('.gender-toggle').style.display = 'none';
  else genderToggle.checked = selectedGender === 'm';
  genderToggle.addEventListener('change', () => {
    selectedGender = genderToggle.checked ? 'm' : 'f';
    updateTitle();
    renderList();
  });
}

updateTitle();
renderList();
