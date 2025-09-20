const gameConfig = {
  characters: [
    //POMPOM
    { name: 'Pom-Pom', imgName: 'Item_Clamoring_Fry-Master_Chef_Outfit_Set', imgName2:'Pompom27', have: true, rarity: 5, status: 'available', part:'pom' },
    { name: 'Pom-Pom', imgName: 'Item_Solemn_Scarlet_Conductor_Outfit', imgName2:'Pompom10', have: true, rarity: 5, status: 'available', part:'pom' },

    { name: 'March 7th', imgName: 'Item_Nascent_Spring', imgName2:'1100101', have: true, rarity: 4, status: 'available' },
    { name: 'Firefly', imgName: 'Item_Spring_Missive', imgName2:'1131001', have: false, rarity: 5, status: 'available' },
    // Add more characters here
  ],

pathPrefix: "../assets/charaid/StarRail/Outfit/", 
spritePrefix: "../assets/Sprite/StarRail/Outfit/", 

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.webp`,
  getSpritePath: (c) => `${gameConfig.spritePrefix}${c.imgName2}.png`
};