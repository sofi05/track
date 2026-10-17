# HoyoDex

A static site that tracks gacha characters (Genshin, Star Rail, ZZZ, Honkai Impact 3rd,
Endfield, Honkai Nexus Anima). No build step: open `index.html`, or publish with GitHub Pages.

## Folders

| Folder | What is in it |
|---|---|
| `index.html`, `style.css` | The main page (game picker + today's birthdays) |
| `00GI`, `01HSR`, `02ZZZ`, `03HI3`, `03HNA`, `Endfield` | One folder per game |
| `shared/js`, `shared/css` | Code and styles used by every game |
| `assets` | Pictures |

## Pages of a game

| File | Page | Script (in `shared/js`) | Game data (in `<game>/js`) |
|---|---|---|---|
| `000.html` | Home: new / reruns / permanent | `home.js` | `chara.js` |
| `001.html` | Characters | `chara.js`, `chara-filters.js` | `chara.js` (list), `chara-page.js` (buttons) |
| `002.html` | Menu | | |
| `003.html` | Main character (Traveler, Trailblazer ...); Honkai Impact has none | `mc.js` | `mc.js` |
| `004F.html` | Outfits | `fit.js` | `fit.js` |
| `004S.html` | Supports (Bangboo, ELFs ...) | `sup.js` | `sup.js` |
| `004ST.html` | Stigmata (Honkai Impact only) | `fit.js` | `stig.js` |

## Shared scripts (`shared/js`)

- `common.js`: small helpers used everywhere (the `Dex` object). Load it first.
- `sprite-popup.js`: the big-picture popup (arrows / swipe / tap the picture / dots to change picture).
- `past.js`: the "Past Games" popup of a menu page; the data is `window.PAST_GAMES` in `<game>/js/past.js`.
- `char-popup.js`, `phase.js`, `countdown.js`, `vs.js`: home page popup, version/phase
  logic, countdown, and the current version of each game (**edit `vs.js` on every update**).
- `nav.js`: the bottom bar and the game switcher. **To add a game, add one line to `GAMES`.**
- `bday.js`: birthdays (each game keeps its list in `<game>/js/bday.js`).

## Characters page buttons

Each game has `<game>/js/chara-page.js`. It decides which buttons are always visible (`quick`),
which filters are behind the Filter button (`popup`), the Part / Collab buttons (`parts`; give buttons the same `group` so pressing one unpresses the other)
and the choices of every filter (`filters`). A character field can hold one value or a list.

## Usual jobs

- **Show an alternative outfit in a character's popup:** add `outfitSprites: ['QinCostumeSea']` to the
  character in `<game>/js/chara.js`. The name is the picture's name in that game's Outfit sprite folder
  (the same name as in `fit.js`). The icon does not change. (Genshin, Star Rail, Zenless, Honkai Impact.)

- **Add a character:** add one line to the list in `<game>/js/chara.js`
  (and `mc.js` / `fit.js` / `sup.js` if it belongs there). Nothing else to change.
- **New game version:** update `shared/js/vs.js`, then the characters' `status` / `have`.
- **Add a game:** copy a game folder, add it to `GAMES` in `nav.js` and a link in `index.html`.
- **Add or remove a filter / part button:** edit `<game>/js/chara-page.js` only.
- **Several pictures on one icon (Main page):** give the character `imgName2: ['a', 'b']`; with `cycleIcons: true` in the game's `js/mc.js` the icon flips between them. Pictures that don't exist are skipped.
- **Several elements on one character:** `element: ['Pyro', 'Hydro']` makes the element badge flip through them (needs `getElementIconPath` in the game's `js/mc.js`).
- **Several outfits for one character (Outfits page):** add another line with the same `name` in `<game>/js/fit.js`. They become one card; its icon flips between the outfits and the popup shows them all.

## Temporary pictures
No picture yet? Put a temporary one in assets/Temp/ with the SAME file name the real picture will have (e.g. 1511.png or .webp). It is used until the real one exists. You can also use `assets/Temp/charaid/` (icons only) or `assets/Temp/Sprite/` (big pictures only).
