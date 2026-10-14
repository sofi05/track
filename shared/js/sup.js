/* =====================================================================
   sup.js — "Support" pages (004S.html): Bangboo (ZZZ), Stigmata/ELFs (HI3) ...

   The game's own js/sup.js holds the list and then calls:

       Dex.initSupportPage({
         characters,                      // [{ name, imgName, have, rarity, status?, folder?, part? }]
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
      if (filters.isNew && c.status !== 'new') return false;
      return true;
    }

    function buildCard(c) {
      const card = Dex.el('div', 'char-card');
      card.title = `${c.name} (${c.element || 'Unknown'}, ${c.rarity}★)`;

      const iconWrapper = Dex.el('div', 'icon-wrapper');
      iconWrapper.style.background = Dex.rarityGradient(c.rarity);

      if (c.status === 'new') iconWrapper.appendChild(Dex.el('div', 'soon-label', 'NEW'));
      if (c.status === 'soon') iconWrapper.appendChild(Dex.el('div', 'soon-label', 'SOON'));

      const name = c.imgName || c.name;
      const img = Dex.el('img', 'char-icon');
      img.src = `${joinPath(iconFolder, c.folder, name)}.png`;
      img.alt = c.name;
      iconWrapper.appendChild(img);

      card.append(iconWrapper, Dex.el('div', '', c.name));
      card.addEventListener('click', () => Dex.showPopup(`${joinPath(spriteFolder, c.folder, name)}.png`, c.name));
      return card;
    }

    function render() {
      listEl.innerHTML = '';
      const searchTerm = searchInput.value.toLowerCase();

      const visible = characters
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter((c) => passesFilters(c, searchTerm));

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

    newCheckbox?.addEventListener('change', () => {
      filters.isNew = newCheckbox.checked;
      render();
    });

    searchInput.addEventListener('input', render);

    const partButtons = document.querySelectorAll('.part-btn');
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
