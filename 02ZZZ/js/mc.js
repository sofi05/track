window.CHARA_CONFIG = {
  characters: [
    { name: 'Belle', imgIcon: '33', gender: 'f', rarity: 5, have: true },
    { name: 'Belle', imgIcon: '33_01', gender: 'f', rarity: 5, have: true, outfit: true },
    { name: 'Belle', imgIcon: '33_02', gender: 'f', rarity: 5, have: true, outfit: true },
    { name: 'Belle', imgIcon: '33_03', gender: 'f', rarity: 5, have: true, outfit: true },

    { name: 'Wise', imgIcon: '34', gender: 'm', rarity: 5, have: true },
    { name: 'Wise', imgIcon: '34_01', gender: 'm', rarity: 5, have: true, outfit: true },
    { name: 'Wise', imgIcon: '34_02', gender: 'm', rarity: 5, have: true, outfit: true },
    { name: 'Wise', imgIcon: '34_03', gender: 'm', rarity: 5, have: true, outfit: true },
    // ---------------------------------------------------------------------
    // TEMPLATE: copy the line, remove the // and delete the fields you do not need.
    // What every field means: GUIDE.md. Same name on every line = one page (no gender switch).
    // { name: '', imgIcon: '', imgSprite: ['='], gender: '', rarity: 5, have: false, status: '', outfit: true },
    // ---------------------------------------------------------------------
  ],
  // ---- paths ----
  // outfit: true = the picture is in the Outfit folder. If it is not where the line says, the other folder is tried.
  getIconPath: (c) => `../assets/charaid/Zenless/${c.outfit ? 'Outfit/' : ''}IconRoleCrop${Dex.iconName(c)}.png`,
  getIconPathAlt: (c) => `../assets/charaid/Zenless/${c.outfit ? '' : 'Outfit/'}IconRoleCrop${Dex.iconName(c)}.png`,
  getSpritePaths: (c) =>
    Dex.spriteList(c, (name) => `../assets/Sprite/Zenless/${c.outfit ? 'Outfit/' : ''}IconRole${name}.png`, '../assets/Sprite/Zenless/Outfit/IconRole'),
  // the same picture in the other folder (url = the address that was not found)
  getSpritePathAlt: (c, url) => (url.includes('/Zenless/Outfit/') ? url.replace('/Zenless/Outfit/', '/Zenless/') : url.replace('/Zenless/', '/Zenless/Outfit/')),
  getFallbackPath: () => Dex.FALLBACK_ICON, // same for every game (set in shared/js/common.js)
};
