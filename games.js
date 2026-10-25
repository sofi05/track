/* =====================================================================
   games.js — THE list of games. Edit it here, once: the start page (index.html) and the
   "Change game" popup of every page both read it.

   One line per game, in the order you want to see them:
     folder   the game's folder                       name    shown when you hover / for screen readers
     icon     file name inside assets/gameico/ (write the REAL name: 'hna.png' or 'hna.webp'.
              If it is not found, the other extension is tried too)
     group    where it shows on the START page:
                'main'   (default) the big icons
                'other'  under the "Other games" button   (games you play less, not from miHoYo)
                'more'   under the "More" button          (a miHoYo game you stopped playing)
              A button only exists while its group has games.
     change   false = NOT in the "Change game" popup (only on the start page). Default: true.
     bday     true  = the game has a js/bday.js (the start page loads it)
     dim      true  = not released yet (greyed out)

   To change the order: move the line up or down. To drop a game: change its group to 'more'.
   The "All games" button of the Change popup opens the start page with EVERY game (all groups).
   ===================================================================== */
window.HOYO_GAMES = [
  { folder: '00GI', icon: 'gi.webp', name: 'Genshin Impact', bday: true },
  { folder: '01HSR', icon: 'hsr.webp', name: 'Honkai: Star Rail' },
  { folder: '02ZZZ', icon: 'zzz.png', name: 'Zenless Zone Zero' },
  { folder: '03HI3', icon: 'hi3.webp', name: 'Honkai Impact 3rd', bday: true },
  { folder: 'Endfield', icon: 'ae.webp', name: 'Arknights: Endfield', group: 'other', change: false },
  { folder: '03HNA', icon: 'hna.png', name: 'Honkai: Nexus Anima', dim: true },
];

// Helper used by the start page and the Change popup: the <img> tag of a game's icon.
// If the file is not found it tries the other extension (.png <-> .webp) once.
window.hoyoIconTag = function (game, prefix) {
  return `<img src="${prefix}assets/gameico/${game.icon}" alt="${game.name}" title="${game.name}" onerror="hoyoIconRetry(this)" />`;
};
window.hoyoIconRetry = function (img) {
  if (img.dataset.retried) return;
  img.dataset.retried = '1';
  img.src = img.src.replace(/\.(png|webp)$/i, (m, ext) => (ext.toLowerCase() === 'png' ? '.webp' : '.png'));
};
