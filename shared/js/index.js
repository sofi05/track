/* =====================================================================
   index.js — the start page (index.html).

   The games come from games.js (order, icon, group). Views:
     main (default)    the games with group 'main'                + buttons "Other games" / "More" (only if they have games)
     other / more      the games of that group                    + a "Back" button
     all               EVERY game (all groups)                    + a "Back" button   (index.html?all, the Change popup's "All games")
   ===================================================================== */
(function () {
  const games = window.HOYO_GAMES || [];
  const iconsBox = document.getElementById('gameIcons');
  const buttonsBox = document.getElementById('indexButtons');
  const title = document.getElementById('viewTitle');

  const groupOf = (g) => g.group || 'main';
  const VIEWS = {
    main: { title: '', games: () => games.filter((g) => groupOf(g) === 'main') },
    other: { title: 'Other games', games: () => games.filter((g) => groupOf(g) === 'other') },
    more: { title: 'More', games: () => games.filter((g) => groupOf(g) === 'more') },
    all: { title: 'All games', games: () => games },
  };

  function show(view) {
    const v = VIEWS[view] || VIEWS.main;
    iconsBox.innerHTML = v.games()
      .map((g) => `<a href="${g.folder}/000.html"${g.dim ? ' class="is-dim"' : ''}>${hoyoIconTag(g, '')}</a>`)
      .join('');
    title.hidden = !v.title;
    title.textContent = v.title;

    buttonsBox.innerHTML = '';
    const add = (label, target) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'index-btn';
      b.textContent = label;
      b.addEventListener('click', () => show(target));
      buttonsBox.appendChild(b);
    };
    if (view === 'main' || !VIEWS[view]) {
      if (VIEWS.other.games().length) add('Other games', 'other');
      if (VIEWS.more.games().length) add('More', 'more'); // no games in "more" = no button
    } else add('← Back', 'main');
  }

  show(/[?&]all\b/.test(location.search) ? 'all' : 'main');
})();
