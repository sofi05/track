/* =====================================================================
   fit.js — "gallery" pages: Outfits and Stigmata (004F / 004ST).

   Each page first loads a data file that defines `gameConfig`:
       gameConfig.characters       the list
       gameConfig.getImgPath(c)    URL of the small icon
       gameConfig.getSpritePath(c) ARRAY of URLs opened in the popup

   Entries with the SAME name become ONE card: its icon flips between the
   outfits and its popup shows all of them. To add an outfit to a character,
   just add another line with the same name.
   Optional: gameConfig.lastVersion  e.g. '6.6' -> a red "vers. 6.6" pill under the title.
   Needs: common.js, sprite-popup.js (loaded before this file).
   ===================================================================== */

const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');

// ---------------------------------------------------------------
// Filter state
// ---------------------------------------------------------------
// have / want / new are mutually exclusive (checkboxes behaving like radios).
const STATUS_FILTERS = ['have', 'want', 'new'];
const selectedFilters = { have: false, want: false, new: false, part: null, kind: null, exps: null };

// Optional buttons of the Stigmata page: Female / Male / EXPs, then a game (one choice each).
// Data: gender: 'f' | 'm'   exps: ['hsr', 'gi', ...] (a character from another game, see expsGames)
const asList = (value) => (value == null ? [] : [].concat(value));
const sameText = (a, b) => String(a).trim().toLowerCase() === String(b).trim().toLowerCase();
const anyVariant = (c, test) => (c.variants || [c]).some(test);

function clearStatusFilters() {
  STATUS_FILTERS.forEach((key) => {
    selectedFilters[key] = false;
    const checkbox = document.querySelector(`[data-filter="${key}"]`);
    if (checkbox) checkbox.checked = false;
  });
}

// `have` can be true/false or a list like [true, false] (one entry per outfit).
const ownsAny = (c, wanted) => c.have === wanted || (Array.isArray(c.have) && c.have.includes(wanted));

function passesFilters(c, searchTerm) {
  if (!c.name) return false; // blank placeholder rows in the data lists
  if (!c.name.toLowerCase().includes(searchTerm)) return false;
  if (selectedFilters.have && !ownsAny(c, true)) return false;
  if (selectedFilters.want && !ownsAny(c, false)) return false;
  if (selectedFilters.new && c.status !== 'new' && c.status !== 'soon') return false; // New = new + soon

  const { kind, exps } = selectedFilters;
  if (kind === 'f' || kind === 'm') {
    if (!anyVariant(c, (v) => asList(v.gender).some((g) => sameText(g, kind)))) return false;
  } else if (kind === 'exps') {
    const hasExps = (v) => asList(v.exps).length > 0 && (!exps || asList(v.exps).some((g) => sameText(g, exps)));
    if (!anyVariant(c, hasExps)) return false;
  }

  const part = selectedFilters.part;
  if (part === 'none') return !('part' in c);
  if (part !== null) return c.part === part;
  return true;
}

// ---------------------------------------------------------------
// One card per character
// ---------------------------------------------------------------
const STATUS_PRIORITY = ['new', 'soon']; // which status the card shows when its outfits differ

function mergeSameName(list) {
  const byName = new Map();
  const merged = [];

  list.forEach((entry) => {
    if (!entry.name || !byName.has(entry.name)) {
      const card = { ...entry, variants: [entry] };
      merged.push(card);
      if (entry.name) byName.set(entry.name, card);
      return;
    }
    const card = byName.get(entry.name);
    card.variants.push(entry);
  });

  merged.forEach((card) => {
    if (card.variants.length < 2) return;
    // one `have` per outfit, so Have / Don't find the card if ANY outfit matches
    card.have = card.variants.map((v) => v.have);
    card.status = STATUS_PRIORITY.find((status) => card.variants.some((v) => v.status === status));
  });
  return merged;
}

// ---------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------
function buildCard(c) {
  const card = Dex.el('div', 'char-card');
  card.title = `${c.name} (${c.rarity || ''}★)`;

  const iconWrapper = Dex.el('div', 'icon-wrapper');
  iconWrapper.style.background = Dex.rarityGradient(c.rarity);

  if (c.status === 'new' || c.status === 'soon') {
    iconWrapper.appendChild(Dex.el('div', 'soon-label', c.status.toUpperCase()));
  }

  const img = Dex.el('img', 'char-icon');
  img.alt = c.name;
  const iconUrls = c.variants.map((v) => gameConfig.getImgPath(v));
  if (iconUrls.length > 1) Dex.cycleImage(img, iconUrls, Dex.FALLBACK_ICON); // the icon flips between the outfits
  else {
    img.src = iconUrls[0];
    img.onerror = () => {
      img.onerror = null;
      img.src = Dex.FALLBACK_ICON;
    };
  }
  iconWrapper.appendChild(img);

  card.append(iconWrapper, Dex.el('div', '', c.name));
  card.addEventListener('click', () => {
    // The popup also knows the other characters on screen: their icons show faded on both sides, and
    // pressing -> / <- once brings the icon to the front, a second time moves to that character.
    const groupOf = (x) => ({
      images: [...new Set(x.variants.flatMap((v) => gameConfig.getSpritePath(v)))],
      name: x.name,
      icon: gameConfig.getImgPath(x.variants[0]),
      bg: Dex.rarityGradient(x.rarity),
    });
    const usable = (x) => x === c || String(x.variants[0].imgName || x.name || '').trim() !== ''; // skip empty placeholder lines
    const list = stepList.includes(c) ? stepList.filter(usable) : [c];
    Dex.showPopup([], c.name, { fit: true, groups: list.map(groupOf), startGroup: list.indexOf(c) });
  });
  return card;
}

