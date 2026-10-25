/* =====================================================================
   fit.js — "gallery" pages: Outfits (004F).

   Each page first loads a data file that defines `gameConfig`:
       gameConfig.characters       the list
       gameConfig.getImgPath(c)    URL of the small icon
       gameConfig.getSpritePath(c) ARRAY of URLs opened in the popup

   Entries with the SAME name become ONE card: its icon flips between the
   outfits and its popup shows all of them. To add an outfit to a character,
   just add another line with the same name.
   The filters look at every outfit on its own, and the card is built from the outfits that PASS: Have shows
   only the outfits you have, Don't only the ones you do not. Outfits are merged only when the filter lets
   them all through (no filter = all of them). A merged card shows a small green HAVE pill in the popup on
   the pictures of the outfits you have. The Main character's lines (mc) are never merged.
   Optional: gameConfig.page  the filter buttons of the page (same format as window.CHARA_PAGE, see js/chara-page.js)
   Optional: gameConfig.lastVersion  e.g. '6.6' -> a red "vers. 6.6" pill under the title.
   Needs: common.js, sprite-popup.js, chara-filters.js (loaded before this file).
   ===================================================================== */

// The Main character's outfits (a line with `outfit: true` in the game's js/mc.js) join this list, but only show when the
// MC button is pressed. They are only added when the page loaded js/mc.js (games with a Main character).
(function addMainCharacterOutfits() {
  const main = window.CHARA_CONFIG && window.CHARA_CONFIG.characters;
  if (!main || !gameConfig.characters) return;
  main
    .filter((c) => c.outfit === true && String(Dex.iconName(c)).trim() !== '')
    .forEach((c) =>
      gameConfig.characters.push({
        name: c.name,
        imgIcon: Dex.iconName(c),
        imgSprite: c.imgSprite,
        have: c.have,
        rarity: c.rarity,
        gender: c.gender,
        element: c.element,
        status: c.status,
        mc: true,
        mcOnly: true,
      })
    );
})();

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

// Puts the outfits that have the same name together. The Main character's lines (mc) stay alone.
function groupByName(list) {
  const byName = new Map();
  const cards = [];
  list.forEach((entry) => {
    if (!entry.name) return;
    const key = entry.mc ? null : entry.name;
    if (key !== null && byName.has(key)) {
      byName.get(key).variants.push(entry);
      return;
    }
    const card = { ...entry, variants: [entry] };
    cards.push(card);
    if (key !== null) byName.set(key, card);
  });
  cards.forEach((card) => {
    card.status = STATUS_PRIORITY.find((status) => card.variants.some((v) => v.status === status)) || card.variants[0].status;
  });
  return cards;
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
  const iconUrls = [...new Set(c.variants.map((v) => gameConfig.getImgPath(v)))]; // outfits that share one icon do not flip
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
    const groupOf = (x) => {
      const images = [];
      const notes = [];
      x.variants.forEach((v) => {
        [].concat(gameConfig.getSpritePath(v)).forEach((url) => {
          const at = images.indexOf(url);
          // merged card: a green pill on the pictures of the outfits you have (a single outfit has no pill);
          // a picture that two lines share counts as "have" if ANY of them is have: true
          const have = x.variants.length > 1 && v.have === true ? { text: 'have', tone: 'green' } : '';
          if (at >= 0) {
            if (have && !notes[at]) notes[at] = have;
            return;
          }
          images.push(url);
          notes.push(have);
        });
      });
      return { images, notes,
      name: x.name,
      icon: gameConfig.getImgPath(x.variants[0]),
      bg: Dex.rarityGradient(x.rarity),
      };
    };
    const usable = (x) => x === c || String(Dex.iconName(x.variants[0])).trim() !== ''; // skip empty placeholder lines
    const list = stepList.includes(c) ? stepList.filter(usable) : [c];
    Dex.showPopup([], c.name, { fit: true, groups: list.map(groupOf), startGroup: list.indexOf(c) });
  });
  return card;
}

const cards = groupByName(gameConfig.characters);

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

  // every outfit is filtered on its own, then the ones that passed are put together by name
  const passing = gameConfig.characters.filter((entry) => passesFilters(entry, searchTerm));
  const visible = groupByName(passing).sort((a, b) => a.name.localeCompare(b.name));

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
