window.CHARA_CONFIG = {
  characters: [
    { name: 'MC boy', imgIcon: 'IMG_20261003_182140_308', gender: 'm', rarity: 5, have: true },
    { name: 'MC girl', imgIcon: 'IMG_20261003_182140_485', gender: 'f', rarity: 5, have: true },
    // ---------------------------------------------------------------------
    // TEMPLATE: copy the line, remove the // and delete the fields you do not need.
    // What every field means: GUIDE.md. Same name on every line = one page (no gender switch).
    // { name: '', imgIcon: '', gender: '', rarity: 5, have: false, status: '' },
    // ---------------------------------------------------------------------
  ],
  getIconPath: (c) => `../assets/charaid/NexusAnima/TempIcons/${Dex.iconName(c)}.png`,
  getSpritePaths: (c) => Dex.spriteList(c, (name) => `../assets/Sprite/NexusAnima/${name}.png`, '../assets/Sprite/NexusAnima/'),
  getFallbackPath: () => Dex.FALLBACK_ICON,
  getElementPath: () => null, // no element icons yet
};
