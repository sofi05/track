/* =====================================================================
   chara-filters.js — builds the filters of the Characters page (001.html)
   from the game's settings file (<game>/js/chara-page.js).

   It creates, inside three empty boxes of the page:
       #partBar       part / collab buttons          (Part 1, Part 2, Collab ...)
       #quickFilters  buttons that are always visible (Have, Rarity, Gender ...)
       #filterPopup   the longer filters behind the "Filter" button

   and gives chara.js one thing to ask:  filters.matches(character)

   On a wide screen (800px+) the "Filter" popup is replaced by a row of tabs under the buttons
   (Element, World, Group ...): clicking a tab opens its choices in a row right below it. On a phone
   the popup stays. Both show the same filters from the same settings.

   Rules
     * Capital letters do not matter ('M' finds 'm', 'geo' finds 'Geo').
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
  const sameValue = (a, b) => String(a).trim().toLowerCase() === String(b).trim().toLowerCase(); // 'M' = 'm', 'geo' = 'Geo'

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

  // ---------------------------------------------------------------
  // Look of the plain buttons: a symbol or a small drawn icon, and a colour tone.
  // A game's settings can give any option its own:  { value, label, symbol: '♂', glyph: 'check', tone: 'blue' }
  // tones: blue, pink, green, red, gold.  glyphs: check, cross, spark.   (An `icon` picture wins over both.)
  // ---------------------------------------------------------------
  const AUTO_LOOK = {
    gender: { m: { symbol: '♂', tone: 'blue' }, f: { symbol: '♀', tone: 'pink' } },
    have: { true: { glyph: 'check', tone: 'green' }, false: { glyph: 'cross', tone: 'red' } },
    new: { true: { glyph: 'spark', tone: 'gold' } },
  };
  function look(key, option) {
    if (option.icon) return {};
    const auto = (AUTO_LOOK[key] || {})[String(option.value).toLowerCase()] || {};
    return { symbol: option.symbol ?? auto.symbol, glyph: option.glyph ?? auto.glyph, tone: option.tone ?? auto.tone };
  }
  const GLYPH_PATHS = {
    check: { d: 'M5 12.5l4.5 4.5L19 7', fill: false },
    cross: { d: 'M7 7l10 10M17 7L7 17', fill: false },
    spark: { d: 'M12 3l2.1 6 6.4 .4-5 4 1.7 6.2L12 16l-5.2 3.6 1.7-6.2-5-4 6.4-.4z', fill: true },
  };
  function glyphIcon(name) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('class', 'glyph');
    const path = document.createElementNS(ns, 'path');
    const g = GLYPH_PATHS[name];
    path.setAttribute('d', g.d);
    path.setAttribute('fill', g.fill ? 'currentColor' : 'none');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', g.fill ? '1.2' : '2.6');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(path);
    return svg;
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
    let keep = Dex.keepFilters.read(page.keepFilters);

    // Everything on the page that shows a selection, so refresh() can update it
    const filterButtons = []; // { node, key, value, kind }
    const partButtons = [];
    let resetButton = null;
    let keepButton = null;
    let tabBarPaint = null; // repaints the tabs (set when they exist)
    let extrasBox = null; // the Keep filters + Reset buttons (they move next to the tabs on a wide screen)

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
      if (tabBarPaint) tabBarPaint();
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
            Dex.addPressTip(button, option.label || '');
            button.dataset.filter = key;
            button.dataset.value = String(option.value);
            const style = look(key, option);
            if (style.tone) button.classList.add(`tone-${style.tone}`);
            if (option.icon) button.appendChild(iconImage(option, def, 'chip-icon'));
            else if (style.glyph) button.append(glyphIcon(style.glyph), Dex.el('span', '', option.label));
            else if (style.symbol) {
              button.classList.add('symbol');
              button.textContent = style.symbol;
            } else button.textContent = option.label;
            button.addEventListener('click', () => pickFilter(key, option.value));
            filterButtons.push({ node: button, key, value: option.value, kind: 'button' });
            wrap.appendChild(button);
          });
        });
        if (wrap.children.length) container.appendChild(wrap);
      });

      const extras = Dex.el('div', 'chip-group');
      keepButton = Dex.el('button', 'part-btn chip is-keep', 'Keep filters');
      keepButton.type = 'button';
      keepButton.title = 'Keep your other filters selected when you pick a new one';
      keepButton.addEventListener('click', () => {
        keep = !keep;
        Dex.keepFilters.save(keep);
        refresh();
      });
      resetButton = Dex.el('button', 'part-btn chip', 'Reset');
      resetButton.type = 'button';
      resetButton.hidden = true;
      resetButton.addEventListener('click', resetAll);
      extras.append(keepButton, resetButton);
      extras.classList.add('extras');
      extrasBox = extras;
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
          if (hasIcon) Dex.addPressTip(label, option.label || String(option.value)); // name on hover / long press

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

    // ---------- wide screens: tabs under the buttons instead of the popup ----------
    function buildTabs(quickBox, partBar) {
      const tabBar = Dex.el('div', 'tab-bar quick-filters');
      const tabOptions = Dex.el('div', 'tab-options');
      tabOptions.hidden = true;
      const tabs = [];
      let open = null;

      popupKeys.forEach((key) => {
        const def = definition(key);
        const tab = Dex.el('button', 'part-btn chip tab-btn', def.label);
        tab.type = 'button';
        tab.addEventListener('click', () => {
          open = open === key ? null : key;
          paint();
        });
        tabs.push({ key, tab });
        tabBar.appendChild(tab);

        const row = Dex.el('div', 'tab-row' + (def.style === 'region' ? ' big' : ''));
        row.dataset.key = key;
        row.hidden = true;
        def.options.forEach((option) => {
          const button = Dex.el('button', 'part-btn chip tab-choice');
          button.type = 'button';
          Dex.addPressTip(button, option.label || String(option.value));
          button.dataset.filter = key;
          button.dataset.value = String(option.value);
          if (option.icon) button.appendChild(iconImage(option, def, 'chip-icon'));
          else button.textContent = option.label;
          button.addEventListener('click', () => pickFilter(key, option.value));
          filterButtons.push({ node: button, key, value: option.value, kind: 'button' });
          row.appendChild(button);
        });
        tabOptions.appendChild(row);
      });

      function paint() {
        tabs.forEach(({ key, tab }) => {
          tab.classList.toggle('active', open === key);
          tab.classList.toggle('has-active', key in selected);
        });
        tabOptions.hidden = open === null;
        tabOptions.querySelectorAll('.tab-row').forEach((row) => (row.hidden = row.dataset.key !== open));
      }
      tabBarPaint = paint;

      quickBox.after(tabBar, tabOptions);
      tabBar.hidden = false;

      // On a wide screen the Keep filters / Reset buttons sit at the end of the tab row.
      const wide = window.matchMedia('(min-width: 800px)');
      const place = () => {
        document.body.classList.toggle('filter-tabs', wide.matches);
        if (extrasBox) (wide.matches ? tabBar : quickBox).appendChild(extrasBox);
      };
      wide.addEventListener('change', place);
      place();
      paint();
    }

    const partBar = document.getElementById('partBar');
    const quickBox = document.getElementById('quickFilters');
    const popupBox = document.getElementById('filterPopup');

    if (partBar) {
      buildParts(partBar);
      partBar.hidden = parts.length === 0;
    }
    if (quickBox) buildQuick(quickBox);
    if (quickBox && popupKeys.length) buildTabs(quickBox, partBar);
    if (popupBox) {
      buildPopup(popupBox);
      if (popupKeys.length === 0) document.getElementById('filterBtn')?.setAttribute('hidden', '');
    }

    refresh();
    return { matches, reset: resetAll };
  };
})();
