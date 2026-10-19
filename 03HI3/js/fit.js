const gameConfig = {
  characters: [
    //SOLO FOLDER
    { name: 'Kiana', imgName: '106_04_01', have: false, part: '1', spriteImages: ['601_04_01', '6010', '60113', '6115_04_01'], },

    { name: 'Bronya', imgName: '311_04_01', have: false, part: '1', spriteImages: ['603','6315_04_04'], },

    { name: 'Himeko', imgName: '402_04_01', have: false, part: '1', spriteImages: ['604_04_01', '6040', '6041'], },
    
    { name: 'FuHua', imgName: '612_04_01', have: false, part: '1', spriteImages: ['606'], },

    { name: 'Durandal', imgName: '803_04_02', have: false, part: '1', spriteImages: ['608'], },
    
    { name: '"Lantern"', imgName: '20601_04_01', have: false, part: '2', spriteImages: ['6206'], },

    { name: 'Elysia', imgName: '21001_04_01', have: false, part: '1', spriteImages: ['622', '621'], },

    { name: 'Mobius', imgName: '2301_04_02', have: false, part: '1', spriteImages: ['623'], },

    { name: 'Natasha', imgName: '2401_04_02', have: false, part: '1', spriteImages: ['624'], },
    
    { name: 'Carole', imgName: '2501_03_01', have: false, part: '1', spriteImages: ['625'], },
    
    { name: 'Pardofelis', imgName: '2601_04_02', have: false, part: '1', spriteImages: ['626'], },

    { name: 'Aponia', imgName: '2701_04_01', have: false, part: '1', spriteImages: ['627'], },
    
    { name: 'Eden', imgName: '2801_04_01',have: false, part: '1', spriteImages: ['628'], },

    { name: 'Griseo', imgName: '2901_04_01', have: false, part: '1', spriteImages: ['629'], },

    { name: 'Vill-V', imgName: '3001_04_01', have: false, part: '2', spriteImages: ['630'], },

    { name: 'Sushang', imgName: '3101_04_02', have: false, part: '1', spriteImages: ['6310'], },

    { name: 'Ai Hyperion', imgName: '3201_04_01', have: false, part: '1', spriteImages: ['632'] },

    { name: 'Susannah', imgName: '3301_04_01', have: false, part: '1', spriteImages: ['633'], },

    { name: 'Schariac', imgName: '3401_04_01', have: false, part: '1', spriteImages: ['634'], },

    { name: 'PROMETHEUS', imgName: '3501_04_02', have: false, part: '1', spriteImages: ['635'], },

    { name: 'Shigure Kira', imgName: '3601_04_01', have: false, part: '1', spriteImages: ['636'], },

    { name: 'Sirin', imgName: '3701_04_02', have: false, part: '1', spriteImages: ['637'], },

    { name: 'Seele', imgName: '712_04_03', have: false, part: '1', spriteImages: ['6071'], },
    
    { name: 'Rita', imgName: '706_04_02', have: false, part: '1', spriteImages: ['6070'], },

    { name: 'Helia', imgName: '20402_04_01', have: false, part: '2', spriteImages: ['6204'], },

    { name: 'Liliya', imgName: '421_04_03', have: false, part: '1', spriteImages: ['60421'], },

    { name: 'Rozalia', imgName: '422_04_03', have: false, part: '1', spriteImages: ['60422'], },
    
    { name: 'Coralie', imgName: '20302_04_01', have: false, part: '2', spriteImages: ['62030'], },

    { name: 'Kallen', imgName: '114_04_01', have: false, part: '1', spriteImages: ['60111', '60112', '60114'], },

    { name: 'Mei', imgName: '206_04_01', have: false, part: '1', spriteImages: ['602_04_01', '6020'], },

    { name: 'Sakura', imgName: '211_03_01', have: false, part: '1', spriteImages: ['6021'], },

    { name: 'Senadina', imgName: '20201_04_01', have: false, part: '2', spriteImages: ['6202'], },

    { name: 'Songque', imgName: '20701_04_01', have: false, part: '1', spriteImages: ['6207'], },
    
    { name: 'Thelema', imgName: '20501_04_02',have: false, part: '2', spriteImages: ['6205'], },
    
    { name: 'Theresa', imgName: '501_04_05', have: false, part: '1',spriteImages: ['605'], },

    { name: 'Sparkle', imgName: '20901_04_01', have: false, part: '2', spriteImages: ['620901_04_01'], collab: true },
    
    { name: 'Vita', imgName: '20801_04_02', have: false, part: '2',   spriteImages: ['620801']},

    { name: 'Asuka', imgName: '901_04_01', have: false, part: '2',   spriteImages: ['60901_04_01'], collab: true,collabOnly: true  },
    
    // ---------------------------------------------------------------------
    // TEMPLATE: copy a line, remove the // and fill it in.
    //   { name: '', imgName: '', have: false, part: '2', status: 'new', spriteImages: ['', ''] },
    //
    //   Same name = ONE card: to add an outfit to a character, add a line with the same name.
    //   imgName / folder     icon:  charaid/Honkai/<folder>/<imgName>.png
    //   spriteFolder         folder of the big pictures        spriteImages   the big pictures shown in the popup (a list)
    //   part                 '1' | '2'          status   'new' / 'soon' = label          have   true / false
    // ---------------------------------------------------------------------
  ],

  // Filter buttons of this page (same settings as js/chara-page.js: quick = always visible, parts = Part / Collab buttons)
  page: {
    quick: [['new',]],
    popup: [],
    parts: [
      { label: 'P1', group: 'part', field: 'part', value: '1' },
      { label: 'P2', group: 'part', field: 'part', value: '2' },
    ],
  },

  // The version this list is updated to (shows as a red "vers." pill under the title)
  lastVersion: '9.0',

  // Where the pictures are. Edit the folders here.
  pathPrefix: "../assets/charaid/Honkai/Outfit/",
  spritePrefix: "../assets/Sprite/HI3/Outfit/",

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.png`,
  // Pictures shown when you click a card: <spritePrefix>/<spriteFolder>/<each of spriteImages>.png
  getSpritePath: (c) => Dex.expandPictures(c.spriteImages, window.OUTFIT_FILES).map((name) => `${gameConfig.spritePrefix}${name}.png`),
};
