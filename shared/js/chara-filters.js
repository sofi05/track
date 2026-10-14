/* =====================================================================
   chara-filters.js — builds the filters of the Characters page (001.html)
   from the game's settings file (<game>/js/chara-page.js).

   It creates, inside three empty boxes of the page:
       #partBar       part / collab buttons          (Part 1, Part 2, Collab ...)
       #quickFilters  buttons that are always visible (Have, Rarity, Gender ...)
       #filterPopup   the longer filters behind the "Filter" button

   and gives chara.js one thing to ask:  filters.matches(character)

   Rules
     * Every character field can hold ONE value or a LIST of values
       (region: 'mond'  or  region: ['mond', 'liy']). A character passes a
       filter if ANY of its values is the selected one.
     * Different filters are combined (5★ + Female + Pyro), but only when
       "Keep filters" is on. When it is off, picking a filter in another
       category first clears the others, so you always see one thing at a time.
     * Part buttons can be pressed together (Part 1 + Collab) unless they
       share a `group` (Part 1 / Part 2: pressing one unpresses the other).
       They stay pressed when you pick other filters. With none pressed,
       every character is shown. 

   Needs: common.js (loaded before this file).
   ===================================================================== */
(function () {
  const Dex = (window.Dex = window.Dex || {});

  const asList = (value) => (value == null ? [] : Array.isArray(value) ? value : [value]);
  const sameValue = (a, b) => String(a) === String(b);

  // ---------------------------------------------------------------
  // Filters every game has. A game's settings file can change any of these
  // (for example the rarity buttons) or add new ones (region, world ...).
  //   label    name of the section in the Filter popup
  //   options  [{ value, label, icon? }]
  //   fields   character fields to look at (default: the filter's own name)
  // ---------------------------------------------------------------
  const BUILT_IN = {
    have: {
      label: 'Status',
      options: [
        { value: true, label: 'Have' },
        { value: false, label: "Don't" },
      ],
      test: (c, value) => c.have === value,
    },
    new: {
      label: 'New',
      single: true, // one on/off button instead of a choice
      options: [{ value: true, label: 'New' }],
      test: (c) => c.status === 'new' || c.status === 'soon',
    },
    rarity: {
      label: 'Rarity',
      options: [
        { value: 4, label: '4★' },
        { value: 5, label: '5★' },
      ],
    },
    gender: {
      label: 'Gender',
      options: [
        { value: 'm', label: 'Male' },
        { value: 'f', label: 'Female' },
      ],
    },
    element: { label: 'Element', fields: ['element', 'filterElement'] },
  };

  const KEEP_STORAGE_KEY = 'dex-keep-filters';

  function readKeepSetting(fallback) {
    try {
      const saved = localStorage.getItem(KEEP_STORAGE_KEY);
      if (saved !== null) return saved === 'true';
    } catch (e) {
      /* storage can be blocked: just use the default */
    }
    return Boolean(fallback);
  }

  function saveKeepSetting(value) {
    try {
      localStorage.setItem(KEEP_STORAGE_KEY, String(value));
    } catch (e) {
      /* ignore */
    }
  }

  // ---------------------------------------------------------------
  // Main
  // ---------------------------------------------------------------
  Dex.initCharaFilters = function ({ page = {}, onChange = () => {} } = {}) {
    const quickLayout = (page.quick || [['have', 'new'], 'rarity', 'gender']).map(asList); // groups of filter names
    const popupKeys = page.popup || [];
    const parts = page.parts || [];

    const definitions = {};
    function definition(key) {
      if (!definitions[key]) {
        const def = { label: key, options: [], ...BUILT_IN[key], ...(page.filters && page.filters[key]) };
        def.fields = def.fields || [key];
        def.test = def.test || ((c, value) => def.fields.some((f) => asList(c[f]).some((v) => sameValue(v, value))));
        definitions[key] = def;
      }
      return definitions[key];
    }

    // What is selected right now
    const selected = {}; // filter name -> value
    const pressedParts = new Set(); // indexes into `parts`
    let keep = readKeepSetting(page.keepFilters);

    // Everything on the page that shows a selection, so refresh() can update it
    const filterButtons = []; // { node, key, value, kind }
    const partButtons = [];
    let resetButton = null;
    let keepButton = null;

    const isSelected = (key, value) => key in selected && sameValue(selected[key], value);

    // ---------- changing the selection ----------
    function clearFilters(exceptKey) {
      Object.keys(selected).forEach((key) => {
        if (key !== exceptKey) delete selected[key];
      });
    }

    function pickFilter(key, value) {
      const wasOn = isSelected(key, value);
      if (!keep) clearFilters(key);
      if (wasOn) delete selected[key];
      else selected[key] = value;
      changed();
    }

    function pickPart(index) {
      if (!keep) clearFilters();
      if (pressedParts.has(index)) pressedParts.delete(index);
      else {
        // buttons that share a `group` work like radio buttons (Part 1 / Part 2)
        const group = parts[index].group;
        if (group) pressedParts.forEach((i) => parts[i].group === group && pressedParts.delete(i));
        pressedParts.add(index);
      }
      changed();
    }

    function resetAll() {
      clearFilters();
      pressedParts.clear();
      changed();
    }

    function changed() {
      refresh();
      onChange();
    }

    function refresh() {
      filterButtons.forEach(({ node, key, value, kind }) => {
        const on = isSelected(key, value);
        if (kind === 'input') node.checked = on;
        else {
          node.classList.toggle('active', on);
          node.setAttribute('aria-pressed', String(on));
        }
      });
      partButtons.forEach(({ node, index }) => {
        const on = pressedParts.has(index);
        node.classList.toggle('active', on);
        node.setAttribute('aria-pressed', String(on));
      });
      if (resetButton) resetButton.hidden = Object.keys(selected).length === 0 && pressedParts.size === 0;
      if (keepButton) {
        keepButton.classList.toggle('active', keep);
        keepButton.setAttribute('aria-pressed', String(keep));
      }
    }

    // ---------- the question chara.js asks ----------
    function matches(character) {
      for (const key of Object.keys(selected)) {
        if (!definition(key).test(character, selected[key])) return false;
      }
      if (pressedParts.size) {
        const inAnyPart = [...pressedParts].some((i) => partMatches(parts[i], character));
        if (!inAnyPart) return false;
      }
      return true;
    }

    // `value: true` means "the field is exactly true" (collab: true);
    // anything else is compared like a filter value, so lists work too.
    function partMatches(part, character) {
      const field = character[part.field];
      if (part.value === true) return field === true;
      return asList(field).some((v) => sameValue(v, part.value));
    }

    // ---------- building the buttons ----------
    function iconImage(option, def, className) {
      const img = Dex.el('img', className + (def.white ? ' is-white' : ''));
      img.src = option.icon;
      img.alt = option.label || String(option.value);
      return img;
    }

    function buildQuick(container) {
      quickLayout.forEach((group) => {
        const wrap = Dex.el('div', 'chip-group');
        group.forEach((key) => {
          const def = definition(key);
          def.options.forEach((option) => {
            const button = Dex.el('button', 'part-btn chip');
            button.type = 'button';
            button.title = option.label || '';
            button.dataset.filter = key;
            button.dataset.value = String(option.value);
            if (option.icon) button.appendChild(iconImage(option, def, 'chip-icon'));
            else button.textContent = option.label;
            button.addEventListener('click', () => pickFilter(key, option.value));
            filterButtons.push({ node: button, key, value: option.value, kind: 'button' });
            wrap.appendChild(button);
          });
        });
        if (wrap.children.length) container.appendChild(wrap);
      });

      const extras = Dex.el('div', 'chip-group');
      keepButton = Dex.el('button', 'part-btn chip', 'Keep filters');
      keepButton.type = 'button';
      keepButton.title = 'Keep your other filters selected when you pick a new one';
      keepButton.addEventListener('click', () => {
        keep = !keep;
        saveKeepSetting(keep);
        refresh();
      });
      resetButton = Dex.el('button', 'part-btn chip', 'Reset');
      resetButton.type = 'button';
      resetButton.hidden = true;
      resetButton.addEventListener('click', resetAll);
      extras.append(keepButton, resetButton);
      container.appendChild(extras);
    }

    function buildPopup(container) {
      popupKeys.forEach((key) => {
        const def = definition(key);
        const category = Dex.el('div', 'filter-category');
        category.appendChild(Object.assign(Dex.el('button', 'filter-toggle', def.label), { type: 'button' }));

        const options = Dex.el('div', 'filter-options' + (def.grid ? ' region-grid' : ''));
        def.options.forEach((option) => {
          const hasIcon = Boolean(option.icon);
          const label = Dex.el('label', hasIcon ? (def.style === 'region' ? 'region-label-img' : 'element-label') : '');

          const input = document.createElement('input');
          input.type = def.single ? 'checkbox' : 'radio';
          input.name = key;
          input.value = String(option.value);
          input.addEventListener('click', () => pickFilter(key, option.value));
          filterButtons.push({ node: input, key, value: option.value, kind: 'input' });
          label.appendChild(input);

          if (hasIcon) label.appendChild(iconImage(option, def, def.style === 'region' ? 'region-img' : 'element-img'));
          else label.append(' ' + option.label);
          options.appendChild(label);
        });
        category.appendChild(options);
        container.appendChild(category);
      });
    }

    function buildParts(container) {
      parts.forEach((part, index) => {
        const button = Dex.el('button', 'part-btn', part.label);
        button.type = 'button';
        button.dataset.part = String(index);
        button.addEventListener('click', () => pickPart(index));
        partButtons.push({ node: button, index });
        container.appendChild(button);
      });
    }

    const partBar = document.getElementById('partBar');
    const quickBox = document.getElementById('quickFilters');
    const popupBox = document.getElementById('filterPopup');

    if (partBar) {
      buildParts(partBar);
      partBar.hidden = parts.length === 0;
    }
    if (quickBox) buildQuick(quickBox);
    if (popupBox) {
      buildPopup(popupBox);
      if (popupKeys.length === 0) document.getElementById('filterBtn')?.setAttribute('hidden', '');
    }

    refresh();
    return { matches, reset: resetAll };
  };
})();
