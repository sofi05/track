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

**One template for the pages.** `000`, `001`, `002`, `003`, `004F` and `004S` are only a few lines: a `<title>` and
`<script src="../shared/js/page.js" data-kind="chara">` (kinds: `chara`, `outfit`, `support`, `main`).
`shared/js/page.js` writes the rest (search box, filter boxes, popup, navigation, scripts). To change the layout of
all of them, edit `page.js` once. Options on that script tag: `data-nav-hide="main"` (games without a main character),
`data-scripts="js/outfit-files.js"` (extra files of the game, loaded first), `data-gender-toggle="off"` (main page only). The home page (`data-kind="home"`) takes the logo and `data-birthdays="on"`; the menu page (`data-kind="menu"`) takes its buttons from a small list written in the page (see the top of `shared/js/page.js`).
New game: copy another game's pages, change the `<title>` and the settings on the page.js line, add one line to `GAMES` in `shared/js/nav.js` (this also puts the game on the main page `index.html`; add `bday: true` there if the game has a `js/bday.js`), and add the game's `js` files.
The only page not on the template is `03HI3/004S.html` (ELFs): it still has the old filter popup.

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
which filters are in the tab row under the buttons (`popup`: Element, World ...), the Part / Collab buttons (`parts`; give buttons the same `group` so pressing one unpresses the other)
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
- **Icon too close / too far:** add `zoom: 1.2` (bigger, 0.9 = smaller), `iconX: 5` (move right) and / or `iconY: -8` (move up) to that character's line. Works on every page with icons.
- **Short picture lists (HI3 outfits):** `spriteImages: ['606', 'Ooh_Summer']` = every picture in the Outfit sprite folder whose name starts with `606`, plus `Ooh_Summer`. After adding pictures, run the sprite list script (`tools/hi3outfit.bat`, or `py tools\list-sprites.py`): it rewrites `03HI3/js/outfit-files.js`, then push that file too.
- **Several outfits for one character (Outfits page):** add another line with the same `name` in `<game>/js/fit.js`. They become one card; its icon flips between the outfits and the popup shows them all.

## Temporary pictures
No picture yet? Put a temporary one in assets/Temp/ with the SAME file name the real picture will have (e.g. 1511.png or .webp). It is used until the real one exists. You can also use `assets/Temp/charaid/` (icons only) or `assets/Temp/Sprite/` (big pictures only).

## Collab and guest characters (every game)
- `collab: true` on a character or an outfit: the page gets a **Collab** button by itself (Characters and Outfit pages; nothing to add in the page settings).
- `collabOnly: true` (together with `collab: true`): shown ONLY while the Collab button is pressed. If a character has several outfits (same name), the card is hidden only when all of them are `collabOnly`.
- `status: 'guest'`: a purple GUEST label like NEW / SOON. A guest can't be obtained, so Have / Don't filters skip it.
