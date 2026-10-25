window.CHARA_CONFIG = {
  characters: [
    { name: 'Endministrator', imgIcon: '0002_endminm', element: 'Physical', gender: 'm', rarity: 6, have: true },
    { name: 'Endministrator', imgIcon: '0003_endminf', element: 'Physical', gender: 'f', rarity: 6, have: true },
    // ---------------------------------------------------------------------
    // TEMPLATE: copy the line, remove the // and delete the fields you do not need.
    // What every field means: GUIDE.md. Same name on every line = one page (no gender switch).
    // { name: '', imgIcon: '', element: '', gender: '', rarity: 6, have: false, status: '' },
    // ---------------------------------------------------------------------
  ],
  // ---- paths ----
  getIconPath: (c) => `../assets/charaid/Endfield/icon_chr_${Dex.iconName(c)}.png`,
  getSpritePaths: (c) => Dex.spriteList(c, (name) => `../assets/Sprite/Endfield/chr_${name}.png`, '../assets/Sprite/Endfield/chr_'),
  getFallbackPath: () => Dex.FALLBACK_ICON, // same for every game (set in shared/js/common.js)

  // One element -> badge on the icon. Several elements -> text tags.
  getElementPath: (c) => (typeof c.element === 'string' ? `../assets/others/Element/AE_${c.element}.png` : null),
  getLabels: (c) => (Array.isArray(c.element) ? { list: 'element-list', item: 'element-label', values: c.element } : null),
};
