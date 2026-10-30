const gameConfig = {
  characters: [
    //SOLO FOLDER
    { name: 'Kiana', imgIcon: '106_04_01', imgSprite: ['601_04_01', '6010', '60113', '6115'], have: false, status: 'new' },
    { name: 'Kiana', imgIcon: '106_04_01', imgSprite: ['60105_04_02', '60101_02_01'], have: true },

    { name: 'Bronya', imgIcon: '311_04_01', imgSprite: ['603'], have: false },
    { name: 'Bronya', imgIcon: '311_04_01', imgSprite: ['6315_04_04'], have: true },

    { name: 'Himeko', imgIcon: '402_04_01', imgSprite: ['604_04_01', '6040', '6041'], have: false },
    
    { name: 'FuHua', imgIcon: '612_04_01', imgSprite: ['606'], have: false, status: 'soon' },

    { name: 'Durandal', imgIcon: '803_04_02', imgSprite: ['608'], have: false },
    
    { name: '"Lantern"', imgIcon: '20601_04_01', imgSprite: ['6206'], have: false, p: 2 },

    { name: 'Elysia', imgIcon: '21001_04_01', imgSprite: ['622', '621'], have: false },

    { name: 'Mobius', imgIcon: '2301_04_02', imgSprite: ['623'], have: false },
    { name: 'Mobius', imgIcon: '2301_04_02', imgSprite: ['62301_04_02'], have: true },

    { name: 'Natasha', imgIcon: '2401_04_02', imgSprite: ['624'], have: false },
    
    { name: 'Carole', imgIcon: '2501_03_01', imgSprite: ['625'], have: false },
    
    { name: 'Pardofelis', imgIcon: '2601_04_02', imgSprite: ['626'], have: false },

    { name: 'Aponia', imgIcon: '2701_04_01', imgSprite: ['627'], have: false },
    
    { name: 'Eden', imgIcon: '2801_04_01', imgSprite: ['628'], have: false },

    { name: 'Griseo', imgIcon: '2901_04_01', imgSprite: ['629'], have: false },

    { name: 'Vill-V', imgIcon: '3001_04_01', imgSprite: ['630'], have: false, p: 2 },

    { name: 'Sushang', imgIcon: '3101_04_02', imgSprite: ['6310'], have: false },

    { name: 'Ai Hyperion', imgIcon: '3201_04_01', imgSprite: ['632'], have: false },

    { name: 'Susannah', imgIcon: '3301_04_01', imgSprite: ['633'], have: false },

    { name: 'Schariac', imgIcon: '3401_04_01', imgSprite: ['634'], have: false },

    { name: 'PROMETHEUS', imgIcon: '3501_04_02', imgSprite: ['635'], have: false },

    { name: 'Shigure Kira', imgIcon: '3601_04_01', imgSprite: ['636'], have: false },

    { name: 'Sirin', imgIcon: '3701_04_02', imgSprite: ['637'], have: false },

    { name: 'Seele', imgIcon: '712_04_03', imgSprite: ['6071'], have: false },
    { name: 'Seele', imgIcon: '712_04_03', imgSprite: ['60713_04_02', '60711_04_01'], have: true },
    
    { name: 'Rita', imgIcon: '706_04_02', imgSprite: ['6070'], have: false },
    { name: 'Rita', imgIcon: '706_04_02', imgSprite: ['60705_04_03'], have: true },

    { name: 'Helia', imgIcon: '20402_04_01', imgSprite: ['6204'], have: false, p: 2 },

    { name: 'Liliya', imgIcon: '421_04_03', imgSprite: ['60421'], have: false },

    { name: 'Rozalia', imgIcon: '422_04_03', imgSprite: ['60422'], have: false },
    
    { name: 'Coralie', imgIcon: '20302_04_01', imgSprite: ['62030'], have: false, p: 2 },

    { name: 'Kallen', imgIcon: '114_04_01', imgSprite: ['60111', '60112', '60114'], have: false },

    { name: 'Mei', imgIcon: '206_04_01', imgSprite: ['602_04_01', '6020', '6207_04_01'], have: false, status: 'new' },

    { name: 'Sakura', imgIcon: '211_03_01', imgSprite: ['6021'], have: false },

    { name: 'Senadina', imgIcon: '20201_04_01', imgSprite: ['6202'], have: false, p: 2 },

    { name: 'Songque', imgIcon: '20701_04_01', imgSprite: ['6207'], have: false },
    
    { name: 'Thelema', imgIcon: '20501_04_02', imgSprite: ['6205'], have: false, p: 2 },
    
    { name: 'Theresa', imgIcon: '501_04_05', imgSprite: ['605'], have: false },
    { name: 'Theresa', imgIcon: '501_04_05', imgSprite: ['60501_03_01'], have: true },

    { name: 'Sparkle', imgIcon: '20901_04_01', imgSprite: ['620901_04_01'], have: false, p: 2, collab: true, collabStatus: ['mhy'] },
    
    { name: 'Vita', imgIcon: '20801_04_02', imgSprite: ['620801'], have: false, p: 2, status: 'new' },

    { name: 'Asuka', imgIcon: '901_04_01', imgSprite: ['60901_04_01'], have: false, p: 2, collab: true, collabStatus: ['solo'] },
    
    // for 9.1 theres clothes for Vita / Kiana /Mei (all part 2)

    // ---------------------------------------------------------------------
    // TEMPLATE: copy a line, remove the // and fill it in.
    // { name: '', imgIcon: '', imgSprite: ['='], have: false, p: 2, status: 'new' },
    // What every field means (and the same-name rule): GUIDE.md > Outfits page.
    // ---------------------------------------------------------------------
  ],

  // Filter buttons of this page (same settings as js/chara-page.js: quick = always visible, parts = Part / Collab buttons)
  page: {
    quick: [['new',]],
    popup: [],
    parts: [
      { label: 'P1', group: 'part', field: 'p', value: '1' },
      { label: 'P2', group: 'part', field: 'p', value: '2' },
    ],
  },

  // The version this list is updated to (shows as a red "vers." pill under the title)
  lastVersion: '9.1 / soon: 9.2',

  // Where the pictures are. Edit the folders here.
  pathPrefix: "../assets/charaid/HI3/Outfit/",
  spritePrefix: "../assets/Sprite/HI3/Outfit/",

  getImgPath: (c) => `${gameConfig.pathPrefix}${Dex.iconName(c)}.png`,
  // Pictures shown when you click a card: <spritePrefix>/<spriteFolder>/<each of imgSprite>.png
  getSpritePath: (c) => Dex.expandPictures(Dex.spriteNames(c), window.OUTFIT_FILES).map((name) => `${gameConfig.spritePrefix}${name}.png`),
};
