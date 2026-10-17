/* =====================================================================
   sup.js — "Support" pages (004S.html): Bangboo (ZZZ), Stigmata/ELFs (HI3) ...

   The game's own js/sup.js holds the list and then calls:

       Dex.initSupportPage({
         characters,                      // [{ name, imgName, imgName2?, have, rarity, status?, folder?, part? }]   imgName2 = extra big picture(s) in the popup (the icon stays imgName)
         iconFolder:   '../assets/...',   // small pictures:  <iconFolder>/<folder>/<imgName>.png
         spriteFolder: '../assets/...',   // big pictures:    <spriteFolder>/<folder>/<imgName>.png
       });

   Needs: common.js, sprite-popup.js (loaded before this file).
   ===================================================================== */
(function () {
  const Dex = (window.Dex = window.Dex || {});

  const joinPath = (...parts) => parts.filter(Boolean).join('/');
  const emptyFilters = () => ({ have: null, rarity: null, element: null, isNew: false });

  Dex.initSupportPage = function ({ characters, iconFolder, spriteFolder }) {
    const listEl = document.getElementById('charList');
    const searchInput = document.getElementById('searchInput');
    const filterPopup = document.getElementById('filterPopup');
    const newCheckbox = document.getElementById('filterNew');

    let filters = emptyFilters();
    let selectedPart = '2'; // only matters for characters that have a `part`

    function passesFilters(c, searchTerm) {
      if (!c.name.toLowerCase().includes(searchTerm)) return false;

      const inPart = selectedPart === 'all' || !c.part || c.part === selectedPart || (selectedPart === 'collab' && c.collab);
      if (!inPart) return false;

      if (filters.have !== null && Boolean(c.have) !== filters.have) return false;
      if (filters.rarity && String(c.rarity) !== filters.rarity) return false;
      if (filters.element && c.element !== filters.element) return false;
      if (filters.isNew && c.status !== 'new' && c.status !== 'soon') return false; // New = new + soon
      return true;
    }

    function buildCard(c) {
      const card = Dex.el('div', 'char-card');
      card.title = `${c.name} (${c.element || 'Unknown'}, ${c.rarity}★)`;

      const iconWrapper = Dex.el('div', 'icon-wrapper');
      iconWrapper.style.background = Dex.rarityGradient(c.rarity);

      if (c.status === 'new') iconWrapper.appendChild(Dex.el('div', 'soon-label', 'NEW'));
      if (c.status === 'soon') iconWrapper.appendChild(Dex.el('div', 'soon-label', 'SOON'));

      const names = Dex.imageNames(c); // [imgName, imgName2 ...]: the icon uses the first, the popup shows all
      const name = names[0];
      const img = Dex.el('img', 'char-icon');
      img.src = `${joinPath(iconFolder, c.folder, name)}.png`;
      img.onerror = () => {
        img.onerror = null;
        img.src = Dex.FALLBACK_ICON;
      };
      img.alt = c.name;
      iconWrapper.appendChild(img);

      card.append(iconWrapper, Dex.el('div', '', c.name));
      card.addEventListener('click', () => {
        // The popup also shows the neighbouring characters as faded side icons (press once to bring one
        // forward, twice to move to it).
        const groupOf = (x) => {
          const list = Dex.imageNames(x);
          return {
            images: list.map((n) => `${joinPath(spriteFolder, x.folder, n)}.png`),
            name: x.name,
            icon: `${joinPath(iconFolder, x.folder, list[0])}.png`,
            bg: Dex.rarityGradient(x.rarity),
          };
        };
        const usable = (x) => x === c || String(x.imgName || x.name || '').trim() !== ''; // skip empty placeholder lines
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

    // Switching part clears every filter and the search box.
    function resetFilters() {
      filters = emptyFilters();
      searchInput.value = '';
      filterPopup?.querySelectorAll('input').forEach((input) => (input.checked = false));
      filterPopup?.classList.add('hidden');
    }

    Dex.initFilterPanel();
    Dex.bindToggleableRadios(() => filters, ['have', 'rarity', 'element'], render);

    // "Keep filters": off = one filter at a time, on = they combine
    const keepFilters = filterPopup ? Dex.keepFilters.addToggle(filterPopup) : { isOn: () => true };
    function clearOtherFilters(exceptKey) {
      ['have', 'rarity', 'element'].forEach((key) => {
        if (key === exceptKey) return;
        filters[key] = null;
        filterPopup.querySelectorAll(`input[name="${key}"]`).forEach((input) => (input.checked = false));
      });
      if (exceptKey !== 'isNew') {
        filters.isNew = false;
        if (newCheckbox) newCheckbox.checked = false;
      }
    }
    // runs after the radio's own handler (bubbling), so `filters` is already updated
    filterPopup?.addEventListener('click', (e) => {
      const key = e.target.matches && e.target.matches('input[type="radio"]') ? e.target.name : null;
      if (key && filters[key] !== null && !keepFilters.isOn()) {
        clearOtherFilters(key);
        render();
      }
    });

    newCheckbox?.addEventListener('change', () => {
      if (newCheckbox.checked && !keepFilters.isOn()) clearOtherFilters('isNew');
      filters.isNew = newCheckbox.checked;
      render();
    });

    searchInput.addEventListener('input', render);

    const partButtons = document.querySelectorAll('.part-btn:not(.keep-btn)');
    partButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        partButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        resetFilters();
        selectedPart = btn.dataset.part;
        render();
      });
    });

    render();
  };
})();
