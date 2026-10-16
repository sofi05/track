window.CHARA_CONFIG = {
  gameId: 'Endfield', // key of this game in shared/js/vs.js
  characters: [
    //HAVE - ORGANIZED BY NUMBER
    { name: 'Perlica', imgName: '0004_pelica', element: 'Electric', have: true, group: ['EndIndustries'], gender:'f', rarity: 5},
    { name: 'Chen Qianyu', imgName: '0005_chen', element: 'Physical', have: true, group: ['EndIndustries', 'Hongshan'], gender:'f', rarity: 5},
    { name: 'Wulfgard', imgName: '0006_wolfgd', element: 'Heat', have: true, group: ['EndIndustries', ''], gender:'m', rarity: 5 },
    { name: 'Arclight', imgName: '0007_ikut', element: 'Electric', have: true, group: ['Hannabit'], gender:'f', rarity: 5},
    { name: 'Ember', imgName: '0009_azrila', element: 'Heat', have: true, group: ['OrderSO'], gender:'f', rarity: 6},
    { name: 'Xaihi', imgName: '0011_seraph', element: 'Cryo', have: true, group: ['Cabal'], gender:'f', rarity: 5 },
    { name: 'Avywenna', imgName: '0012_avywen', element: 'Electric', have: true, group: ['TGCC'], gender:'f', rarity: 5},
    { name: 'Gilberta', imgName: '0013_aglina', element: 'Nature', have: true, group: ['Rhodes'], gender:'f', rarity: 6},
    { name: 'Snowshine', imgName: '0014_aurora', element: 'Cryo', have: true, group: ['Rhodes'], gender:'f', rarity: 5},
    { name: 'Lifeng', imgName: '0015_lifeng', element: 'Physical', have: true, group: ['Hongshan'], gender:'m', rarity: 6},
    { name: 'Laevatain', imgName: '0016_laevat', element: 'Heat', have: true, group: ['Rhodes','EndIndustries'], gender:'f', rarity: 6},
    { name: 'Yvonne', imgName: '0017_yvonne', element: 'Cryo', have: true, group: ['EndIndustries'], gender:'f', rarity: 6},
    { name: 'Da Pan', imgName: '0018_dapan', element: 'Physical', have: true, group: ['Hongshan'], gender:'m', rarity: 5},
    { name: 'Akekuri', imgName: '0019_karin', element: 'Heat', have: true, group: ['EndIndustries'], gender:'f', rarity: 4},
    { name: 'Catcher', imgName: '0020_meurs', element: 'Physical', have: true, group: ['EndIndustries'], gender:'m', rarity: 4},
    { name: 'Estella', imgName: '0021_whiten', element: 'Cryo', have: true, group: ['EndIndustries'], gender:'f', rarity: 4},
    { name: 'Fluorite', imgName: '0022_bounda', element: 'Nature', have: true, group: ['EndIndustries'], gender:'f', rarity: 4},
    { name: 'Antal', imgName: '0023_antal', element: 'Electric', have: true, group: ['EndIndustries'], gender:'m', rarity: 4},
    { name: 'Alesh', imgName: '0024_deepfin', element: 'Cryo', have: true, group: ['UWST'], gender:'m', rarity: 5},
    { name: 'Ardelia', imgName: '0025_ardelia', element: 'Nature', have: true, group: ['Rhodes'], gender:'f', rarity: 6},
    { name: 'Last Rite', imgName: '0026_lastrite', element: 'Cryo', have: true, group: ['Sesqa'], gender:'f', rarity: 6},
    { name: 'Tangtang', imgName: '0027_tangtang', element: 'Cryo', have: true, group: ['EndIndustries'], gender:'f', rarity: 6},
    { name: 'Pogranichnik', imgName: '0029_pograni', element: 'Physical', have: true, group: ['Rhodes'], gender:'m', rarity: 6},

    //DONT HAVE - ORGANIZED BY NUMBER
    { name: 'Rossi', imgName: '0028_wulfa', element: 'Heat', have: false, group: [''], gender:'f', rarity: 6 , status: 'available', version: '1.1', p:2},
    { name: 'Zhuang Fangyi', imgName: '0030_zhuangfy', element: 'Electric', have: false, group: [''], gender:'f', rarity: 6 , status: 'available', version: '1.2', p:1, want: 2},

    { name: 'Mi Fu', imgName: '0031_mifu', element: 'Physical', have: false, group: [''], gender:'f', rarity: 6 , status: 'new', version: '1.3', p:1, want: 1 },
    { name: 'Camille', imgName: '0033_camille', element: 'Heat', have: false, group: [''], gender:'m', rarity: 6 , status: 'new', version: '1.3', p:2},

    { name: 'Arcane', imgName: '0032_lizhiyan', element: '', have: false, group: [''], gender:'f', rarity: 0 , status: 'soon', version: '1.X', p:1,out:false },
    { name: 'Sui Proxy ', imgName: '', element: '', have: false, group: [''], gender:'f', rarity: 0 , status: 'soon', version: '1.X', p:1,out:false },
    //{ name: '???', imgName: '0032_lizhiyan', element: '', have: false, group: [''], gender:'f', rarity: || , status: 'soon', version: '1.1', p:1},

    //was in CBT
    //{ name: 'Fjall', imgName: '0008_kholec', element: '', have: false, group: [''], gender:'m', rarity: || , status: 'new', version: '', p:2, perma: true, want: 1-2 },
    //{ name: 'Shayen Krad', imgName: '0010_shayen', element: '', have: false, group: [''], gender:'', rarity: || , status: 'new', version: '', p:2, perma: true, want: 1-2 },

    // ---------------------------------------------------------------------
    // TEMPLATE (Endfield): copy a line, remove the // and fill it in.
    //   { name: '', imgName: '', element: '', have: false, group: [''], gender: '', rarity: 5,
    //     status: 'soon', version: '', p: 1, perma: true, want: 1, out: false },
    //
    //   Needed:   name, imgName, element, have, group, gender, rarity
    //   Optional:
    //     status         'new' / 'soon' = label + shown on the home page   'available' = rerun
    //     version, p     banner version and phase ('7.1', p: 2): countdown and colours
    //     perma          true = permanent banner (own row on the home page)
    //     want           1 = ★    2 = ☆   (marker on the home page)
    //     out            false = not out yet (greyed out, no label)
    //   Values:
    //     rarity: 4 | 5 | 6     gender: 'm' | 'f'
    //     group: a list, a character can have several
    // ---------------------------------------------------------------------
    //  Element: Electric | Physical | Heat | Cryo | Nature 
    //  Group: Hongshan | EndIndustries | Rhodes | UWST | TGCC | OrderSO | Cabal | Hannabit | Sesqa
  ],
  // ---- paths (used by the home page, the Characters page and the popups) ----
  getIconPath: (c) => `../assets/charaid/Endfield/icon_chr_${c.imgName || c.name}.png`,
  getElementPath: (c) => `../assets/others/Endfield/Element/${c.element}.png`,
  getSpritePath: (c) => `../assets/Sprite/Endfield/chr_${c.imgName || c.name}.png`,
  getFallbackPath: () => '../assets/others/Genshin/Random/UI_Icon_LunaRite_Unknown.png', // change once the game has an "unknown" icon

  // Small text tag under the icon (group)
  getLabels: (c) => (c.group ? { list: 'type-list', item: 'type-label', values: [c.group] } : null),
};
