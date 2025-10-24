const gameConfig = {
  characters: [
    //POMPOM
    { name: 'Clamoring', imgName: 'Clamoring_Fry-Master_Chef', imgName2:'Pompom27', have: true, rarity: 5, status: 'available', part:'pom' },
    { name: 'Solemn', imgName: 'Solemn_Scarlet_Conductor', imgName2:'Pompom10', have: true, rarity: 5, status: 'available', part:'pom' },
    { name: 'Sweet', imgName: 'Sweet_Dreams_Pajamas', imgName2:'', have: true, rarity: 4, status: 'new', part:'pom' },

    { name: 'March 7th', imgName: 'Nascent_Spring', imgName2:'1100101', have: true, rarity: 4, status: 'available' },
    { name: 'Firefly', imgName: 'Spring_Missive', imgName2:'1131001', have: false, rarity: 5, status: 'available' },
    
    //{ name: '', imgName: '', imgName2:'', have: false, rarity: 5, status: 'new', part:'pom' },
  ],

pathPrefix: "../assets/charaid/StarRail/Outfit/", 
spritePrefix: "../assets/Sprite/StarRail/Outfit/", 

  getImgPath: (c) => `${gameConfig.pathPrefix}Item_${c.imgName}.webp`,
  getSpritePath: (c) => `${gameConfig.spritePrefix}${c.imgName2}.png`
};