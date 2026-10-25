/* =====================================================================
   page.js — the ONE template of the list pages (Characters, Outfits, Supports, Main character).

   A page file of a game is now only this:

     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       <title>GI: Characters</title>
       <script src="../shared/js/page.js" data-kind="chara"></script>
     </head>
     <body></body>
     </html>

   page.js writes everything else (style sheets, the search box, the filter boxes, the picture popup, the
   bottom navigation and the scripts, in the right order). To change something in the layout of ALL
   these pages, change it here, once.

   data-kind      home    Game home page   (new characters / reruns / permanent; game js/chara.js)
                  menu    Menu page        (the buttons come from a JSON list, see below)
                  chara   Characters page  (game js/chara.js + js/chara-page.js)
                  outfit  Outfits page     (game js/fit.js)
                  support Supports page    (Bangboo, ELFs ... game js/sup.js)
                  main    Main character   (game js/mc.js)
                  (outfit pages also load js/mc.js, unless data-nav-hide has "main": its `outfit: true` lines
                   show on the Outfits page behind the MC button)
   data-nav-hide  tabs of the bottom navigation to hide on this page, e.g. "main" (games without a main character)
   data-scripts   more files of the game to load FIRST, e.g. "js/outfit-files.js" (comma separated)
   data-popup="big"        (support pages) popup with arrows + thumbnails instead of one picture
   data-gender-toggle="off"   (main only) no Male / Female switch
   data-scripts-after   files loaded AFTER the navigation script (comma separated)

   home only:   data-logo="../assets/gameico/Logo/hsr.png"  data-logo-alt="Honkai: Star Rail"
                data-logo-white="on"   (logo drawn white)      data-birthdays="on"   (Today's Birthdays + js/bday.js)
                data-layout="soon"     ("coming soon" page of a game that is not out: one list only)
   menu only:   the buttons, written BEFORE page.js as
                <script type="application/json" id="menu-links">[{"label":"Outfits","href":"004F.html"},
                  {"label":"YouTube","href":"https://...","blank":true,"class":"menu-button--youtube"}]<\/script>
                (optional per button: "blank", "class", "id")      data-past="on"  = the "Past Games" popup
   ===================================================================== */
