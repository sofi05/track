const gameConfig = {
  characters: [
    { name: 'Nicole', imgIcon: '12_01', have: true, rarity: 4 },
    { name: 'Ellen', imgIcon: '21_01', have: false, rarity: 5 },
    { name: 'Jane Doe', imgIcon: '24_01', have: true, rarity: 5 },
    { name: 'Lucy', imgIcon: '27_01', have: true, rarity: 4 },
    { name: 'Astra Yao', imgIcon: '36_01', have: false, rarity: 5 },
    { name: 'Vivian', imgIcon: '41_01', have: true, rarity: 5 },
    { name: 'Yixuan', imgIcon: '44_01', have: false, rarity: 5 },
    { name: 'Pan Yinhu', imgIcon: '45_01', have: true, rarity: 4 },
    { name: 'Alice', imgIcon: '46_01', have: false, rarity: 5 },
    { name: 'Yuzuha', imgIcon: '47_01', have: false, rarity: 5 },
    { name: 'Manato', imgIcon: '51_01', have: true, rarity: 4 },
    { name: 'Shunguan', imgIcon: '55_01', have: false, rarity: 5 },
    { name: 'Aria', imgIcon: '57_01', imgSprite: ['=', '57_01_Form2'], have: false, rarity: 5 },
    { name: 'Aria', imgIcon: '57_02', have: true, rarity: 5, status: 'new' },
    { name: 'Sunna', imgIcon: '58_01', have: false, rarity: 5 },
    { name: 'Sunna', imgIcon: '58_02', have: false, rarity: 5, status: 'new' },
    { name: 'Nangong Yu', imgIcon: '59_01', have: false, rarity: 5 },
    { name: 'Nangong Yu', imgIcon: '59_02', have: true, rarity: 5, status: 'new' },
    { name: 'Miyabi', imgIcon: '13_01', have: false, rarity: 5 },
    { name: 'Velina', imgIcon: '64_01', have: false, rarity: 5 },
    { name: 'Sigrid', imgIcon: '66_01', have: false, rarity: 5 },
    { name: 'Remielle', imgIcon: '67_01', have: false, rarity: 5 },
    { name: 'Remielle', imgIcon: '67_02', imgSprite: ['=', '67_03'], have: false, rarity: 5 },

    
    { name: 'Phoenix', imgIcon: '1641_01', have: false, rarity: 5, status: 'soon' },
    { name: 'Phoenix', imgIcon: '1641_02', have: false, rarity: 5, status: 'soon' },
    { name: 'Severian', imgIcon: '1631_01', have: false, rarity: 5, status: 'soon' },
    // ---------------------------------------------------------------------
    // TEMPLATE: copy a line, remove the // and fill it in.
    // { name: '', imgIcon: '', imgSprite: ['='], have: false, rarity: 4, status: 'new' },
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
  lastVersion: '3.2',

  // Where the pictures are. Edit the folders here.
  pathPrefix: "../assets/charaid/Zenless/Outfit/IconRoleCrop",
  spritePrefix: "../assets/Sprite/Zenless/Outfit/IconRole",

  getImgPath: (c) => `${gameConfig.pathPrefix}${Dex.iconName(c)}.png`,
  // List of pictures shown when you click a card (imgSprite)
  getSpritePath: (c) => Dex.spriteNames(c).map((name) => `${gameConfig.spritePrefix}${name}.png`),
};
