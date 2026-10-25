# GUIDE — how to write the lines

This file explains the lines you write in each game's `js/*.js` files. It is filled page by page: **Characters**, **Outfits**, **Supports**, **Main** and the **versions (`vs.js`)** are here.

Every list line is one character: `{ field: value, field: value },`. The order of the fields does not matter
to the site (it is only for your eyes). Delete the fields you do not need.

---

## Characters page — `<game>/js/chara.js`

### Templates (copy one line, remove the `//`)

```javascript
// Genshin
{ name: '', imgIcon: '', imgSprite: ['='], element: '', gender: '', rarity: , area: [''], have: false, status: '', version: '', want: , perma: true, collab: true, collabStatus: [''], out: false, ph:  },

// Star Rail
{ name: '', imgIcon: '', imgSprite: ['='], element: '', gender: '', rarity: , area: [''], role: '', have: false, status: '', version: '', want: , perma: true, collab: true, collabStatus: [''], out: false, ph:  },

// Zenless
{ name: '', imgIcon: '', imgSprite: ['='], element: '', filterElement: '', gender: '', rarity: , area: [''], have: false, status: '', version: '', want: , perma: true, collab: true, collabStatus: [''], out: false, ph:  },

// Honkai Impact 3rd
{ name: '', imgIcon: '', imgSprite: ['='], element: '', gender: '', rarity: , area: [''], role: '', have: false, status: '', version: '', want: , perma: true, collab: true, collabStatus: [''], out: false, p:  },

// Nexus Anima
{ name: '', imgIcon: '', element: '', gender: '', rarity: , have: false, status: '', version: '', want: , perma: true, collab: true, collabStatus: [''], out: false, ph:  },

// Endfield
{ name: '', imgIcon: '', element: '', gender: '', rarity: , area: [''], have: false, status: '', version: '', want: , perma: true, collab: true, collabStatus: [''], out: false, ph:  },
```

Not every game uses every field. `area`, `role`, `imgSprite` and `gender` only do something where the game's
`js/chara-page.js` has the filter (and, for `area`, `getLabels` in `chara.js`): check before you add one to a game
that does not have it yet.

### What every field means

| Field | What it does |
|---|---|
| `name` | Name shown on the card. **Needed.** |
| `imgIcon` | Name of the small picture, when it is not the same as `name` (Jean = `'Qin'`). Without it, `name` is used. |
| `imgSprite` | The big pictures of the popup, as a list. `'='` = the same name as `imgIcon`. Another name = another picture in the normal sprite folder. `'Outfit/Name'` = a picture in the game's Outfit sprite folder (the game's own prefix, like `UI_Costume_`, is added for you). Without `imgSprite` only the picture of `imgIcon` shows. Example: `['=', 'Outfit/QinCostumeSea']`. |
| `spriteSide` | (Characters page) when ONE picture shows two characters (the Genshin Mannequins): `'left'` or `'right'` = which of the two this line is. The popup keeps that one in colour and shows the other grey. `spriteSplit: 56` (optional) = how far from the left (in %) the two meet; change it if the grey cuts through an arm or a skirt. |
| `element` | Element shown on the icon. |
| `filterElement` | (Zenless) the element the Filter uses when it is different from the icon's element. |
| `gender` | `'m'` or `'f'`. |
| `rarity` | `4` or `5` (Endfield also `6`; Honkai Impact `3` / `4` / `5` = B / A / S). |
| `area` | A **list**, a character can have several: region (Genshin), world (Star Rail), district (Zenless), organisation (Endfield). |
| `role` | Star Rail: path. Honkai Impact: spec. |
| `have` | `true` = you have it, `false` = you do not. |
| `status` | `'new'` / `'soon'` = label + shown on the home page. `'available'` = rerun. `'guest'` = GUEST label, skipped by Have / Don't. |
| `version` | Version of the banner (`'7.1'`). Also used for the countdown. |
| `want` | `1` = ★, `2` = ☆ (marker on the home page). Works in every game. |
| `perma` | `true` = permanent banner (own row on the home page). |
| `collab` | `true` = collab character: pictures come from the `Collab` folder and the page gets a **Collab** button. |
| `collabStatus` | (with `collab: true`) a list: `'solo'` = the character only shows while the **Collab** button is pressed. `'mhy'` = the collab is from miHoYo too: a small **miHoYo** button appears next to Collab, only when some collabs are miHoYo and some are not (it shows while Collab is pressed). Pressing it shows only the miHoYo ones and un-presses Collab. Example: `collabStatus: ['mhy', 'solo']`. |
| `out` | `false` = not out yet (greyed out, no label). While a filter is on it is hidden, except with the **New** filter or with **Collab / miHoYo** pressed. |
| `ph` | Banner **phase** of the version (`1`, `2`). Not used by Honkai Impact. |
| `p` | The story **part** (Honkai Impact today; any game later). Write it only from part 2 on: a character **without** `p` is part 1 (once at least one character has `p`). The popup says "Part 2" and the Part 1 / Part 2 buttons use it. |

