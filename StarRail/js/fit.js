const gameConfig = {
  characters: [
  { name: 'March 7th', imgName: 'Item_Nascent_Spring', imgName2:'1100101', have: true, rarity: 4, status: 'available' },
  { name: 'Firefly', imgName: 'Item_Spring_Missive', imgName2:'1131001', have: false, rarity: 5, status: 'available' }
  // Add more characters here
],

pathPrefix: "../assets/charaid/StarRail/Outfit/", 
spritePrefix: "../assets/Sprite/StarRail/Outfit/", 

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.webp`,
  getSpritePath: (c) => `${gameConfig.spritePrefix}${c.imgName2}.png`
};