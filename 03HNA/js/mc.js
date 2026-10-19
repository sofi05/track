window.CHARA_CONFIG = {
  characters: [
    { name: 'MC boy', imgName: 'IMG_20261003_182140_308', have: true, gender: 'm', rarity: 5 },
    { name: 'MC girl', imgName: 'IMG_20261003_182140_485', have: true, gender: 'f', rarity: 5 },
    // a second version of the same character: add another line with gender: 'm'
  ],
  getIconPath: (c) => `../assets/charaid/NexusAnima/TempIcons/${c.imgName}.png`,
  getSpritePath: (c) => `../assets/Sprite/NexusAnima/${c.imgName}.png`,
  getFallbackPath: () => Dex.FALLBACK_ICON,
  getElementPath: () => null, // no element icons yet
};