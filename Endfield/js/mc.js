window.CHARA_CONFIG = {
  characters: [
    { name: '',name2: 'Endministrator', GP: 1, imgName: '0002_endminm', have: true, element: 'Physical', gender:'m', rarity: 6},
    { name: '',name2: 'Endministrator', GP: 1, imgName: '0003_endminf', have: true, element: 'Physical', gender:'f', rarity: 6},
  ],
  pageType: 'typeB',

  // ---- paths ----
  cycleIcons: true, // a character with imgName2 flips between its pictures
  getIconPath: (c) => `../assets/charaid/Endfield/icon_chr_${c.imgName || c.name}.png`,
  getSpritePath: (c) => `../assets/Sprite/Endfield/chr_${c.imgName || c.name}.png`,
  getFallbackPath: () => Dex.FALLBACK_ICON, // same for every game (set in shared/js/common.js)

  // One element -> badge on the icon. Several elements -> text tags.
  getElementPath: (c) => (typeof c.element === 'string' ? `../assets/others/Endfield/Element/${c.element}.png` : null),
  getLabels: (c) => (Array.isArray(c.element) ? { list: 'element-list', item: 'element-label', values: c.element } : null),
};
