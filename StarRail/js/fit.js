const gameConfig = {
  characters: [
  { name: 'March 7th', imgName: 'Item_Nascent_Spring', imgName2:'1100101', have: true, rarity: 4, status: 'available' },
  { name: 'Firefly', imgName: 'Item_Spring_Missive', imgName2:'1131001', have: false, rarity: 5, status: 'new' }
  // Add more characters here
],

pathPrefix: "../assets/charaid/StarRail/Outfit/", 
spritePrefix: "../assets/Sprite/StarRail/Outfit/", 

  getImgPath: (imgName) => `${gameConfig.pathPrefix}${imgName}.webp`,
  getSpritePath: (imgName2) => `${gameConfig.spritePrefix}${imgName2}.png`
};

    

