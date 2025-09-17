const gameConfig = {
  characters: [
{ name: 'Nicole', imgName: 'Outfit_Cunning_Cutie_Icon', imgName2:'IconRole12_01', have: true, rarity: 4, status: 'available' },
{ name: 'Ellen', imgName: 'Outfit_On_Campus_Icon',imgName2:'IconRole21_01', have: false, rarity: 5, status: 'available'},
{ name: 'Astra Yao', imgName: 'Outfit_Chandelier_Icon', imgName2:'IconRole36_01',have: false, rarity: 5, status: 'available' },
{ name: 'Yixuan', imgName: 'Outfit_Trails_of_Ink_Icon',imgName2:'IconRole44_01', have: false, rarity: 5, status: 'available' },
{ name: 'Alice', imgName: 'Outfit_Sea_of_Thyme_Icon', imgName2:'IconRole46_01',have: false, rarity: 5, status: 'available'},
{ name: 'Yuzuha', imgName: 'Outfit_Tanuki_in_Broad_Daylight_Icon', imgName2:'IconRole47_01',have: false, rarity: 5, status: 'available' },
  // Add more characters here
],

  pathPrefix: "../assets/charaid/Zenless/Outfit/", 
  spritePrefix: "../assets/Sprite/Zenless/Outfit/",

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.webp`,
  getSpritePath: (c) => `${gameConfig.spritePrefix}${c.imgName2}.png`
};