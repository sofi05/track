const gameConfig = {
  characters: [
    { name: 'March 7th', imgName: '1100101', have: true, rarity: 4 },
    { name: 'Firefly', imgName: '1131001', have: false, rarity: 5 },
    { name: 'Ruan Mei', imgName: '1130301', have: true, rarity: 5}, 
    { name: 'Castorice', imgName: '1140701', have: false, rarity: 5},
    
    //{ name: '', imgName: '', imgName2:'', have: false, rarity: 5, status: 'new', // part:'pom' },
  ],

pathPrefix: "../assets/charaid/StarRail/Outfit/", 
spritePrefix: "../assets/Sprite/StarRail/Outfit/", 

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.png`,
  getSpritePath: (c) => `${gameConfig.spritePrefix}${c.imgName2 ?? c.imgName}.png`
};