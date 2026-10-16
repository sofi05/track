window.CHARA_CONFIG = {
  gameId: 'NexusAnima', // key of this game in shared/js/vs.js
  //PICS ARE FROM SITE OR BETA, THEYRE TEMP, CHANGE IT ON LAUNCH
  characters: [
    //Divided by ID number (leaks)
    { name: 'Breadhead', imgName: '002', element: 'reality', have: false, gender:'M', rarity: 4, status: 'new'},
    { name: 'Nanafey', imgName: '010', element: 'beauty', have: false, gender:'F', rarity: 4, status: 'new'},
    { name: 'Hua', imgName: '011', element: 'Competition', have: false, gender:'M', rarity: 4, status: 'new'},
    { name: 'Kiana', imgName: '012', element: 'Strength', have: false, gender:'F', rarity: 4, status: 'new'},
    { name: 'Jalily Belau', imgName: '013', element: 'Strength', have: false, gender:'F', rarity: 4, status: 'new'},
    { name: 'Maple Manybell', imgName: '014', element: 'Joy',  have: false, gender:'F', rarity: 4, status: 'new'},
    { name: 'Cassio Rollex', imgName: '015', element: 'joy', have: false, gender:'M', rarity: 4, status: 'new'},
    { name: 'Lyrin', imgName: '017', element: '', have: false, gender:' ', rarity: 0, status: 'new' },
    { name: 'Olympia', imgName: '019', element: 'Dark', have: false, gender:'F', rarity: 5, status: 'new' },
    { name: 'Herocrates', imgName: '020', element: 'Memory', have: false, gender:'M', rarity: 5, status: 'new' },
    { name: 'Gloria', imgName: '021', element: 'insatiability', have: false, gender:'F', rarity: 4, status: 'new' },
    { name: 'Carole Pepper', imgName: '022', element: 'satiation', have: false, gender:'F', rarity: 4, status: 'new' },
    { name: 'Lou F Y', imgName: '023', element: ' ', have: false, gender:'F', rarity: 5, status: 'new' },
    { name: 'Shilian', imgName: '025', element: 'memory', have: false, gender:'F', rarity: 4, status: 'new' },
    { name: 'Otto', imgName: '027', element: 'light', have: false, gender:'m', rarity: 4, status: 'new' },
    { name: 'Hyperius', imgName: '028', element: 'light', have: false, gender:'M', rarity: 5, status: 'new' },
    { name: 'Valynn', imgName: '029', element: '', have: false, gender:' ', rarity: 0, status: 'new' },
    { name: 'Juelle', imgName: '030', element: 'love', have: false, gender:'F', rarity: 5, status: 'new' },
    { name: 'Nonimir', imgName: '103', element: 'reality', have: false, gender:'m', rarity: 5, status: 'new' },
    { name: 'Darsea', imgName: '110', element: ' ', have: false, gender:'f', rarity: 0, status: 'new' },
    { name: 'Parayaya • SLH', imgName: '114', element: 'love', have: false, gender:'f', rarity: 4, status: 'new' },
    { name: 'Bai Mei', imgName: '208', element: 'reality', have: false, gender:'F', rarity: 5, status: 'new' },
    { name: 'Blade', imgName: '222', element: 'strength', have: false, gender:'M', rarity: 5, status: 'new'},
    { name: 'Parayaya', imgName: '229', element: 'hate', have: false, gender:'f', rarity: 5, status: 'new'},
    { name: 'Sir Champion', imgName: '234', element: 'Competition', gender:' ',  have: false, rarity: 5, status: 'new' },
    { name: 'Hungrille', imgName: '268', element: 'satiation', have: false, gender:'f', rarity: 5, status: 'new'},
    { name: 'Elysia', imgName: '270', element: ' ', have: false, gender:' ', rarity: 0, status: 'new'},
    { name: 'Argenti', imgName: '908', element: ' ', have: false, gender:' ', rarity: 0, status: 'new' },
    { name: 'Victus', imgName: '101', element: ' ', have: false, gender:'m', rarity: 0, status: 'soon' },
    { name: 'Amstradath', imgName: '105', element: ' ', have: false, gender:'m', rarity: 0, status: 'soon'},
    { name: 'Apeiron', imgName: '128', element: ' ', have: false, gender:'', rarity: 0,  status: 'soon'},
    { name: 'Prabhas', imgName: '216', element: ' ', have: false, gender:'f', rarity: 5, status: 'new' }, // removed model
    { name: 'Armand', imgName: '217', element: 'dark', have: false, gender:'m', rarity: 5, status: 'new' }, // removed model
    { name: 'Amorphiron', imgName: 'Amorphiron', element: ' ', have: false, gender:'m', rarity: 5, status: 'new', version: '0.3' },

    // ---------------------------------------------------------------------
    // TEMPLATE (Nexus Anima): copy a line, remove the // and fill it in.
    //   { name: '', imgName: '', element: '', have: false, gender: '', rarity: 4,
    //     status: 'soon', version: '', p: 1, perma: true, want: 1, out: false },
    //
    //   Needed:   name, imgName, element, have, gender, rarity
    //   Optional:
    //     status         'new' / 'soon' = label + shown on the home page   'available' = rerun
    //     version, p     banner version and phase ('7.1', p: 2): countdown and colours
    //     perma          true = permanent banner (own row on the home page)
    //     want           1 = ★    2 = ☆   (marker on the home page)
    //     out            false = not out yet (greyed out, no label)
    //   Values:
    //     rarity: 4 | 5     gender: 'm' | 'f'
    // ---------------------------------------------------------------------
    // Add more characters here
  ],
  // ---- paths (used by the home page, the Characters page and the popups) ----
  getIconPath: (c) => `../assets/charaid/NexusAnima/TempIcons/${c.imgName || c.name}.png`,
  getElementPath: () => null, // no element icons yet (Nexus Anima elements: reality, beauty, joy ...)
  getSpritePath: (c) => `../assets/Sprite/NexusAnima/${c.imgName || c.name}.png`,
  getFallbackPath: () => '../assets/others/Genshin/Random/UI_Icon_LunaRite_Unknown.png', // change this when needed
};
