/* =====================================================================
   nav.js — the bottom navigation bar and the "Change game" popup.

   In a page, just write an empty bar and load this script:
       <nav class="bottom-nav"></nav>
       <div id="popup-container"></div>
       <script src="../shared/js/nav.js"></script>

   To hide a tab on one page:  <nav class="bottom-nav" data-hide="main"></nav>
   (tab names: home, characters, menu, main, change)

   To add a game to the switcher, add one line to GAMES below.
   ===================================================================== */
(function () {
  // ---- edit zone ------------------------------------------------
  const GAMES = [
    { folder: '00GI', icon: 'gi.webp', name: 'Genshin Impact' },
    { folder: '01HSR', icon: 'hsr.webp', name: 'Honkai: Star Rail' },
    { folder: '02ZZZ', icon: 'zzz.png', name: 'Zenless Zone Zero' },
    { folder: '03HI3', icon: 'hi3.webp', name: 'Honkai Impact 3rd' },
    { folder: 'Endfield', icon: 'ae.webp', name: 'Arknights: Endfield' },
    { folder: '03HNA', icon: 'hna.webp', name: 'Honkai: Nexus Anima', dim: true }, // dim = not released yet
  ];
  // ---------------------------------------------------------------

  const ICONS = {
    home: '<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
    characters:
      '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M4 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4zm0 4h10v2H4z"/></svg>',
    // Main = star (drawn, so it takes the colour of the bar). To use another icon, paste its <svg> here.
    main: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 2l2.94 6.26 6.86.84-5.06 4.73 1.32 6.8L12 17.27 5.94 20.63l1.32-6.8L2.2 9.1l6.86-.84z"/></svg>',
    // Change = the Hoyo logo (a picture, shown white like the other icons)
    change: '<img src="../assets/others/logo.png" alt="Change" class="nav-icon-image" />',
  };

  const TABS = [
    { key: 'home', href: '000.html', title: 'Home', label: 'Home' },
    { key: 'characters', href: '001.html', title: 'Characters', label: 'Characters', id: 'tab-characters' },
    { key: 'menu', href: '002.html', title: 'Menu', label: 'Menu', id: 'tab-menu' },
    { key: 'main', href: '003.html', title: 'Main', label: 'Main', id: 'tab-main' },
    { key: 'change', href: '#', title: 'Switch Game', label: 'Change', id: 'tab-play' },
  ];

  function renderNav(nav) {
    const hidden = (nav.dataset.hide || '').split(/[\s,]+/);
    nav.innerHTML = TABS.filter((tab) => !hidden.includes(tab.key))
      .map(
        (tab) =>
          `<a href="${tab.href}"${tab.id ? ` id="${tab.id}"` : ''} title="${tab.title}">${ICONS[tab.key]}${tab.label}</a>`
      )
      .join('\n');
  }

  function renderSwitcher(container) {
    const icons = GAMES.map(
      (g) =>
        `<div class="game-icon${g.dim ? ' is-dim' : ''}" data-url="../${g.folder}/000.html">` +
        `<img src="../assets/gameico/${g.icon}" alt="${g.name}" /></div>`
    ).join('');

    container.innerHTML =
      '<div id="game-switcher" class="game-switcher hidden">' +
      '<div class="switcher-content"><h3>Select Game</h3>' +
      `<div class="game-icons">${icons}</div></div></div>`;

    const switcher = container.querySelector('#game-switcher');

    document.getElementById('tab-play')?.addEventListener('click', (e) => {
      e.preventDefault();
      switcher.classList.remove('hidden');
    });

    switcher.addEventListener('click', (e) => {
      if (e.target === switcher) switcher.classList.add('hidden');
    });

    switcher.querySelectorAll('.game-icon').forEach((icon) => {
      icon.addEventListener('click', () => {
        window.location.href = icon.dataset.url;
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav.bottom-nav');
    if (nav) renderNav(nav);

    const container = document.getElementById('popup-container');
    if (container) renderSwitcher(container);
  });
})();
