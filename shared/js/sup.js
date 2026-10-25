/* =====================================================================
   sup.js — "Support" pages (004S.html): Bangboo (ZZZ), ELFs (HI3) ...

   The game's own js/sup.js holds the list and then calls:

       Dex.initSupportPage({
         characters,                      // [{ name, imgIcon, imgSprite?, have, rarity, status?, p? }]   imgSprite = the big pictures of the popup, e.g. ['=', 'Other']  ('=' = the same name as imgIcon)
         iconFolder:   '../assets/...',   // small pictures:  <iconFolder>/<imgIcon>.png
         spriteFolder: '../assets/...',   // big pictures:    <spriteFolder>/<each name of imgSprite>.png
         iconFit?:     'contain',         // show the whole picture in every icon (default: fills the square and crops the edges)
         // any character may also have  zoom / iconX / iconY  to frame its icon (see Dex.applyIconFit in common.js)
         lastVersion?: '3.2',             // the version this list is updated to (red "vers." pill under the title)
         page:         { quick, popup, parts, filters }   // the filter buttons (same format as window.CHARA_PAGE, see 02ZZZ/js/chara-page.js)
       });

   Needs: common.js, sprite-popup.js, chara-filters.js (loaded before this file).
   ===================================================================== */
(function () {
  const Dex = (window.Dex = window.Dex || {});

  const joinPath = (...parts) => parts.filter(Boolean).join('/');

  Dex.initSupportPage = function ({ characters, iconFolder, spriteFolder, page, lastVersion, iconFit }) {
    const listEl = document.getElementById('charList');
    const searchInput = document.getElementById('searchInput');

    // Red pill under the title: the version this list is updated to. Not a filter.
    if (lastVersion) {
      const pill = Dex.el('div', 'version-pill', `vers. ${lastVersion}`);
      pill.title = 'This list is up to date until this version';
      document.getElementById('charCount')?.after(pill);
    }

    // The filter bar (same as the Characters page)
    const charaFilters = Dex.initCharaFilters({ page, characters, onChange: () => render() });

    function passesFilters(c, searchTerm) {
      return c.name.toLowerCase().includes(searchTerm) && charaFilters.matches(c);
    }

    function buildCard(c) {
      const card = Dex.el('div', 'char-card');
      card.title = `${c.name} (${c.element || 'Unknown'}, ${c.rarity}★)`;

      const iconWrapper = Dex.el('div', 'icon-wrapper');
      iconWrapper.style.background = Dex.rarityGradient(c.rarity);

      if (c.status === 'new') iconWrapper.appendChild(Dex.el('div', 'soon-label', 'NEW'));
      if (c.status === 'soon') iconWrapper.appendChild(Dex.el('div', 'soon-label', 'SOON'));
      if (c.status === 'guest') iconWrapper.appendChild(Dex.el('div', 'soon-label guest', 'GUEST'));

      const name = Dex.iconName(c); // the icon
      const img = Dex.el('img', 'char-icon');
      img.src = `${joinPath(iconFolder, name)}.png`;
      img.onerror = () => {
        img.onerror = null;
        img.src = Dex.FALLBACK_ICON;
      };
      img.alt = c.name;
      Dex.applyIconFit(img, c, iconFit); // zoom / iconX / iconY / iconFit
      iconWrapper.appendChild(img);

      // Element badge: the picture of this element in the page's Element filter (page.filters.element.options)
      const elementOptions = (page.filters && page.filters.element && page.filters.element.options) || [];
      const badge = Dex.elementBadge(c, (e) => {
        const option = elementOptions.find((o) => o.icon && String(o.value).toLowerCase() === e.toLowerCase());
        return option ? option.icon : null;
      });
      if (badge) iconWrapper.appendChild(badge);

      card.append(iconWrapper, Dex.el('div', '', c.name));
      card.addEventListener('click', () => {
        // The popup also shows the neighbouring characters as faded side icons (press once to bring one
        // forward, twice to move to it).
        const groupOf = (x) => {
          const list = Dex.spriteNames(x);
          return {
            images: list.map((n) => `${joinPath(spriteFolder, n)}.png`),
            name: x.name,
            icon: `${joinPath(iconFolder, Dex.iconName(x))}.png`,
            bg: Dex.rarityGradient(x.rarity),
          };
        };
        const usable = (x) => x === c || String(Dex.iconName(x)).trim() !== ''; // skip empty placeholder lines
        const list = stepList.includes(c) ? stepList.filter(usable) : [c];
        Dex.showPopup([], c.name, { groups: list.map(groupOf), startGroup: list.indexOf(c) });
      });
      return card;
    }

    let stepList = []; // the characters on screen (the popup steps through them)

    function render() {
      listEl.innerHTML = '';
      const searchTerm = searchInput.value.toLowerCase();

      const visible = characters
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter((c) => passesFilters(c, searchTerm));

      stepList = visible;
      if (visible.length === 0) Dex.showNoResults(listEl);
      else visible.forEach((c) => listEl.appendChild(buildCard(c)));

      Dex.updateCharCount();
    }

    searchInput.addEventListener('input', render);
    render();
  };
})();
