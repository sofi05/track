const gameConfig = {
  characters: [
    //POMPOM
    { name: 'Solemn', imgName: '252000', have: true, rarity: 5, part:'pom' },
    { name: 'Clamoring', imgName: '252001', have: true, rarity: 5, part:'pom' },
    { name: 'Sweet', imgName: '252002', have: false, rarity: 4, part:'pom' },

    //CHARA
    { name: 'March 7th', imgName: '1100101', have: true, rarity: 4 },
    { name: 'Firefly', imgName: '1131001', have: false, rarity: 5 },
    { name: 'Ruan Mei', imgName: '1303', have: false, rarity: 5, status: 'soon'},
    
    //{ name: '', imgName: '', imgName2:'', have: false, rarity: 5, status: 'new', // part:'pom' },
  ],

pathPrefix: "../assets/charaid/StarRail/Outfit/", 
spritePrefix: "../assets/Sprite/StarRail/Outfit/", 

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.png`,
  getSpritePath: (c) => `${gameConfig.spritePrefix}${c.imgName2 ?? c.imgName}.png`
};