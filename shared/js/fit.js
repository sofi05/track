/* =====================================================================
   fit.js — "gallery" pages: Outfits and Stigmata (004F / 004ST).

   Each page first loads a data file that defines `gameConfig`:
       gameConfig.characters       the list
       gameConfig.getImgPath(c)    URL of the small icon
       gameConfig.getSpritePath(c) ARRAY of URLs opened in the popup

   Entries with the SAME name become ONE card: its icon flips between the
   outfits and its popup shows all of them. To add an outfit to a character,
   just add another line with the same name.
   Needs: common.js, sprite-popup.js (loaded before this file).
   ===================================================================== */

const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');

// ---------------------------------------------------------------
// Filter state
// ---------------------------------------------------------------
// have / want / new are mutually exclusive (checkboxes behaving like radios).
const STATUS_FILTERS = ['have', 'want', 'new'];
const selectedFilters = { have: false, want: false, new: false, part: null };

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
  if (selectedFilters.new && c.status !== 'new') return false;

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
  if (iconUrls.length > 1) Dex.cycleImage(img, iconUrls, Dex.FALLBACK_IMG); // the icon flips between the outfits
  else img.src = iconUrls[0];
  iconWrapper.appendChild(img);

  card.append(iconWrapper, Dex.el('div', '', c.name));
  card.addEventListener('click', () => {
    const pictures = c.variants.flatMap((v) => gameConfig.getSpritePath(v));
    Dex.showPopup([...new Set(pictures)], c.name, { fit: true });
  });
  return card;
}

const cards = mergeSameName(gameConfig.characters);

function renderList() {
  Dex.stopCycles();
  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  const visible = cards
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((c) => passesFilters(c, searchTerm));

  if (visible.length === 0) Dex.showNoResults(charListEl);
  else visible.forEach((c) => charListEl.appendChild(buildCard(c)));

  Dex.updateCharCount();
}

// ---------------------------------------------------------------
// Wiring
// ---------------------------------------------------------------
const partButtons = document.querySelectorAll('.part-btn');
const partCheckboxes = document.querySelectorAll('input[name="part"]');

function clearPartFilter() {
  selectedFilters.part = null;
  partButtons.forEach((b) => b.classList.remove('active'));
  partCheckboxes.forEach((box) => (box.checked = false));
}

// The Filter button and its panel
Dex.initFilterPanel();

// Have / Want / New checkboxes
document.querySelectorAll('.filter-checkbox[data-filter]').forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    const type = e.target.dataset.filter;
    const wasChecked = e.target.checked;

    clearStatusFilters();
    if (wasChecked) {
      selectedFilters[type] = true;
      e.target.checked = true;
      clearPartFilter();
    }
    renderList();
  });
});

// Part buttons
partButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    clearStatusFilters();
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
      clearStatusFilters();
      partCheckboxes.forEach((other) => { if (other !== e.target) other.checked = false; });
      partButtons.forEach((b) => b.classList.remove('active'));
      selectedFilters.part = e.target.value;
    } else {
      selectedFilters.part = null;
    }
    renderList();
  });
});

searchInput.addEventListener('input', renderList);

// Start on the first part button, if the page has any.
if (partButtons.length) {
  partButtons.forEach((b) => b.classList.remove('active'));
  partButtons[0].classList.add('active');
  selectedFilters.part = partButtons[0].dataset.part;
}

renderList();
