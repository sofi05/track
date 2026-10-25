window.CHARA_CONFIG = {
  characters: [
    { name: 'Aether', imgIcon: 'PlayerBoy', element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'm', rarity: 5, have: false },
    { name: 'Lumine', imgIcon: 'PlayerGirl', element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'f', rarity: 5, have: true },
    { name: 'Aether', imgIcon: 'PlayerBoyCostumeCWXR', element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'm', rarity: 5, have: false, outfit: true },
    { name: 'Lumine', imgIcon: 'PlayerGirlCostumeCWXR', element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'f', rarity: 5, have: true, outfit: true },
    
    //no ingame sprite yet
    { name: 'Aether', imgIcon: '', element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'm', rarity: 5, have: false, outfit: true },
    { name: 'Lumine', imgIcon: '', element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'f', rarity: 5, have: true, outfit: true },
    // ---------------------------------------------------------------------
    // TEMPLATE: copy the line, remove the // and delete the fields you do not need.
    // What every field means: GUIDE.md. Same name on every line = one page (no gender switch).
    // { name: '', imgIcon: '', imgSprite: ['='], element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: '', rarity: 5, have: false, status: '', outfit: true },
    // ---------------------------------------------------------------------
  ],
  // ---- paths ----
  getIconPath: (c) => `../assets/charaid/Genshin/${c.outfit ? 'Outfit/' : ''}UI_AvatarIcon_${Dex.iconName(c)}.png`,
  // big pictures: an outfit line looks in the Outfit folder, the others in the normal sprite folder
  getSpritePaths: (c) =>
    Dex.spriteList(c, (name) => `../assets/Sprite/Genshin/${c.outfit ? 'Outfit/UI_Costume_' : 'UI_Gacha_AvatarImg_'}${name}.png`, '../assets/Sprite/Genshin/Outfit/UI_Costume_'),
  getFallbackPath: () => Dex.FALLBACK_ICON, // same for every game (set in shared/js/common.js)
  getElementIconPath: (el) => `../assets/others/Element/GI_${el}.png`, // badge that flips through the elements

  // One element -> badge on the icon. Several elements -> text tags.
  getElementPath(c) {
    return typeof c.element === 'string' ? this.getElementIconPath(c.element) : null;
  },
  getLabels: (c) => (Array.isArray(c.element) ? { list: 'element-list', item: 'element-label', values: c.element } : null),
};
