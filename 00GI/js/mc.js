window.CHARA_CONFIG = {
  characters: [
    { name: '', name2: 'Aether', GP: 2, imgName: 'PlayerBoy', have: false, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'm', rarity: 5 },
    { name: '', name2: 'Lumine', GP: 1, imgName: 'PlayerGirl', have: true, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'f', rarity: 5 },
    { name: ' ', name2: 'Aether', GP: 2, imgName: 'PlayerBoyCostumeCWXR', have: false, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'm', rarity: 5, hasOutfit:true },
    { name: ' ', name2: 'Lumine', GP: 1, imgName: 'PlayerGirlCostumeCWXR', have: true, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'f', rarity: 5, hasOutfit:true },
    
    { name: '  ', name2: 'Aether', GP: 2, imgName: '', have: false, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'm', rarity: 5, hasOutfit:true, status: 'soon' },
    { name: '  ', name2: 'Lumine', GP: 1, imgName: '', have: true, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'f', rarity: 5, hasOutfit:true, status: 'soon' },
    // ---------------------------------------------------------------------
    // TEMPLATE: copy a line, remove the // and fill it in.
    //   { name: '', name2: 'Aether', GP: 2, imgName: '', imgName2: [''], have: false, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'],
    //     gender: 'm', rarity: 5, hasOutfit: true, status: 'soon' },
    //   { name: '', name2: 'Lumine', GP: 1, imgName: '', imgName2: [''], have: true, element: [...], gender: 'f', rarity: 5, hasOutfit: true },
    //
    //   name2         the character (Aether / Lumine)      GP   1 = girl page, 2 = boy page
    //   imgName2      list of pictures: the icon flips between them (e.g. ['PlayerBoy','PlayerBoy_2'])
    //   element       a LIST: the badge flips through the elements; one element = a single badge
    //   hasOutfit     true = the icon is in the Outfit folder          status   'new' / 'soon' = label
    // ---------------------------------------------------------------------
  ],
  pageType: 'typeB',

  // ---- paths ----
  cycleIcons: true, // a character with imgName2 flips between its pictures
  getIconPath: (c) => `../assets/charaid/Genshin/${c.hasOutfit ? 'Outfit/' : ''}UI_AvatarIcon_${c.imgName || c.name}.png`,
  getSpritePath: (c) =>
    c.hasOutfit
      ? `../assets/Sprite/Genshin/Outfit/UI_Costume_${c.imgName}.png`
      : `../assets/Sprite/Genshin/UI_Gacha_AvatarImg_${c.imgName}.png`,
  getFallbackPath: () => '../assets/others/UI_Icon_LunaRite_Unknown.png',
  getElementIconPath: (el) => `../assets/others/Genshin/Element/${el}.png`, // badge that flips through the elements

  // One element -> badge on the icon. Several elements -> text tags.
  getElementPath(c) {
    return typeof c.element === 'string' ? this.getElementIconPath(c.element) : null;
  },
  getLabels: (c) => (Array.isArray(c.element) ? { list: 'element-list', item: 'element-label', values: c.element } : null),
};
