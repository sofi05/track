const gameConfig = {
  characters: [
    { name: 'Nicole', imgName: '12_01', have: true, rarity: 4 },
    { name: 'Ellen', imgName: '21_01', have: false, rarity: 5},
    { name: 'Jane Doe', imgName: '24_01', have: true, rarity: 5 }, 
    { name: 'Lucy', imgName: '27_01', have: true, rarity: 4},
    { name: 'Astra Yao', imgName: '36_01', have: false, rarity: 5 },
    { name: 'Vivian', imgName: '41_01', have: true, rarity: 5 },
    { name: 'Yixuan', imgName: '44_01', have: false, rarity: 5 },
    { name: 'Pan Yinhu', imgName: '45_01', have: true, rarity: 4 },
    { name: 'Alice', imgName: '46_01', have: false, rarity: 5},
    { name: 'Yuzuha', imgName: '47_01', have: false, rarity: 5 },
    { name: 'Manato', imgName: '51_01', have: true, rarity: 4 },
    { name: 'Shunguan', imgName: '55_01', have: false, rarity: 5 },
    { name: 'Aria', imgName: '57_01', imgName2: ['57_01', '57_01_Form2'], have: false, rarity: 5 },
    { name: 'Aria', imgName: '57_02', have: false, rarity: 5, status: 'new' },
    { name: 'Sunna', imgName: '58_01', have: false, rarity: 5 },
    { name: 'Sunna', imgName: '58_02', have: false, rarity: 5, status: 'new' },
    { name: 'Nangong Yu', imgName: '59_01', have: false, rarity: 5 },
    { name: 'Nangong Yu', imgName: '59_02', have: false, rarity: 5, status: 'new' },
    { name: 'Miyabi', imgName: '13_01', have: false, rarity: 5 },
    { name: 'Velina', imgName: '64_01', have: false, rarity: 5 },
    { name: 'Sigrid', imgName: '66_01', have: false, rarity: 5},
    { name: 'Remielle', imgName: '67_01', have: false, rarity: 5 },
    { name: 'Remielle', imgName: '67_02', imgName2: ['67_02','67_03'], have: false, rarity: 5  },

    
    { name: 'Phoenix', imgName: '1641_01', have: false, rarity: 5, status: 'soon'},
    { name: 'Phoenix', imgName: '1641_02', have: false, rarity: 5, status: 'soon'},
    { name: 'Severian', imgName: '1631_01', have: false, rarity: 5, status: 'soon'},
    // ---------------------------------------------------------------------
    // TEMPLATE: copy a line, remove the // and fill it in.
    //   { name: '', imgName: '', imgName2: '', have: false, rarity: 4, status: 'new' },
    //
    //   Same name = ONE card: to add an outfit to a character, add a line with the same name.
    //   imgName        icon of this outfit            imgName2   extra big picture(s) in the popup (one name or a list)
    //   status         'new' / 'soon' = label         rarity     4 | 5      have   true / false
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

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.png`,
  // List of pictures shown when you click a card (imgName + imgName2)
  getSpritePath: (c) => Dex.imageNames(c).map((name) => `${gameConfig.spritePrefix}${name}.png`),
};