(function () {
  const me = document.currentScript;
  const kind = me.dataset.kind;
  const shared = me.getAttribute('src').replace(/page\.js.*$/, ''); // "../shared/js/"
  const css = shared.replace(/js\/$/, 'css/'); // "../shared/css/"
  const root = shared.replace(/shared\/js\/$/, ''); // "../"  (the main folder: vs.js and games.js live there)

  // popup markup: "big" = arrows + thumbnails (Characters, Outfits); "simple" = one picture (Supports, Main character)
  const POPUPS = {
    big:
      '<div id="spritePopup" class="popup"><div class="popup-content">' +
      '<button id="prevBtn" class="nav-btn">←</button>' +
      '<div class="main-img-wrapper" style="position: relative;"><img id="spritePopupImg" class="popup-img" /><button class="close-btn">✕</button></div>' +
      '<button id="nextBtn" class="nav-btn">→</button></div>' +
      '<div id="thumbnailContainer"></div></div>',
    simple:
      '<div id="spritePopup" class="sprite-popup" style="display:none;"><div class="popup-wrapper">' +
      '<span class="close-btn">✕</span><img id="spritePopupImg" src="" alt="" /></div></div><div id="spriteList"></div>',
  };

  const LIST_TOP = (heading) =>
    `<h1>${heading}</h1><p id="charCount" class="char-count">Total: 0 characters</p>` +
    '<div class="search-filter"><input type="text" id="searchInput" placeholder="Search by name..." /></div>';

  const GENDER_TOGGLE =
    '<div class="gender-toggle"><label class="switch"><input type="checkbox" id="genderToggleBtn" />' +
    '<span class="slider2 round"></span></label><span id="genderLabel"></span></div>';

  // scripts: 'game:x.js' = the game's own js/x.js, 'root:x' = x.js in the main folder (vs.js, games.js), a plain word = shared/js/<word>.js
  const section = (id, title, small) =>
    `<section id="${id}"><h3>${title}${small ? ` <small id="${small}"></small>` : ''}</h3><div id="${id}-slider" class="slider"></div></section>`;

  const KINDS = {
    home: { popup: null, scripts: ['game:chara.js', 'root:vs', 'common', 'phase', 'char-popup', 'countdown', 'home'], css: ['style', 'index', 'change'] },
    menu: { popup: null, scripts: [], css: ['style', 'index', 'change'] },
    chara: {
      top: LIST_TOP('Characters') + '<div id="quickFilters" class="quick-filters"></div><div id="partBar" class="part-toggle"></div>',
      popup: 'big',
      scripts: ['game:chara.js', 'game:chara-page.js', 'common', 'sprite-popup', 'chara-filters', 'chara'],
    },
    outfit: {
      top: LIST_TOP('Outfits') + '<div id="quickFilters" class="quick-filters"></div><div id="partBar" class="part-toggle"></div>',
      popup: 'big',
      scripts: ['game:fit.js', 'common', 'sprite-popup', 'chara-filters', 'fit'], // + js/mc.js when the game has a Main character (see below)
    },
    support: {
      top: LIST_TOP('Characters') + '<div id="quickFilters" class="quick-filters"></div><div id="partBar" class="part-toggle"></div>',
      popup: 'simple', // data-popup="big" = arrows + thumbnails (pictures of one character side by side)
      scripts: ['common', 'sprite-popup', 'chara-filters', 'sup', 'game:sup.js'],
    },
    main: {
      top: '<h1 id="characterName">Characters</h1><p id="charCount" class="char-count">Total: 0 characters</p>',
      gender: true,
      popup: 'simple',
      scripts: ['game:mc.js', 'common', 'sprite-popup', 'mc'],
    },
  };

  const k = KINDS[kind];
  if (!k) {
    document.write(`<p style="color:#f66">page.js: unknown data-kind "${kind}"</p>`);
    return;
  }

  const hide = me.dataset.navHide ? ` data-hide="${me.dataset.navHide}"` : '';
  const withGender = k.gender && me.dataset.genderToggle !== 'off';
  const extra = (me.dataset.scripts || '').split(',').map((s) => s.trim()).filter(Boolean);
  const withMain = kind === 'outfit' && !(me.dataset.navHide || '').split(',').map((x) => x.trim()).includes('main');
  const scripts = extra.concat((withMain ? ['game:mc.js'] : []).concat(k.scripts).map((s) => (s.startsWith('game:') ? 'js/' + s.slice(5) : s.startsWith('root:') ? root + s.slice(5) + '.js' : shared + s + '.js')));

  const cssList = (k.css || ['style', 'change']).slice();
  if (kind === 'home' && me.dataset.birthdays) cssList.splice(1, 0, 'bday'); // style, bday, index, change
  const after = (me.dataset.scriptsAfter || '').split(',').map((x) => x.trim()).filter(Boolean);
  if (kind === 'home' && me.dataset.birthdays) scripts.splice(extra.length, 0, 'js/bday.js', shared + 'bday.js'); // data first, then the code
  if (kind === 'menu' && me.dataset.past) after.push('js/past.js', shared + 'past.js');

  let top = k.top || '';
  if (kind === 'home') {
    const logo = `<div class="logo-container" align="center"><img src="${me.dataset.logo}" alt="${me.dataset.logoAlt || ''}" class="game-logo${me.dataset.logoWhite ? ' is-white' : ''}" /></div>`;
    const soon = me.dataset.layout === 'soon';
    top =
      '<div class="game-page">' +
      logo +
      (soon
        ? '<h5 align="center"> <p>coming soon... <br><img src="../assets/others/mimo-sleep.b230350.png" alt="nothing here yet"></p></h5>' +
          section('new-characters', 'Future Characters')
        : (me.dataset.birthdays
            ? '<section class="birthday-section"><h2>🎉 Today\'s Birthdays</h2><div id="birthday-icons" class="birthday-icons"></div></section>'
            : '') +
          section('new-characters', 'New Characters', 'countdown-newchars') +
          section('reruns', 'Reruns') +
          section('perma', 'Permanent'));
  }
  if (kind === 'menu') {
    const data = document.getElementById('menu-links');
    let links = [];
    try { links = JSON.parse(data.textContent); } catch (e) { console.warn('page.js: menu-links is missing or not valid JSON'); }
    top =
      '<div class="game-page"><h1>Menu</h1><section class="menu-section"><ul class="menu-list" align="center">' +
      links
        .map(
          (l) =>
            `<li><a href="${l.href}"${l.id ? ` id="${l.id}"` : ''} class="menu-button${l.class ? ' ' + l.class : ''}"${l.blank ? ' target="_blank"' : ''}>${l.label}</a></li>`
        )
        .join('') +
      '</ul></section>';
  }

  const html =
    cssList.map((name) => `<link rel="stylesheet" href="${css}${name}.css" />`).join('') +
    '<link rel="icon" type="image/png" href="https://vectorseek.com/wp-content/uploads/2023/08/Hoyoverse-Icon-Logo-Vector.svg-.png">' +
    '</head><body>' +
    top +
    (withGender ? GENDER_TOGGLE : '') +
    (kind === 'home' || kind === 'menu' ? '' : '<div class="char-list" id="charList"></div>') +
    (kind === 'home' || kind === 'menu'
      ? `<nav class="bottom-nav"${hide}></nav><div id="popup-container"></div>` + (me.dataset.past ? '<div id="popup-cont"></div>' : '')
      : `<div id="popup-container"></div><nav class="bottom-nav"${hide}></nav>`) +
    (k.popup ? POPUPS[me.dataset.popup || k.popup] : '') +
    scripts.map((src) => `<script src="${src}"><\/script>`).join('') + // in order
    `<script src="${root}games.js"><\/script>` + // the list of games (start page + Change popup)
    `<script src="${shared}nav.js"><\/script>` + // the navigation needs the page above
    after.map((src) => `<script src="${src}"><\/script>`).join('');

  document.write(html);
})();
