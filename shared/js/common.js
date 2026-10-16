/* =====================================================================
   common.js — small helpers shared by every page script.

   Everything lives under one global name, `Dex`, so nothing here can
   clash with the variables in your data files (chara.js, fit.js ...).

   Load order on a page:  common.js  ->  (other shared files)  ->  page script
   ===================================================================== */
(function () {
  const Dex = (window.Dex = window.Dex || {});

  // ---------------------------------------------------------------
  // Constants
  // ---------------------------------------------------------------
  Dex.FALLBACK_IMG = '../assets/others/page-loading.png';

  // Card background by rarity (4★, 5★ ...). Add a new rarity here once.
  Dex.RARITY_GRADIENTS = {
    6: 'linear-gradient(155deg, #e97171cc, rgb(148, 42, 42))',
    5: 'linear-gradient(100deg, #7c4600ff, #ffa632cc)',
    4: 'linear-gradient(135deg, #805292ff, #d9c3f3cc)',
    3: 'linear-gradient(135deg, #498ee7ff, #c3f3e7cc)',
  };
  Dex.NO_RARITY_GRADIENT = 'linear-gradient(135deg, #444, #999)';

  Dex.rarityGradient = function (rarity) {
    return Dex.RARITY_GRADIENTS[rarity] || Dex.NO_RARITY_GRADIENT;
  };

  // ---------------------------------------------------------------
  // PNG or WebP: a picture listed as ".png" is also tried as ".webp" (and the
  // other way round), so you can drop in either format without converting.
  // ---------------------------------------------------------------
  const swapExtension = (url) =>
    url.replace(/\.(png|webp)(\?.*)?$/i, (match, ext, query = '') => `.${ext.toLowerCase() === 'png' ? 'webp' : 'png'}${query}`);

  // Any <img> on the page that fails to load gets one more try with the other extension
  // before its own "picture missing" handling (a fallback picture) runs.
  document.addEventListener(
    'error',
    (event) => {
      const img = event.target;
      if (!(img instanceof HTMLImageElement)) return;

      const source = img.getAttribute('src') || '';
      if (img.dataset.otherFormat === source) {
        delete img.dataset.otherFormat; // this WAS the second try: let the normal handling go on
        return;
      }
      const other = swapExtension(source);
      if (other === source) return;

      event.stopImmediatePropagation(); // keeps the picture's own onerror quiet for now
      img.dataset.otherFormat = other;
      img.src = other;
    },
    true
  );

  const resolvedPictures = new Map();
  const probePicture = (url) =>
    new Promise((resolve) => {
      const probe = new Image();
      probe.onload = () => resolve(true);
      probe.onerror = () => resolve(false);
      probe.src = url;
    });

  /** Resolves to the URL that really exists (as given, or with the other extension), or null. */
  Dex.resolveImage = function (url) {
    if (!resolvedPictures.has(url)) {
      const other = swapExtension(url);
      resolvedPictures.set(
        url,
        probePicture(url).then((ok) => (ok ? url : other !== url ? probePicture(other).then((ok2) => (ok2 ? other : null)) : null))
      );
    }
    return resolvedPictures.get(url);
  };

  // ---------------------------------------------------------------
  // Tiny DOM helpers
  // ---------------------------------------------------------------
  /** el('div', 'my-class', 'optional text') */
  Dex.el = function (tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  /** Shows "nothing here" inside a container. */
  Dex.showNoResults = function (container, message = 'Nothing new here ∑( ⚆ᗝ⚆)') {
    container.appendChild(Dex.el('div', 'no-results-message', message));
  };

  /** Updates the "Total: N characters" line. Counts the cards on screen if no number is given. */
  Dex.updateCharCount = function (count) {
    const label = document.getElementById('charCount');
    if (!label) return;
    if (count === undefined) count = document.querySelectorAll('.char-card').length;
    label.textContent = `Total: ${count} character${count !== 1 ? 's' : ''}`;
  };

  /**
   * Image names of a character: `imgName` (or the name) first, then `imgName2`
   * (a name or a list of names). Duplicates and empty names are skipped.
   */
  // Big pictures for a popup: the character's own picture(s), then any alternative
  // outfits listed in `outfitSprites: ['QinCostumeSea']` on the character.
  // Names are looked up in the game's Outfit sprite folder (`outfitPrefix`).
  Dex.spriteList = function (c, main, outfitPrefix) {
    const outfits = (c.outfitSprites == null ? [] : [].concat(c.outfitSprites)).map((name) => `${outfitPrefix}${name}.png`);
    return [...[].concat(main), ...outfits];
  };

  // ---------------------------------------------------------------
  // "Keep filters": ONE setting shared by every page that has filters.
  //   off (default) -> picking a filter clears the others (one at a time)
  //   on            -> filters combine
  // The choice is remembered in the browser.
  // ---------------------------------------------------------------
  const KEEP_KEY = 'dex-keep-filters';
  Dex.keepFilters = {
    read(fallback) {
      try {
        const saved = localStorage.getItem(KEEP_KEY);
        if (saved !== null) return saved === 'true';
      } catch (e) {
        /* storage can be blocked: use the default */
      }
      return Boolean(fallback);
    },
    save(value) {
      try {
        localStorage.setItem(KEEP_KEY, String(value));
      } catch (e) {
        /* ignore */
      }
    },
    // Puts a "Keep filters" button at the top of a filter panel. Returns { isOn }.
    addToggle(panel) {
      let on = Dex.keepFilters.read(false);
      const button = Dex.el('button', 'part-btn chip keep-btn', 'Keep filters');
      button.type = 'button';
      button.title = 'Keep your other filters selected when you pick a new one';
      const paint = () => {
        button.classList.toggle('active', on);
        button.setAttribute('aria-pressed', String(on));
      };
      button.addEventListener('click', () => {
        on = !on;
        Dex.keepFilters.save(on);
        paint();
      });
      paint();
      const row = Dex.el('div', 'keep-row');
      row.appendChild(button);
      panel.insertBefore(row, panel.firstChild);
      return { isOn: () => on };
    },
  };

  Dex.imageNames = function (c) {
    const extra = Array.isArray(c.imgName2) ? c.imgName2 : [c.imgName2];
    return [...new Set([c.imgName || c.name, ...extra].filter(Boolean))];
  };

  // ---------------------------------------------------------------
  // Pictures that flip by themselves (element badges, icons with several pictures)
  // ---------------------------------------------------------------
  const cycleTimers = [];
  let cycleGeneration = 0; // goes up every time the timers are cleared

  /** Runs `fn` every `ms` milliseconds until Dex.stopCycles() is called (done when a list is redrawn). */
  Dex.startCycle = function (fn, ms) {
    cycleTimers.push(setInterval(fn, ms));
  };

  Dex.stopCycles = function () {
    cycleTimers.forEach(clearInterval);
    cycleTimers.length = 0;
    cycleGeneration++;
  };

  Dex.CYCLE_MS = 2000; // how long each picture stays

  /**
   * Makes an <img> flip through a list of picture URLs.
   * The first picture shows at once; pictures that do not exist are left out.
   */
  Dex.cycleImage = function (img, urls, fallbackUrl) {
    img.onerror = () => {
      img.onerror = null;
      img.src = fallbackUrl;
    };
    img.src = urls[0];
    if (urls.length < 2) return;

    const generation = cycleGeneration;
    Promise.all(urls.slice(1).map(Dex.resolveImage)).then((found) => {
      if (generation !== cycleGeneration) return; // the list was redrawn meanwhile
      const shown = [urls[0], ...found.filter(Boolean)];
      if (shown.length < 2) return;
      let current = 0;
      Dex.startCycle(() => (img.src = shown[++current % shown.length]), Dex.CYCLE_MS);
    });
  };

  // ---------------------------------------------------------------
  // Filter UI (the "Filter" button, its panel and its radio buttons)
  // ---------------------------------------------------------------

  /**
   * Opens / closes the filter panel and runs the accordion sections inside it.
   * Safe to call on pages that have no filter panel.
   */
  Dex.initFilterPanel = function () {
    const filterBtn = document.getElementById('filterBtn');
    const filterPopup = document.getElementById('filterPopup');

    if (filterBtn && filterPopup) {
      filterBtn.addEventListener('click', () => filterPopup.classList.toggle('hidden'));
      document.addEventListener('click', (e) => {
        if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) {
          filterPopup.classList.add('hidden');
        }
      });
    }

    // Accordion: opening one section closes the others.
    const toggles = document.querySelectorAll('.filter-toggle');
    toggles.forEach((button) => {
      button.addEventListener('click', () => {
        toggles.forEach((other) => {
          if (other === button) return;
          other.classList.remove('active');
          other.nextElementSibling?.classList.remove('visible');
        });
        button.classList.toggle('active');
        button.nextElementSibling?.classList.toggle('visible');
      });
    });
  };

  /**
   * Makes a group of radio buttons "toggleable": clicking the selected one
   * clears it again.
   *
   *   getFilters : () => the filters object (a function, because some pages
   *                replace the whole object when you switch part)
   *   keys       : filter names, e.g. ['element', 'rarity']. Each key must match
   *                the `name="..."` of its radio buttons in the HTML.
   *   onChange   : called after every change (usually re-renders the list)
   */
  Dex.bindToggleableRadios = function (getFilters, keys, onChange) {
    keys.forEach((key) => {
      document.querySelectorAll(`input[name="${key}"]`).forEach((input) => {
        input.addEventListener('click', (e) => {
          const filters = getFilters();
          const value = key === 'have' ? e.target.value === 'true' : e.target.value;

          if (filters[key] === value) {
            filters[key] = null;
            input.checked = false;
          } else {
            filters[key] = value;
          }
          onChange();
        });
      });
    });
  };

  // ---------------------------------------------------------------
  // Character icon (the little picture + element badge on list pages)
  // ---------------------------------------------------------------

  /**
   * Builds the icon block used on the Characters / Main pages.
   * `config` is the game's window.CHARA_CONFIG. It needs:
   *
   *   getIconPath(c)      URL of the small icon
   *   getFallbackPath(c)  URL shown if the icon is missing
   *   getSpritePath(c)    URL of the big picture opened on click
   *
   * and may also have:
   *
   *   getElementPath(c)   URL of the element badge (return null for none)
   *   getSpritePaths(c)   LIST of big pictures, if a character has several
   *                       (Dex.spriteList adds the character's `outfitSprites`)
   *   cycleIcons          true = a character with imgName2 flips between its pictures
   *   getLabels(c)        a row of text tags, as { list, item, values }, e.g.
   *                       { list: 'region-list', item: 'region-label', values: c.region }
   *
   * A game with unusual needs can define createImageElement(c) in its config
   * instead; that function then replaces the standard icon completely.
   */
  Dex.buildCharaIcon = function (c, config) {
    if (config.createImageElement) return config.createImageElement(c);

    const container = Dex.el('div', 'char-icon-container');

    const img = Dex.el('img', 'char-icon');
    img.alt = c.name;

    // A character with several pictures (imgName2) can flip between them: set cycleIcons: true in the config.
    const names = Dex.imageNames(c);
    if (config.cycleIcons && names.length > 1) {
      const urls = names.map((name) => config.getIconPath({ ...c, imgName: name }));
      Dex.cycleImage(img, urls, config.getFallbackPath(c));
    } else {
      img.src = config.getIconPath(c);
      img.onerror = () => {
        img.onerror = null; // avoid an endless loop if the fallback is missing too
        img.src = config.getFallbackPath(c);
      };
    }
    container.appendChild(img);

    const elementPath = config.getElementPath ? config.getElementPath(c) : null;
    if (elementPath) {
      const badge = Dex.el('img', 'element-icon');
      badge.src = elementPath;
      badge.alt = c.element || 'Unknown';
      container.appendChild(badge);
    }

    const labels = config.getLabels ? config.getLabels(c) : null;
    if (labels && labels.values) {
      const list = Dex.el('div', labels.list);
      labels.values.forEach((text) => list.appendChild(Dex.el('span', labels.item, text)));
      container.appendChild(list);
    }

    container.addEventListener('click', () => {
      Dex.showPopup(config.getSpritePaths ? config.getSpritePaths(c) : config.getSpritePath(c), c.name);
    });
    return container;
  };
})();
