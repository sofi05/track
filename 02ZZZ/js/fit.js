const gameConfig = {
  characters: [
    { name: 'Nicole', imgName: '12_01', have: true, rarity: 4 },
    { name: 'Ellen', imgName: '21_01', have: false, rarity: 5},
    { name: 'Jane Doe', imgName: '24_01', have: true, rarity: 5 }, 
    { name: 'Astra Yao', imgName: '36_01', have: false, rarity: 5 },
    { name: 'Vivian', imgName: '41_01', have: true, rarity: 5 },
    { name: 'Yixuan', imgName: '44_01', have: false, rarity: 5 },
    { name: 'Alice', imgName: '46_01', have: false, rarity: 5},
    { name: 'Yuzuha', imgName: '47_01', have: false, rarity: 5 },
    { name: 'Manato', imgName: '51_01', have: true, rarity: 4 },
    { name: 'Shunguan', imgName: '55_01', have: false, rarity: 5 },
    
    { name: 'Aria', imgName: '57_01', imgName2: ['57_01', '57_01_Form2'], have: false, rarity: 5, status: 'new' },
    { name: 'Sunna', imgName: '58_01', imgName2: '58_01', have: false, rarity: 5, status: 'new' },
    { name: 'Pan Yinhu', imgName: '45_01', imgName2: '45_01', have: true, rarity: 4, status: 'new' },
    { name: 'Nangong Yu', imgName: '59_01', imgName2: '59_01', have: false, rarity: 4, status: 'soon' },
    
    // { name: '', imgName: '', imgName2:'', have: false, rarity: 4, status: 'new' },
  ],

  pathPrefix: "../assets/charaid/Zenless/Outfit/IconRoleCrop", 
  spritePrefix: "../assets/Sprite/Zenless/Outfit/IconRole",

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.png`,
  getSpritePath: (c) => `${gameConfig.spritePrefix}${c.imgName2 || c.imgName}.png`
};