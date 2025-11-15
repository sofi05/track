const gameConfig = {
  characters: [
    { name: 'Nicole', imgName: '12_01', imgName2:'12_01', have: true, rarity: 4, status: 'available' },
    { name: 'Ellen', imgName: '21_01',imgName2:'21_01', have: false, rarity: 5, status: 'available'},
    { name: 'Astra Yao', imgName: '36_01', imgName2:'36_01',have: false, rarity: 5, status: 'available' },
    { name: 'Vivian', imgName: '41_01', imgName2:'41_01',have: false, rarity: 5, status: 'new' },
    { name: 'Yixuan', imgName: '44_01',imgName2:'44_01', have: false, rarity: 5, status: 'available' },
    { name: 'Alice', imgName: '46_01', imgName2:'46_01',have: false, rarity: 5, status: 'available'},
    { name: 'Yuzuha', imgName: '47_01', imgName2:'47_01',have: false, rarity: 5, status: 'available' },
    { name: 'Manato', imgName: '51_01', imgName2:'51_01',have: true, rarity: 4, status: 'new' },
    
    // { name: '', imgName: '', imgName2:'',have: false, rarity: 4, status: 'new' },
  ],

  pathPrefix: "../assets/charaid/Zenless/Outfit/IconRoleCrop", 
  spritePrefix: "../assets/Sprite/Zenless/Outfit/IconRole",

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.png`,
  getSpritePath: (c) => `${gameConfig.spritePrefix}${c.imgName2}.png`
};