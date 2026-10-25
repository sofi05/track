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
  // Default "picture missing" images for EVERY page.
  Dex.FALLBACK_SPRITE = '../assets/others/page-loading.png'; // big pictures (popups)
  Dex.FALLBACK_ICON = '../assets/others/UI_Icon_LunaRite_Unknown.png'; // small icons

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

  // TEMP pictures: a character whose real picture does not exist yet can use a temporary one.
  // Put it in assets/Temp/ with the SAME file name the real picture will have (png or webp):
  //   assets/Temp/1511.webp                 (any picture with that name)
  //   assets/Temp/charaid/1511.webp         (only for the small icon)   assets/Temp/Sprite/1511.webp (only for the big picture)
  // The real picture always wins: once it exists in its normal folder, the Temp one is ignored.
  const TEMP_FOLDER = 'Temp';
  const tempCandidates = (url) => {
    const m = url.match(/^(.*assets\/)(charaid|Sprite)\/(?:.*\/)?([^/?]+)\.(?:png|webp)(?:\?.*)?$/i);
    if (!m) return [];
    const [, base, group, file] = m;
    return [
      `${base}${TEMP_FOLDER}/${group}/${file}.png`,
      `${base}${TEMP_FOLDER}/${group}/${file}.webp`,
      `${base}${TEMP_FOLDER}/${file}.png`,
      `${base}${TEMP_FOLDER}/${file}.webp`,
    ];
  };

  // The other pictures to try, in order, when `url` does not exist.
  const retryList = (url, withTemp = true) => {
    const list = [];
    const other = swapExtension(url);
    if (other !== url) list.push(other);
    if (withTemp) list.push(...tempCandidates(url));
    return list;
  };

  // Any <img> on the page that fails to load is retried with the other extension and then the
  // Temp folder, before its own "picture missing" handling (a fallback picture) runs.
  document.addEventListener(
    'error',
    (event) => {
      const img = event.target;
      if (!(img instanceof HTMLImageElement)) return;

      const source = img.getAttribute('src') || '';
      let retry = img._dexRetry;
      if (!retry || retry.current !== source) {
        retry = img._dexRetry = { current: source, list: retryList(source) }; // a new picture started
      }
      const next = retry.list.shift();
      if (!next) {
        delete img._dexRetry; // nothing left to try: let the normal handling go on
        return;
      }
      retry.current = next;
      event.stopImmediatePropagation(); // keeps the picture's own onerror quiet for now
      img.src = next;
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

  /**
   * Resolves to the URL that really exists (as given, or with the other extension), or null.
   * { temp: true } also looks in the Temp folder.
   */
  Dex.resolveImage = function (url, { temp = false } = {}) {
    const key = temp ? `temp:${url}` : url;
    if (!resolvedPictures.has(key)) {
      const tries = [url, ...retryList(url, temp)];
      resolvedPictures.set(
        key,
        tries.reduce(
          (chain, candidate) => chain.then((found) => found || probePicture(candidate).then((ok) => (ok ? candidate : null))),
          Promise.resolve(null)
        )
      );
    }
    return resolvedPictures.get(key);
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

  // Short lists of picture names. `entries` is what you wrote, e.g. ['606', '60611_04_01', 'Ooh_Summer'];
  // `files` is the generated list of every picture name (window.OUTFIT_FILES, made by tools/list-sprites.py).
  //   an entry that is a whole file name  -> that picture
  //   anything else                       -> every picture whose name STARTS with it ('606' = all of them)
  // A name that is not in the list is still tried as it is (the picture may be new: run the script again).
  Dex.expandPictures = function (entries, files) {
    const list = files || [];
    const out = [];
    [].concat(entries || []).forEach((entry) => {
      const name = String(entry).trim();
      if (!name) return;
      const exact = list.includes(name);
      const found = exact ? [name] : list.filter((file) => file.startsWith(name));
      if (!found.length) console.warn(`No picture starts with "${name}". Run the sprite list script if you added it recently.`);
      if (!exact && found.some((file) => out.includes(file))) console.warn(`"${name}" picks pictures that an earlier entry of the same list already has.`);
      (found.length ? found : [name]).forEach((file) => out.includes(file) || out.push(file));
    });
    return out;
  };

  // Big pictures for a popup, from the line's imgSprite (see Dex.spriteNames).
  //   urlOf(name)     address of a picture in the game's normal sprite folder
  //   outfitPrefix    start of the address of a picture in the Outfit folder (the part after "Outfit/" is added)
  Dex.spriteList = function (c, urlOf, outfitPrefix) {
    return Dex.spriteNames(c).map((name) => (name.startsWith('Outfit/') ? `${outfitPrefix}${name.slice(7)}.png` : urlOf(name)));
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
  };

  // ---------------------------------------------------------------
  // Name of an icon button: hover with the mouse (the browser shows `title`)
  // or press and hold on a phone (a small label appears above the icon).
  // ---------------------------------------------------------------
  Dex.addPressTip = function (node, text) {
    if (!text) return;
    node.title = text;
    let timer = null;
    let tip = null;
    let longPressed = false;

    const hide = () => {
      if (tip) tip.remove();
      tip = null;
    };
    const show = () => {
      longPressed = true;
      hide();
      tip = Dex.el('div', 'dex-tip', text);
      document.body.appendChild(tip);
      const box = node.getBoundingClientRect();
      const tipBox = tip.getBoundingClientRect();
      const left = Math.min(Math.max(8, box.left + box.width / 2 - tipBox.width / 2), window.innerWidth - tipBox.width - 8);
      tip.style.left = `${left}px`;
      tip.style.top = `${Math.max(8, box.top - tipBox.height - 8)}px`;
      setTimeout(hide, 1800);
    };
    const cancel = () => clearTimeout(timer);

    node.addEventListener('touchstart', () => {
      longPressed = false;
      timer = setTimeout(show, 450);
    }, { passive: true });
    node.addEventListener('touchmove', cancel, { passive: true });
    node.addEventListener('touchcancel', cancel);
    node.addEventListener('touchend', (e) => {
      cancel();
      if (longPressed) {
        e.preventDefault(); // no click after a long press
        setTimeout(() => (longPressed = false), 400);
      }
    });
    node.addEventListener('contextmenu', (e) => {
      if (longPressed) e.preventDefault(); // no "save image" menu
    });
    node.addEventListener('click', (e) => {
      if (longPressed) {
        e.preventDefault();
        e.stopPropagation();
        longPressed = false;
      }
    }, true);
  };

  // Name of the small picture (icon) of a line: imgIcon (or the name when there is none).
  Dex.iconName = function (c) {
    return c.imgIcon || c.name || '';
  };

  // Not out yet AND no version: a character that might or might not come. Such lines are left off the home page, and the
  // Characters / Outfits / Supports pages only show them with the New filter (or Collab / miHoYo, for a collab).
  // With a version (version: '4.8') the line is a sure thing and behaves like any other.
  Dex.isUnconfirmed = function (c) {
    return c.out === false && String(c.version ?? '').trim() === '';
  };

  // The elements of a line as a list: element: 'Pyro' -> ['Pyro'],  element: ['Pyro', 'Hydro'] -> both,  none -> [].
  Dex.elementsOf = function (c) {
    return [].concat(c.element ?? []).map((e) => String(e ?? '').trim()).filter(Boolean);
  };

  // A line that shares ONE picture with another character (the Mannequins) says which half is its own:
  //   spriteSide: 'left'  (or 'right')    spriteSplit: 56  (optional: % from the left where the two meet)
  // The popup then shows the other half grey. null = a normal picture.
  Dex.spriteSide = function (c) {
    return c.spriteSide === 'left' || c.spriteSide === 'right' ? { side: c.spriteSide, split: c.spriteSplit } : null;
  };

  // The small element badge of a line (an <img class="element-icon">), or null when it has no element.
  // With several elements the badge flips through them every second.
  //   pathOf(element)   address of the picture of ONE element (null = none)
  Dex.elementBadge = function (c, pathOf) {
    const list = Dex.elementsOf(c).filter((e) => pathOf(e));
    if (!list.length) return null;
    const badge = Dex.el('img', 'element-icon');
    const show = (e) => {
      badge.src = pathOf(e);
      badge.alt = e;
      if (list.length > 1) badge.title = e;
    };
    show(list[0]);
    if (list.length > 1) {
      let n = 0;
      Dex.startCycle(() => show(list[++n % list.length]), 1000);
    }
    return badge;
  };

  // The big pictures of a line, as written in `imgSprite: ['=', 'Other', 'Outfit/Name']`:
  //   '='       the same name as imgIcon          'Name'         another picture in the normal folder
  //   'Outfit/Name'  a picture in the Outfit folder
  // No imgSprite = just the picture of the icon.
  Dex.spriteNames = function (c) {
    const icon = Dex.iconName(c);
    const list = c.imgSprite == null ? ['='] : [].concat(c.imgSprite);
    return [...new Set(list.map((n) => (String(n).trim() === '=' ? icon : String(n).trim())).filter(Boolean))];
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
    // pictures that do not exist are left out; a Temp picture (assets/Temp) counts as the picture
    Promise.all(urls.map((url) => Dex.resolveImage(url, { temp: true }))).then((found) => {
      if (generation !== cycleGeneration) return; // the list was redrawn meanwhile
      const shown = found.filter(Boolean);
      if (shown.length < 2) return;
      let current = 0;
      img.src = shown[0];
      Dex.startCycle(() => (img.src = shown[++current % shown.length]), Dex.CYCLE_MS);
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
   *   getFallbackPath(c)  URL shown if the icon is missing (every game uses Dex.FALLBACK_ICON)
   *   getSpritePath(c)    URL of the big picture opened on click
   *
   * and may also have:
   *
   *   getElementPath(c)   URL of the element badge (return null for none)
   *   getSpritePaths(c)   LIST of big pictures, if a character has several
   *                       (Dex.spriteList builds it from the line's `imgSprite`)
   *   getLabels(c)        a row of text tags, as { list, item, values }, e.g.
   *                       { list: 'region-list', item: 'region-label', values: c.area }
   *
   * A game with unusual needs can define createImageElement(c) in its config
   * instead; that function then replaces the standard icon completely.
   */
  const fallbackIcon = (config, c) => (config.getFallbackPath ? config.getFallbackPath(c) : Dex.FALLBACK_ICON);

  // `getNeighbours` (optional): returns the list of characters on screen. When given, the popup
  // also steps through THEIR pictures (MC page: next / previous character without closing).
  // Icon framing: lets one character's icon sit closer / further away than the others.
  // Add any of these to a character (all optional, 1 / 0 / 0 = unchanged):
  //   zoom: 1.2    bigger (1.2 = 20% closer)  /  0.9 = smaller (shows more around the face)
  //   iconX: 5     moves the picture to the right (in % of the icon; negative = left)
  //   iconY: -8    moves the picture down (negative = up; use it to bring a face into the middle)
  //   iconFit: 'contain'   show the WHOLE picture inside the square (default 'cover' fills the square and
  //                        crops the edges). Bangboo: put  iconFit: 'contain'  in the page settings to do it for all.
  // Works on every page that shows icons (Characters, Outfits, Bangboo, home page).
  Dex.applyIconFit = function (img, c, defaultFit) {
    const fit = (c && c.iconFit) || defaultFit;
    if (fit) img.style.objectFit = fit;
    const zoom = Number(c && c.zoom) || 1;
    const x = Number(c && c.iconX) || 0;
    const y = Number(c && c.iconY) || 0;
    if (zoom === 1 && !x && !y) return img;
    img.style.transformOrigin = 'center';
    img.style.transform = `translate(${x}%, ${y}%) scale(${zoom})`;
    return img;
  };

  // `withIcons` (Characters page): the popup shows the neighbours as faded side icons. Without it (Main page)
  // the popup shows dots instead.
  Dex.buildCharaIcon = function (c, config, getNeighbours, withIcons = false) {
    if (config.createImageElement) return config.createImageElement(c);

    const container = Dex.el('div', 'char-icon-container');

    const img = Dex.el('img', 'char-icon');
    img.alt = c.name;
    Dex.applyIconFit(img, c);

    img.src = config.getIconPath(c);
    img.onerror = () => {
      // getIconPathAlt (optional): a second place to look before giving up (e.g. the Outfit folder)
      const alt = config.getIconPathAlt && !img.dataset.alt ? config.getIconPathAlt(c) : null;
      if (alt) {
        img.dataset.alt = '1';
        img.src = alt;
        return;
      }
      img.onerror = null; // avoid an endless loop if the fallback is missing too
      img.src = fallbackIcon(config, c);
    };
    container.appendChild(img);

    const badge = config.getElementPath ? Dex.elementBadge(c, (e) => config.getElementPath({ ...c, element: e })) : null; // no element = no badge
    if (badge) container.appendChild(badge);

    const labels = config.getLabels ? config.getLabels(c) : null;
    if (labels && labels.values) {
      const list = Dex.el('div', labels.list);
      labels.values.forEach((text) => list.appendChild(Dex.el('span', labels.item, text)));
      container.appendChild(list);
    }

    container.addEventListener('click', async () => {
      const picturesOf = (x) => [].concat(config.getSpritePaths ? config.getSpritePaths(x) : config.getSpritePath(x));
      // getSpritePathAlt (optional): where to look when the picture is not in the first place (e.g. Outfit folder)
      // (getSpritePathAlt(x, url) gets the address that was not found)
      const resolvedPictures = (x) =>
        config.getSpritePathAlt
          ? Promise.all(picturesOf(x).map((url) => Dex.resolveImage(url).then((found) => found || config.getSpritePathAlt(x, url))))
          : Promise.resolve(picturesOf(x));
      // Pages with the thumbnail gallery popup already step through the outfits of ONE character.
      const neighbours = getNeighbours && (withIcons || !document.getElementById('thumbnailContainer')) ? getNeighbours() : null;
      if (!neighbours || neighbours.length < 2 || !neighbours.includes(c)) {
        const own = await resolvedPictures(c);
        const note = config.popupNote ? config.popupNote(c) : '';
        const side = Dex.spriteSide(c);
        return note || side ? Dex.showPopup([], c.name, { groups: [{ images: own, name: c.name, note, side }] }) : Dex.showPopup(own, c.name);
      }
      // One group per character: several pictures -> arrows + thumbnails, then on to the next character.
      const usable = neighbours.filter((n) => n === c || String(Dex.iconName(n)).trim()); // skip empty placeholder lines
      const groups = await Promise.all(
        usable.map(async (n) => ({
          images: await resolvedPictures(n),
          name: n.name,
          icon: withIcons && config.getIconPath ? config.getIconPath(n) : undefined, // side icons (see sprite-popup.js)
          bg: withIcons ? Dex.rarityGradient(n.rarity) : undefined,
          note: config.popupNote ? config.popupNote(n) : undefined, // small corner note (Main page)
          side: Dex.spriteSide(n), // a picture shared by two characters: only this one's half in colour
        }))
      );
      Dex.showPopup([], c.name, { groups, startGroup: usable.indexOf(c) });
    });
    return container;
  };
})();
