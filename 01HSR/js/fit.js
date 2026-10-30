const gameConfig = {
  characters: [
    { name: 'March 7th', imgIcon: '1100101', have: true, rarity: 4 },
    { name: 'Firefly', imgIcon: '1131001', have: false, rarity: 5 },
    { name: 'Ruan Mei', imgIcon: '1130301', have: true, rarity: 5 },
    { name: 'Castorice', imgIcon: '1140701', have: false, rarity: 5 },
    { name: 'Sparxie', imgIcon: '1150101', have: false, rarity: 5 },
    { name: 'Evanescia', imgIcon: '1150501', have: false, rarity: 5, status: 'new' },
    { name: 'Hyacine', imgIcon: '1140901', have: false, rarity: 5, status: 'new' },

    { name: 'Aeon ★ Aha', imgIcon: '', have: false, rarity: 5, status: 'soon' },
    // ---------------------------------------------------------------------
    // TEMPLATE: copy a line, remove the // and fill it in.
    // { name: '', imgIcon: '', imgSprite: ['='], have: false, rarity: 5, status: 'soon' },
    // What every field means (and the same-name rule): GUIDE.md > Outfits page.
    // ---------------------------------------------------------------------
  ],

  // Filter buttons of this page (same settings as js/chara-page.js: quick = always visible, parts = Part / Collab buttons)
  page: {
    quick: [['have', 'new']],
    popup: [],
    parts: [],
  },

  // The version this list is updated to (shows as a red "vers." pill under the title)
  lastVersion: '4.6 / soon: 4.7',

  // Where the pictures are. Edit the folders here.
  pathPrefix: "../assets/charaid/StarRail/Outfit/",
  spritePrefix: "../assets/Sprite/StarRail/Outfit/",

  getImgPath: (c) => `${gameConfig.pathPrefix}${Dex.iconName(c)}.png`,
  // List of pictures shown when you click a card (imgSprite)
  getSpritePath: (c) => Dex.spriteNames(c).map((name) => `${gameConfig.spritePrefix}${name}.png`),
};
