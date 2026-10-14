window.CHARA_CONFIG = {
  characters: [
    { name: 'Caelus', imgName: '8001', have: true, element: 'physical', group:'dest', gender:'m', rarity: 5},
    { name: 'Stelle', imgName: '8002', have: true, element: 'physical', group:'dest', gender:'f', rarity: 5},
    { name: 'Caelus', imgName: '8003', have: true, element: 'fire', group:'prese', gender:'m', rarity: 5},
    { name: 'Stelle', imgName: '8004', have: true, element: 'fire', group:'prese', gender:'f', rarity: 5},
    { name: 'Caelus', imgName: '8005', have: true, element: 'imaginary', group:'harm', gender:'m', rarity: 5},
    { name: 'Stelle', imgName: '8006', have: true, element: 'imaginary', group:'harm', gender:'f', rarity: 5},
    { name: 'Caelus', imgName: '8007', imgName2: ['8007','8007_1'], have: true, element: 'ice', group:'reme', gender:'m', rarity: 5},
    { name: 'Stelle', imgName: '8008', imgName2: ['8008','8008_1'], have: true, element: 'ice', group:'reme', gender:'f', rarity: 5},
    { name: 'Caelus', imgName: '8009', have: true, element: 'thunder', group:'ela', gender:'m', rarity: 5},
    { name: 'Stelle', imgName: '8010', have: true, element: 'thunder', group:'ela', gender:'f', rarity: 5},

    // { name: '', imgName: '', have: true, element: '', group:'', gender:'', rarity: 5,  status: 'new' },
  ],
  // ---- paths ----
  cycleIcons: true, // a character with imgName2 flips between its pictures
  getIconPath: (c) => `../assets/charaid/StarRail/${c.imgName || c.name}.png`,
  getElementPath: (c) => `../assets/others/StarRail/Element/${c.element}.png`,
  getSpritePath: (c) => `../assets/Sprite/StarRail/${c.imgName || c.name}.png`,
  getFallbackPath: () => '../assets/others/StarRail/Random/Type_Unknown_Small.webp',

  // Some entries have extra pictures (imgName2)
  getSpritePaths: (c) => Dex.imageNames(c).map((name) => `../assets/Sprite/StarRail/${name}.png`),
};
