/* =====================================================================
   mc.js — the "Main" page (003.html): the Traveler / Trailblazer / ...

   Characters come from window.CHARA_CONFIG (the game's own js/mc.js).
   Two layouts:
     * normal          -> one list, filtered by the gender toggle
     * pageType 'typeB' -> the toggle switches between "GP 1" and "GP 2"
                           and the entries of one character are merged
                           (their elements are collected on one card)
   Needs: common.js, sprite-popup.js (loaded before this file).
   ===================================================================== */

const config = window.CHARA_CONFIG || {};
const characters = config.characters || [];
const isTypeB = config.pageType === 'typeB';

const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');
const genderToggle = document.getElementById('genderToggleBtn');
const titleEl = document.getElementById('characterName');

// ---------------------------------------------------------------
// State
// ---------------------------------------------------------------
let selectedGender = 'f'; // normal layout
let selectedGP = '1'; // typeB layout
let selectedFilters;

function initializeFilters() {
  selectedFilters = {
    have: null,
    element: null,
    gender: null,
    group: null,
    newStatus: { new: false, soon: false },
  };
  if (isTypeB) selectedFilters.GP = selectedGP;
  else selectedFilters.gender = selectedGender;
  updateTitle();
}

const displayName = (c) => (selectedGender === 'f' ? c.name : c.maleName || c.name);

function passesFilters(c, searchTerm) {
  const f = selectedFilters;

  if (isTypeB && f.GP && c.GP != f.GP) return false;
  if (!isTypeB && f.gender && c.gender !== f.gender) return false;
  if (f.element && c.element !== f.element) return false;
  if (f.group && c.group !== f.group) return false;
  if (f.have !== null && Boolean(c.have) !== f.have) return false;

  const wantedStatuses = Object.keys(f.newStatus).filter((status) => f.newStatus[status]);
  if (wantedStatuses.length && !wantedStatuses.includes(c.status)) return false;

  return displayName(c).toLowerCase().includes(searchTerm);
}

// typeB: merge entries with the same name + gender into one card.
function mergeTypeB(list) {
  const merged = new Map();

  list.forEach((c) => {
    const key = `${c.name}_${c.gender}`;
    const elements = (Array.isArray(c.element) ? c.element : [c.element]).filter((el) => el != null);

    if (!merged.has(key)) {
      merged.set(key, { ...c, elements: [...elements], imgNames: [c.imgName], allVersions: [c] });
    } else {
      const entry = merged.get(key);
      entry.elements.push(...elements);
      entry.imgNames.push(c.imgName);
      entry.allVersions.push(c);
    }
  });

  return [...merged.values()].map((c) => ({ ...c, elements: [...new Set(c.elements)] }));
}

// ---------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------
// A small element badge. With several elements it flips through them every second.
function buildElementBadge(elements) {
  const badge = Dex.el('div', 'element-icon');
  const show = (el) => {
    Dex.resolveImage(config.getElementIconPath(el)).then((url) => {
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

  const hasElementName = typeof c.element === 'string' && c.element.trim() !== '';
  const elementText = c.elements?.length ? c.elements.join(', ') : hasElementName ? c.element : '';
  card.title = elementText ? `(${elementText}, ${c.rarity}★)` : `(${c.rarity}★)`;

  const iconWrapper = Dex.el('div', 'icon-wrapper');
  iconWrapper.style.background = Dex.rarityGradient(c.rarity);

  if (c.status === 'new') iconWrapper.appendChild(Dex.el('div', 'soon-label', 'NEW'));
  if (c.status === 'soon') iconWrapper.appendChild(Dex.el('div', 'soon-label', 'SOON'));

  // Several elements (a list) make the badge flip through them.
  const elements = c.elements || (Array.isArray(c.element) ? c.element : []);
  if (elements.length && config.getElementIconPath) {
    iconWrapper.appendChild(buildElementBadge(elements));
  }

  iconWrapper.appendChild(Dex.buildCharaIcon(c, config));

  card.appendChild(iconWrapper);
  if (isTypeB) card.appendChild(Dex.el('div', 'char-label', displayName(c)));
  return card;
}

function renderList() {
  Dex.stopCycles();
  charListEl.innerHTML = '';

  const searchTerm = searchInput?.value?.toLowerCase() || '';
  let visible = characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((c) => passesFilters(c, searchTerm));

  if (isTypeB) visible = mergeTypeB(visible);

  visible.forEach((c) => charListEl.appendChild(buildCard(c)));
  Dex.updateCharCount(visible.length);
}

// The big title follows the toggle ("Lumine" / "Aether" ...).
function updateTitle() {
  const match = isTypeB
    ? characters.find((c) => c.GP == selectedGP)
    : characters.find((c) => c.gender === selectedGender);
  if (match) titleEl.textContent = isTypeB ? match.name2 : match.name;
}

// ---------------------------------------------------------------
// Wiring
// ---------------------------------------------------------------
Dex.initFilterPanel();
Dex.bindToggleableRadios(() => selectedFilters, ['element', 'gender', 'group', 'have'], renderList);

document.querySelectorAll('input[name="newStatus"]').forEach((input) => {
  input.addEventListener('change', (e) => {
    selectedFilters.newStatus[e.target.value] = e.target.checked; // value is "new" or "soon"
    renderList();
  });
});

genderToggle?.addEventListener('change', () => {
  if (isTypeB) {
    selectedGP = genderToggle.checked ? '2' : '1';
    selectedFilters.GP = selectedGP;
  } else {
    selectedGender = genderToggle.checked ? 'm' : 'f';
    selectedFilters.gender = selectedGender;
  }
  updateTitle();
  renderList();
});

initializeFilters();
renderList();