### Filter buttons (all pages)

- **Keep filters** off: picking a filter in another category clears the others. On: they add up (5★ + Female + Pyro).
- **+ button** (end of the button row, Characters pages): opens the filters below it (Element / Path / World ... and Keep filters). It closes when you click anywhere else, unless Keep filters is on. A dot on it means a filter inside is selected. **Keep filters** and **Reset** sit at the end of the Collab / Part row (after a | line), so they are always in reach.
- **Reset** clears every filter and also turns **Keep filters** off.
- A filter option can have `short: 'SS'`: the button shows the short text, the full `label` shows when you hover (or hold on a phone).
  Zenless districts use it. An `icon` wins over `short`. Other games are not affected.

### Icon framing (any game, any page with icons)

If one icon sits too close or too far, add to that line:

| Field | Effect |
|---|---|
| `zoom: 1.2` | bigger (1.2 = 20% closer); `0.9` = smaller (shows more around the face) |
| `iconX: 5` | moves the picture to the right (in % of the icon; negative = left) |
| `iconY: -8` | moves the picture down (negative = up; use it to bring a face into the middle) |
| `iconFit: 'contain'` | show the WHOLE picture inside the square (default `'cover'` fills the square and crops the edges) |

### Where the small filter pictures live — `assets/others/`

One folder per kind, and the game is the first part of the file name: `Element/GI_Pyro.png`, `Element/HSR_IconAttributeFire.png`,
`Rank/HI3_BattleRating_S.png`, `Role/HSR_Path_Harmony.png` (Star Rail path / world, Honkai Impact spec),
`Area/GI_UI_ChapterIcon_Liyue.png` (Genshin region, Endfield organisation, Zenless district).
Prefixes: `GI` Genshin, `HSR` Star Rail, `ZZZ` Zenless, `HI3` Honkai Impact, `AE` Endfield.
Files that belong to no game (`logo.png`, the unknown icon, the loading picture) stay in `others/`.
To change an icon, replace the file (same name) or change the `icon:` path in the game's `js/chara-page.js`.

### No picture yet?

Put a temporary one in `assets/Temp/` with the SAME file name the real picture will have (for example `1511.png`
or `.webp`). It is used until the real one exists.

### Values

- **Genshin** — `element`: Anemo | Hydro | Geo | Dendro | Pyro | Electro | Cryo.
  `area`: mond | liy | ina | sum | font | nat | snez | unk | khae | nod | cel | bey.
- **Star Rail** — `element`: fire | ice | imaginary | physical | quantum | thunder | wind.
  `role` (path): prese | hunt | eru | nihi | dest | harm | abun | reme | ela.
  `area` (world): ae | ot | hss | JVI | txl | plana | pena | amp | astro | IPC | SH
  (how to choose it: the notes at the bottom of `01HSR/js/chara.js`).
- **Zenless** — `element`: Electric | Physical ⇄ HonedEdge | Fire | Ether ⇄ AuricInk | Frost ⇄ Ice | Wind | Lumiflux.
  `area` (district): SS (Sixth Street) | TQ (Throne Quarter) | OE (Old Eridu) | LS (Lumina Square) | OR (Outer Ring) |
  BSCS (Brant Street Construction Site) | WP (Waifei Peninsula) | Ros (Roscaelifer) | NEPS (New Eridu Public Security) |
  RP (Random Play).
- **Honkai Impact 3rd** — `element`: IMG | SD | PSY | MECH | BIO | QUA. `role` (spec): WoD | LoA | WS | GoI | RoO.
  `p` (part): 1 | 2. A character with `collab: true` takes its pictures from the `Collab` folder.
- **Endfield** — `element`: Electric | Physical | Heat | Cryo | Nature.
  `area` (organisation): Hongshan | EndIndustries | Rhodes | UWST | TGCC | OrderSO | Cabal | Hannabit | Sesqa.
- **Nexus Anima** — pictures are temporary until launch (see the note at the top of its `chara.js`).

### When you get a character

