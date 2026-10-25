window.CHARA_CONFIG = {
  characters: [
    { name: 'Caelus', imgIcon: '8001', element: 'physical', gender: 'm', rarity: 5, role: 'dest', have: false },
    { name: 'Stelle', imgIcon: '8002', element: 'physical', gender: 'f', rarity: 5, role: 'dest', have: true },
    { name: 'Caelus', imgIcon: '8003', element: 'fire', gender: 'm', rarity: 5, role: 'prese', have: false },
    { name: 'Stelle', imgIcon: '8004', element: 'fire', gender: 'f', rarity: 5, role: 'prese', have: true },
    { name: 'Caelus', imgIcon: '8005', element: 'imaginary', gender: 'm', rarity: 5, role: 'harm', have: false },
    { name: 'Stelle', imgIcon: '8006', element: 'imaginary', gender: 'f', rarity: 5, role: 'harm', have: true },
    { name: 'Caelus', imgIcon: '8007', imgSprite: ['=', '8007_1'], element: 'ice', gender: 'm', rarity: 5, role: 'reme', have: false },
    { name: 'Stelle', imgIcon: '8008', imgSprite: ['=', '8008_1'], element: 'ice', gender: 'f', rarity: 5, role: 'reme', have: true },
    { name: 'Caelus', imgIcon: '8009', element: 'thunder', gender: 'm', rarity: 5, role: 'ela', have: false },
    { name: 'Stelle', imgIcon: '8010', element: 'thunder', gender: 'f', rarity: 5, role: 'ela', have: true },
    // ---------------------------------------------------------------------
    // TEMPLATE: copy the line, remove the // and delete the fields you do not need.
    // What every field means: GUIDE.md. Same name on every line = one page (no gender switch).
    // { name: '', imgIcon: '', imgSprite: ['='], element: '', gender: '', rarity: 5, role: '', have: false, status: '' },
    // ---------------------------------------------------------------------
  ],
  // ---- paths ----
  getIconPath: (c) => `../assets/charaid/StarRail/${Dex.iconName(c)}.png`,
  // Data uses short names (fire, thunder ...); the icon files use the game's names (IconAttributeFire.png ...)
  getElementPath: (c) => {
    const name = String(c.element || 'Unknown');
    return `../assets/others/Element/HSR_IconAttribute${name.charAt(0).toUpperCase()}${name.slice(1)}.png`;
  },
  getSpritePaths: (c) => Dex.spriteList(c, (name) => `../assets/Sprite/StarRail/${name}.png`, '../assets/Sprite/StarRail/Outfit/'),
  getFallbackPath: () => Dex.FALLBACK_ICON, // same for every game (set in shared/js/common.js)
};
