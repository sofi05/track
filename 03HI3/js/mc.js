window.CHARA_CONFIG = {
  characters: [
    { name2: 'Removed', name: 'Dreamseeker', GP: 2, imgName: 'Dreamseeker_Alt', have: false,  gender:'m', rarity: 5, status: 'available' },
    { name2: 'Main Character', name: 'Dreamseeker ', GP: 1, imgName: 'Dreamseeker', have: true,  gender:'f', rarity: 5, status: 'available'},
    { name2: 'Main Character', name: 'Adam', GP: 1, imgName: 'Main_Character_APHO', have: true,  gender:'m', rarity: 5, status: 'available' },
    // Add more characters here
  ],
  pageType: 'typeB',

  // ---- paths ----
  cycleIcons: true, // a character with imgName2 flips between its pictures
  getIconPath: (c) => `../assets/charaid/Honkai/MC/${c.imgName || c.name}.png`,
  getSpritePath: (c) => `../assets/Sprite/HI3/MC/${c.imgName || c.name}.png`,
  getFallbackPath: () => '../assets/others/Genshin/Random/UI_Icon_LunaRite_Unknown.png',
};
