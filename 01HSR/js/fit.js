const gameConfig = {
  characters: [
    //POMPOM
    { name: 'Clamoring', imgName: '252001', imgName2:'252001', have: true, rarity: 5, status: 'available', part:'pom' },
    { name: 'Solemn', imgName: '252000', imgName2:'252000', have: true, rarity: 5, status: 'available', part:'pom' },
    { name: 'Sweet', imgName: '252002', imgName2:'252002', have: false, rarity: 4, status: 'available', part:'pom' },

    { name: 'March 7th', imgName: '1100101', imgName2:'1100101', have: true, rarity: 4, status: 'available' },
    { name: 'Firefly', imgName: '1131001', imgName2:'1131001', have: false, rarity: 5, status: 'available' },
    
    //{ name: '', imgName: '', imgName2:'', have: false, rarity: 5, status: 'new', part:'pom' },
  ],

pathPrefix: "../assets/charaid/StarRail/Outfit/", 
spritePrefix: "../assets/Sprite/StarRail/Outfit/", 

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.png`,
  getSpritePath: (c) => `${gameConfig.spritePrefix}${c.imgName2}.png`
};