window.CHARA_CONFIG = {
  gameId: 'Endfield', // key of this game in vs.js (main folder)
  characters: [
    //HAVE - ORGANIZED BY NUMBER
    { name: 'Perlica', imgIcon: '0004_pelica', element: 'Electric', gender: 'f', rarity: 5, area: ['EndIndustries'], have: true },
    { name: 'Chen Qianyu', imgIcon: '0005_chen', element: 'Physical', gender: 'f', rarity: 5, area: ['EndIndustries', 'Hongshan'], have: true },
    { name: 'Wulfgard', imgIcon: '0006_wolfgd', element: 'Heat', gender: 'm', rarity: 5, area: ['EndIndustries', ''], have: true },
    { name: 'Arclight', imgIcon: '0007_ikut', element: 'Electric', gender: 'f', rarity: 5, area: ['Hannabit'], have: true },
    { name: 'Ember', imgIcon: '0009_azrila', element: 'Heat', gender: 'f', rarity: 6, area: ['OrderSO'], have: true },
    { name: 'Xaihi', imgIcon: '0011_seraph', element: 'Cryo', gender: 'f', rarity: 5, area: ['Cabal'], have: true },
    { name: 'Avywenna', imgIcon: '0012_avywen', element: 'Electric', gender: 'f', rarity: 5, area: ['TGCC'], have: true },
    { name: 'Gilberta', imgIcon: '0013_aglina', element: 'Nature', gender: 'f', rarity: 6, area: ['Rhodes'], have: true },
    { name: 'Snowshine', imgIcon: '0014_aurora', element: 'Cryo', gender: 'f', rarity: 5, area: ['Rhodes'], have: true },
    { name: 'Lifeng', imgIcon: '0015_lifeng', element: 'Physical', gender: 'm', rarity: 6, area: ['Hongshan'], have: true },
    { name: 'Laevatain', imgIcon: '0016_laevat', element: 'Heat', gender: 'f', rarity: 6, area: ['Rhodes','EndIndustries'], have: true },
    { name: 'Yvonne', imgIcon: '0017_yvonne', element: 'Cryo', gender: 'f', rarity: 6, area: ['EndIndustries'], have: true },
    { name: 'Da Pan', imgIcon: '0018_dapan', element: 'Physical', gender: 'm', rarity: 5, area: ['Hongshan'], have: true },
    { name: 'Akekuri', imgIcon: '0019_karin', element: 'Heat', gender: 'f', rarity: 4, area: ['EndIndustries'], have: true },
    { name: 'Catcher', imgIcon: '0020_meurs', element: 'Physical', gender: 'm', rarity: 4, area: ['EndIndustries'], have: true },
    { name: 'Estella', imgIcon: '0021_whiten', element: 'Cryo', gender: 'f', rarity: 4, area: ['EndIndustries'], have: true },
    { name: 'Fluorite', imgIcon: '0022_bounda', element: 'Nature', gender: 'f', rarity: 4, area: ['EndIndustries'], have: true },
    { name: 'Antal', imgIcon: '0023_antal', element: 'Electric', gender: 'm', rarity: 4, area: ['EndIndustries'], have: true },
    { name: 'Alesh', imgIcon: '0024_deepfin', element: 'Cryo', gender: 'm', rarity: 5, area: ['UWST'], have: true },
    { name: 'Ardelia', imgIcon: '0025_ardelia', element: 'Nature', gender: 'f', rarity: 6, area: ['Rhodes'], have: true },
    { name: 'Last Rite', imgIcon: '0026_lastrite', element: 'Cryo', gender: 'f', rarity: 6, area: ['Sesqa'], have: true },
    { name: 'Tangtang', imgIcon: '0027_tangtang', element: 'Cryo', gender: 'f', rarity: 6, area: ['EndIndustries'], have: true },
    { name: 'Pogranichnik', imgIcon: '0029_pograni', element: 'Physical', gender: 'm', rarity: 6, area: ['Rhodes'], have: true },

    //DONT HAVE - ORGANIZED BY NUMBER
    { name: 'Rossi', imgIcon: '0028_wulfa', element: 'Heat', gender: 'f', rarity: 6, area: [''], have: false, status: 'available', version: '1.1', ph: 2 },
    { name: 'Zhuang Fangyi', imgIcon: '0030_zhuangfy', element: 'Electric', gender: 'f', rarity: 6, area: [''], have: false, status: 'available', version: '1.2', want: 2, ph: 1 },

    { name: 'Mi Fu', imgIcon: '0031_mifu', element: 'Physical', gender: 'f', rarity: 6, area: [''], have: false, status: 'new', version: '1.3', want: 1, ph: 1 },
    { name: 'Camille', imgIcon: '0033_camille', element: 'Heat', gender: 'm', rarity: 6, area: [''], have: false, status: 'new', version: '1.3', ph: 2 },

    { name: 'Arcane', imgIcon: '0032_lizhiyan', element: '', gender: 'f', rarity: 0, area: [''], have: false, status: 'soon', version: '1.X', out: false, ph: 1 },
    { name: 'Sui Proxy ', imgIcon: '', element: '', gender: 'f', rarity: 0, area: [''], have: false, status: 'soon', version: '1.X', out: false, ph: 1 },
    //{ name: '???', imgIcon: '0032_lizhiyan', element: '', gender: 'f', rarity: ||, area: [''], have: false, status: 'soon', version: '1.1', ph: 1 },

    //was in CBT
    //{ name: 'Fjall', imgIcon: '0008_kholec', element: '', gender: 'm', rarity: ||, area: [''], have: false, status: 'new', version: '', want: 1-2, perma: true, ph: 2 },
    //{ name: 'Shayen Krad', imgIcon: '0010_shayen', element: '', gender: '', rarity: ||, area: [''], have: false, status: 'new', version: '', want: 1-2, perma: true, ph: 2 },

    // ---------------------------------------------------------------------
    // TEMPLATE: copy the line, remove the // and delete the fields you do not need.
    // What every field means and its values: GUIDE.md.   Icon too close / too far: zoom, iconX, iconY (see GUIDE.md).
    // { name: '', imgIcon: '', element: '', gender: '', rarity: , area: [''], have: false, status: '', version: '', want: , perma: true, collab: true, collabStatus: [''], out: false, ph:  },
    // ---------------------------------------------------------------------
  ],
  // ---- paths (used by the home page, the Characters page and the popups) ----
  getIconPath: (c) => `../assets/charaid/Endfield/icon_chr_${Dex.iconName(c)}.png`,
  getElementPath: (c) => `../assets/others/Element/AE_${c.element}.png`,
  getSpritePath: (c) => `../assets/Sprite/Endfield/chr_${Dex.iconName(c)}.png`,
  getFallbackPath: () => Dex.FALLBACK_ICON, // same for every game (set in shared/js/common.js)

  // Small text tag under the icon (group)
  getLabels: (c) => (c.area ? { list: 'type-list', item: 'type-label', values: [].concat(c.area) } : null),
};
