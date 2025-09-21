const gameConfig = {
  characters: [
    { name: 'Nicole', imgName: 'IconRoleCrop12_01', imgName2:'IconRole12_01', have: true, rarity: 4, status: 'available' },
    { name: 'Ellen', imgName: 'IconRoleCrop21_01',imgName2:'IconRole21_01', have: false, rarity: 5, status: 'available'},
    { name: 'Astra Yao', imgName: 'IconRoleCrop36_01', imgName2:'IconRole36_01',have: false, rarity: 5, status: 'available' },
    { name: 'Yixuan', imgName: 'IconRoleCrop44_01',imgName2:'IconRole44_01', have: false, rarity: 5, status: 'available' },
    { name: 'Alice', imgName: 'IconRoleCrop46_01', imgName2:'IconRole46_01',have: false, rarity: 5, status: 'available'},
    { name: 'Yuzuha', imgName: 'IconRoleCrop47_01', imgName2:'IconRole47_01',have: false, rarity: 5, status: 'available' },
      // Add more characters here
  ],

  pathPrefix: "../assets/charaid/Zenless/Outfit/", 
  spritePrefix: "../assets/Sprite/Zenless/Outfit/",

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.png`,
  getSpritePath: (c) => `${gameConfig.spritePrefix}${c.imgName2}.png`
};