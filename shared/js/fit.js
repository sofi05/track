/* =====================================================================
   fit.js — "gallery" pages: Outfits (004F).

   Each page first loads a data file that defines `gameConfig`:
       gameConfig.characters       the list
       gameConfig.getImgPath(c)    URL of the small icon
       gameConfig.getSpritePath(c) ARRAY of URLs opened in the popup

   Entries with the SAME name become ONE card: its icon flips between the
   outfits and its popup shows all of them. To add an outfit to a character,
   just add another line with the same name.
   Optional: gameConfig.page  the filter buttons of the page (same format as window.CHARA_PAGE, see js/chara-page.js)
   Optional: gameConfig.lastVersion  e.g. '6.6' -> a red "vers. 6.6" pill under the title.
   Needs: common.js, sprite-popup.js, chara-filters.js (loaded before this file).
   ===================================================================== */

const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');

// ---------------------------------------------------------------
// Filters
// ---------------------------------------------------------------
// The filter bar is the same as on the Characters page, built from gameConfig.page (see the game's js/fit.js).
const charaFilters =
  document.getElementById('quickFilters') && gameConfig.page
    ? Dex.initCharaFilters({ page: gameConfig.page, characters: gameConfig.characters, onChange: () => renderList() })
    : null;

function passesFilters(c, searchTerm) {
  if (!c.name) return false; // blank placeholder rows in the data lists
  if (!c.name.toLowerCase().includes(searchTerm)) return false;
  return charaFilters ? charaFilters.matches(c) : true;
}

// ---------------------------------------------------------------
// One card per character
// ---------------------------------------------------------------
const STATUS_PRIORITY = ['new', 'soon', 'guest']; // which status the card shows when its outfits differ

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
    card.collab = card.variants.some((v) => v.collab === true); // Collab button finds the card if ANY outfit is collab
    card.collabOnly = card.variants.every((v) => v.collabOnly === true); // hidden outside Collab only if ALL its outfits are
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

  if (c.status === 'new' || c.status === 'soon' || c.status === 'guest') {
    iconWrapper.appendChild(Dex.el('div', 'soon-label' + (c.status === 'guest' ? ' guest' : ''), c.status.toUpperCase()));
  }

  const img = Dex.el('img', 'char-icon');
  img.alt = c.name;
  Dex.applyIconFit(img, c); // zoom / iconX / iconY of the first outfit of the card
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

// Typing help: a short picture prefix can catch another card's pictures. Say so in the Console (F12).
(function warnSharedPictures() {
  try {
    const owner = new Map();
    cards.forEach((card) => {
      new Set(card.variants.flatMap((v) => [].concat(gameConfig.getSpritePath(v)))).forEach((url) => {
        if (owner.has(url) && owner.get(url) !== card.name) console.warn(`Picture used by two cards (${owner.get(url)} and ${card.name}): ${url.split('/').pop()}. Use a longer prefix.`);
        else owner.set(url, card.name);
      });
    });
  } catch (e) {
    /* only a typing help: never stop the page */
  }
})();

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
// Red pill under the title: the version this list is updated to (gameConfig.lastVersion). Not a filter.
if (gameConfig.lastVersion) {
  const pill = Dex.el('div', 'version-pill', `vers. ${gameConfig.lastVersion}`);
  pill.title = 'This list is up to date until this version';
  document.getElementById('charCount')?.after(pill);
}

searchInput.addEventListener('input', renderList);

renderList();