const cards = mergeSameName(gameConfig.characters);

// the characters on screen (the popup steps through them)
let stepList = [];

function renderList() {
  Dex.stopCycles();
  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  const visible = cards
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((c) => passesFilters(c, searchTerm));

  stepList = visible;
  if (visible.length === 0) Dex.showNoResults(charListEl);
  else visible.forEach((c) => charListEl.appendChild(buildCard(c)));

  Dex.updateCharCount();
}

// ---------------------------------------------------------------
// Wiring
// ---------------------------------------------------------------
const partButtons = document.querySelectorAll('.part-btn:not(.keep-btn)');
const partCheckboxes = document.querySelectorAll('input[name="part"]');

function clearPartFilter() {
  selectedFilters.part = null;
  partButtons.forEach((b) => b.classList.remove('active'));
  partCheckboxes.forEach((box) => (box.checked = false));
}

// The Filter button and its panel
Dex.initFilterPanel();

// "Keep filters": off = one filter at a time, on = they combine
const filterPanel = document.getElementById('filterPopup'); // (the Stigmata page has no filters)
const keepFilters = filterPanel ? Dex.keepFilters.addToggle(filterPanel) : { isOn: () => true };

// Female / Male / EXPs buttons (top of the Stigmata page) and the games under EXPs
const pickBar = document.getElementById('pickBar');
const expsRow = document.getElementById('expsRow');

if (pickBar && expsRow) {
  const KINDS = [
    { value: 'f', label: 'Female' },
    { value: 'm', label: 'Male' },
    { value: 'exps', label: 'EXPs' },
  ];
  const GAMES = gameConfig.expsGames || [
    { value: 'hsr', label: 'HSR' },
    { value: 'zzz', label: 'ZZZ' },
    { value: 'gi', label: 'GI' },
    { value: 'hna', label: 'HNA' },
  ];
  const buttonsOf = (row) => [...row.querySelectorAll('button')];
  const makeButtons = (row, list, key) =>
    list.forEach((item) => {
      const button = Dex.el('button', 'part-btn chip', item.label);
      button.type = 'button';
      button.dataset.value = item.value;
      button.addEventListener('click', () => {
        selectedFilters[key] = selectedFilters[key] === item.value ? null : item.value; // click again = off
        if (key === 'kind' && selectedFilters.kind !== 'exps') selectedFilters.exps = null;
        paintPicks();
        renderList();
      });
      row.appendChild(button);
    });
  function paintPicks() {
    buttonsOf(pickBar).forEach((b) => b.classList.toggle('active', b.dataset.value === selectedFilters.kind));
    buttonsOf(expsRow).forEach((b) => b.classList.toggle('active', b.dataset.value === selectedFilters.exps));
    expsRow.hidden = selectedFilters.kind !== 'exps'; // the games only show under EXPs
  }
  makeButtons(pickBar, KINDS, 'kind');
  makeButtons(expsRow, GAMES, 'exps');
  paintPicks();
}

// Have / Want / New checkboxes
document.querySelectorAll('.filter-checkbox[data-filter]').forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    const type = e.target.dataset.filter;
    const wasChecked = e.target.checked;

    if (!keepFilters.isOn()) clearStatusFilters();
    selectedFilters[type] = wasChecked;
    e.target.checked = wasChecked;
    if (wasChecked && !keepFilters.isOn()) clearPartFilter();
    renderList();
  });
});

// Part buttons
partButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!keepFilters.isOn()) clearStatusFilters();
    partButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    selectedFilters.part = btn.dataset.part;
    renderList();
  });
});

// Part checkboxes (only one can be on)
partCheckboxes.forEach((box) => {
  box.addEventListener('change', (e) => {
    if (e.target.checked) {
      if (!keepFilters.isOn()) clearStatusFilters();
      partCheckboxes.forEach((other) => { if (other !== e.target) other.checked = false; });
      partButtons.forEach((b) => b.classList.remove('active'));
      selectedFilters.part = e.target.value;
    } else {
      selectedFilters.part = null;
    }
    renderList();
  });
});

// Red pill under the title: the version this list is updated to (gameConfig.lastVersion). Not a filter.
if (gameConfig.lastVersion) {
  const pill = Dex.el('div', 'version-pill', `vers. ${gameConfig.lastVersion}`);
  pill.title = 'This list is up to date until this version';
  document.getElementById('charCount')?.after(pill);
}

searchInput.addEventListener('input', renderList);

// Start on the first part button, if the page has any.
if (partButtons.length) {
  partButtons.forEach((b) => b.classList.remove('active'));
  partButtons[0].classList.add('active');
  selectedFilters.part = partButtons[0].dataset.part;
}

renderList();