- `have: false` → keep `status`, `version`, `want`, `perma`, `out`.
- `have: true` → those can go; usually only `collab`, `collabStatus` and `ph` (Honkai Impact: `p`) stay (when they are `true` / needed).

---

## Outfits page — `<game>/js/fit.js`

One line = one outfit. **Same `name` = ONE card**: to add an outfit to a character, add another line with the same name.

```javascript
{ name: '', imgIcon: '', imgSprite: ['='], have: false, rarity: 4, status: 'new' },
```

| Field | What it does |
|---|---|
| `name` | Name of the character. The same name on several lines = one card with all those pictures. |
| `imgIcon` | Icon of this outfit (the game's Outfit icon folder). |
| `imgSprite` | The big pictures of the popup, as a list. `'='` = the same name as `imgIcon`. |
| `rarity` | `4` or `5`. |
| `gender` | `'m'` / `'f'`, only where the page has the Gender filter (Genshin). |
| `have` | `true` / `false`. |
| `status` | `'new'` / `'soon'` = label. |
| `collab`, `collabStatus` | Same as on the Characters page. |
| `p` | Honkai Impact only: story part (2 from part 2 on; no `p` = part 1). |

- **Filters on this page look at every outfit on its own**, and the card is built from the ones that pass.
  Aria with two outfits (one you have): no filter = one merged card; **Have** = only the outfit you have;
  **Don't** = only the other one. Outfits are merged only when the filter lets them through together.
- **Have pill:** in a merged card, the popup shows a dark-green `HAVE` pill in the corner of the pictures of the
  outfits you have. A card with a single outfit has no pill.
- **Temp pictures:** a merged card flips through all its icons, Temp ones (`assets/Temp`) included.
- **Main chara button:** a line on the Main page (`js/mc.js`) with `outfit: true` also shows here (one card per line, never merged, with its gender), behind the
  small **Main chara** button (hidden until you press it).
- **Collab button:** appears by itself when a line has `collab: true`.
- `page` (inside the file) = which filter buttons the page has. `lastVersion` = the red "vers." pill under the title.
- Folders of the pictures: `pathPrefix` / `spritePrefix` in the same file.

---

## Supports page — `<game>/js/sup.js` (Bangboo, ELFs ...)

```javascript
{ name: '', imgIcon: '', have: false, rarity: '4' },                      // Zenless (Bangboo)
{ name: '', imgIcon: '', imgSprite: ['='], have: false, element: '', rarity: '4', p: 2 },   // Honkai Impact (ELFs / Astral Op)
```

- **Zenless:** the pictures are numbered in list order (`BangbooGarageRole01`, 02 ...). The list is NOT where you
  write `imgIcon`: it is added for you. If a number does not exist in the files, add it to `MISSING_NUMBERS`
  (bottom of the file) so the list stays in order.
- **Honkai Impact:** the ELFs are part 1; Astral Op characters have `p: 2` and the Part 1 / Part 2 buttons
  use it. `imgSprite` works like everywhere else (`'='` = same as `imgIcon`).
- `lastVersion` = the version the list is updated to (red pill). Change it when you update the list.

---

## Main page — `<game>/js/mc.js`

The Traveler / Trailblazer / ... (the protagonists). **One line = one card**, one card per line, even for outfits you
cannot get. The fields are the same as on the Characters page.

```javascript
// Genshin (several elements are allowed)
{ name: '', imgIcon: '', imgSprite: ['='], element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: '', rarity: 5, have: false, status: '', outfit: true },
// Star Rail
{ name: '', imgIcon: '', imgSprite: ['='], element: '', gender: '', rarity: 5, role: '', have: false, status: '' },
// Zenless
{ name: '', imgIcon: '', imgSprite: ['='], gender: '', rarity: 5, have: false, status: '', outfit: true },
```

- **Pages:** lines with different names (Lumine / Aether) = one page per gender, the switch (the only button) changes
  the page. The name on top is the name of that page. **Female** page first.
- **A neutral name** (all lines have the SAME name, like Endfield's Endministrator) = ONE page, no switch.
- `outfit: true` = the picture is in the game's Outfit folder, and the line also shows on the **Outfits** page behind the
  **Main chara** button.
- `element` can be a **list** (`element: ['Pyro', 'Hydro']`): the badge on the icon flips through the elements, on the home page, the Characters page, Supports and Main. The Element filter finds the line under each of its elements.
- **false:** a dark-red `FALSE` pill in the corner of the popup picture when `have: false`.
- Zenless: if the picture is not in the folder the line says, the other folder is tried automatically.

---

## Versions and colours — `vs.js` (main folder)

One block per game, up to three versions:

```javascript
ZenlessZone: {
  version: '3.2',  p1: '2026-09-09T00:00:00', p2: '2026-09-30T19:00:00',   // the version you started from + its phases
  date1vs: '3.3',  date1: '2026-10-21T00:00:00', date1p2: '2026-11-11T19:00:00', // the next version, when it starts, when its phase 2 starts
  date2vs: '',     date2: '', date2p2: '',                                       // the one after
},
```

- A version is **live** once its start date has passed: `version` first, then `date1` / `date2` take over by themselves,
  even if you have not edited the file yet.
- On the home page the characters of the live version get a coloured outline by their `ph` (phase):
  the colour says the state: running (`phase-active`), not started (yellow-green, `phase-countdown`), ended (grey, `phase-ended`). Colours are in `shared/css/index.css`.
  A version that has not started yet (3.3 before Oct 21) has no outline.
- A phase 1 character of the next version has no `p1` date of its own: it starts when the version starts (`date1`).
- When a version is over, move `date1vs` into `version`, and the dates up one slot, at your own pace: the site works
  either way.

---

## Home and menu pages — `<game>/000.html` and `002.html`

These two files are tiny: one `<script src="../shared/js/page.js" data-kind="...">` line. Everything else is built by
`shared/js/page.js` (one template for every game).

### Home (`data-kind="home"`, 000.html)

The rows are made from the game's `js/chara.js`; nothing to write on the page itself:

| Row | Which characters |
|---|---|
| New Characters | `have: false` and `status: 'new'` or `'soon'`, oldest version first. |
| Reruns | `have: false` and `status: 'available'` (not `perma`). |
| Permanent | `perma: true`. |

- `out: false` = not out yet, greyed out and not counted in the total. `want` adds ★ / ☆ to the name.
  - **With a `version`** (`version: '4.8'`): a sure thing. It shows on this page and in the filters like any other character.
  - **Without a version** (might never come): not on this page at all. On the Characters / Outfits / Supports pages it only
    shows with the **New** filter (or **Collab** / **miHoYo** when the line is `collab: true`).
- The coloured outline and the "Next in ..." countdown come from `vs.js` (main folder) (section **Versions and colours** above).
- Options on the script line: `data-logo` / `data-logo-alt` / `data-logo-white="on"` (the game logo),
  `data-birthdays="on"` (Today's Birthdays; needs `js/bday.js`), `data-layout="soon"` (a game that is not out yet: one list only).

### Menu (`data-kind="menu"`, 002.html)

The buttons are a small list written **before** the `page.js` line:

```html
<script type="application/json" id="menu-links">
[
  {"label": "Outfits", "href": "004F.html"},
  {"label": "YouTube", "href": "https://...", "blank": true, "class": "menu-button--youtube"}
]
</script>
```

`blank: true` opens a new tab. `class` and `id` are optional. `data-past="on"` adds the **Past Games** popup.

### The other pages (one script line each)

`data-kind="chara"` (001), `"main"` (003), `"outfit"` (004F), `"support"` (004S).
`data-nav-hide="main"` hides the Main tab of the bottom navigation (a game without a main character).
`data-popup="big"` on a support page = arrows + thumbnails in the popup.

### The list of games — `games.js` (main folder)

The start page (`index.html`) and the **Change** popup both read this one list. One line per game, in the order you want:

```javascript
{ folder: '01HSR', icon: 'hsr.webp', name: 'Honkai: Star Rail', group: 'main', change: true, bday: false, dim: false },
```

| Field | What it does |
|---|---|
| `folder` | The game's folder. |
| `icon` | File name inside `assets/gameico/`. Write the real name (`hna.png` or `hna.webp`); if it is not found the other extension is tried. |
| `name` | Shown when you hover the icon. |
| `group` | Where it shows on the start page: `'main'` (default) = the big icons. `'other'` = under the **Other games** button (games you play less, not from miHoYo). `'more'` = under the **More** button (a miHoYo game you stopped playing). A button only exists while its group has games. |
| `change` | `false` = not in the Change popup (only on the start page). Default `true`. |
| `bday` | `true` = the game has `js/bday.js` (the start page loads it). |
| `dim` | `true` = not released yet (greyed out). |

- **Order:** move the line up or down.
- **Change popup:** it has an **All games** button that opens the start page with EVERY game of every group (`index.html?all`);
  there a **Back** button returns to the normal start page.
- **Adding a game:** copy a game folder, then add one line here.
