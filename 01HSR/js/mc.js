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

    // ---------------------------------------------------------------------
    // TEMPLATE: copy a line, remove the // and fill it in.
    //   { name: '', imgName: '', imgName2: [''], have: true, element: '', group: '', gender: '', rarity: 5, status: 'new' },
    //
    //   imgName2      list of pictures: the icon flips between them (e.g. ['8007','8007_1'])
    //   status       'new' / 'soon' = label           have   true / false
    // ---------------------------------------------------------------------
  ],
  // ---- paths ----
  cycleIcons: true, // a character with imgName2 flips between its pictures
  getIconPath: (c) => `../assets/charaid/StarRail/${c.imgName || c.name}.png`,
  // Data uses short names (fire, thunder ...); the icon files use the game's names (IconAttributeFire.png ...)
  getElementPath: (c) => {
    const name = String(c.element || 'Unknown');
    return `../assets/others/StarRail/Element/IconAttribute${name.charAt(0).toUpperCase()}${name.slice(1)}.png`;
  },
  getSpritePath: (c) => `../assets/Sprite/StarRail/${c.imgName || c.name}.png`,
  getFallbackPath: () => Dex.FALLBACK_ICON, // same for every game (set in shared/js/common.js)

  // Some entries have extra pictures (imgName2)
  getSpritePaths: (c) => Dex.imageNames(c).map((name) => `../assets/Sprite/StarRail/${name}.png`),
};
