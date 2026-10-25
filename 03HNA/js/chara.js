window.CHARA_CONFIG = {
  gameId: 'NexusAnima', // key of this game in vs.js (main folder)
  //PICS ARE FROM SITE OR BETA, THEYRE TEMP, CHANGE IT ON LAUNCH
  characters: [
    //Divided by ID number (leaks)
    { name: 'Breadhead', imgIcon: '002', element: 'reality', gender: 'M', rarity: 4, have: false, status: 'new' },
    { name: 'Nanafey', imgIcon: '010', element: 'beauty', gender: 'F', rarity: 4, have: false, status: 'new' },
    { name: 'Hua', imgIcon: '011', element: 'Competition', gender: 'M', rarity: 4, have: false, status: 'new' },
    { name: 'Kiana', imgIcon: '012', element: 'Strength', gender: 'F', rarity: 4, have: false, status: 'new' },
    { name: 'Jalily Belau', imgIcon: '013', element: 'Strength', gender: 'F', rarity: 4, have: false, status: 'new' },
    { name: 'Maple Manybell', imgIcon: '014', element: 'Joy', gender: 'F', rarity: 4, have: false, status: 'new' },
    { name: 'Cassio Rollex', imgIcon: '015', element: 'joy', gender: 'M', rarity: 4, have: false, status: 'new' },
    { name: 'Lyrin', imgIcon: '017', element: '', gender: ' ', rarity: 0, have: false, status: 'new', out: false },
    { name: 'Olympia', imgIcon: '019', element: 'Dark', gender: 'F', rarity: 5, have: false, status: 'new' },
    { name: 'Herocrates', imgIcon: '020', element: 'Memory', gender: 'M', rarity: 5, have: false, status: 'new' },
    { name: 'Gloria', imgIcon: '021', element: 'insatiability', gender: 'F', rarity: 4, have: false, status: 'new' },
    { name: 'Carole Pepper', imgIcon: '022', element: 'satiation', gender: 'F', rarity: 4, have: false, status: 'new' },
    { name: 'Lou F Y', imgIcon: '023', element: ' ', gender: 'F', rarity: 5, have: false, status: 'new', out: false },
    { name: 'Shilian', imgIcon: '025', element: 'memory', gender: 'F', rarity: 4, have: false, status: 'new' },
    { name: 'Otto', imgIcon: '027', element: 'light', gender: 'm', rarity: 4, have: false, status: 'new' },
    { name: 'Hyperius', imgIcon: '028', element: 'light', gender: 'M', rarity: 5, have: false, status: 'new' },
    { name: 'Valynn', imgIcon: '029', element: '', gender: ' ', rarity: 0, have: false, status: 'new', out: false },
    { name: 'Juelle', imgIcon: '030', element: 'love', gender: 'F', rarity: 5, have: false, status: 'new' },
    { name: 'Nonimir', imgIcon: '103', element: 'reality', gender: 'm', rarity: 5, have: false, status: 'new' },
    { name: 'Darsea', imgIcon: '110', element: ' ', gender: 'f', rarity: 0, have: false, status: 'new', out: false },
    { name: 'Parayaya • SLH', imgIcon: '114', element: 'love', gender: 'f', rarity: 4, have: false, status: 'new' },
    { name: 'Bai Mei', imgIcon: '208', element: 'reality', gender: 'F', rarity: 5, have: false, status: 'new' },
    { name: 'Blade', imgIcon: '222', element: 'strength', gender: 'M', rarity: 5, have: false, status: 'new' },
    { name: 'Parayaya', imgIcon: '229', element: 'hate', gender: 'f', rarity: 5, have: false, status: 'new' },
    { name: 'Sir Champion', imgIcon: '234', element: 'Competition', gender: ' ', rarity: 5, have: false, status: 'new', out: false },
    { name: 'Hungrille', imgIcon: '268', element: 'satiation', gender: 'f', rarity: 5, have: false, status: 'new' },
    { name: 'Elysia', imgIcon: '270', element: ' ', gender: ' ', rarity: 0, have: false, status: 'new', out: false },
    { name: 'Argenti', imgIcon: '908', element: ' ', gender: ' ', rarity: 0, have: false, status: 'new', out: false },
    { name: 'Victus', imgIcon: '101', element: ' ', gender: 'm', rarity: 0, have: false, status: 'soon', out: false },
    { name: 'Amstradath', imgIcon: '105', element: ' ', gender: 'm', rarity: 0, have: false, status: 'soon', out: false },
    { name: 'Apeiron', imgIcon: '128', element: ' ', gender: '', rarity: 0, have: false, status: 'soon' },
    { name: 'Prabhas', imgIcon: '216', element: ' ', gender: 'f', rarity: 5, have: false, status: 'new' }, // removed model
    { name: 'Armand', imgIcon: '217', element: 'dark', gender: 'm', rarity: 5, have: false, status: 'new' }, // removed model
    { name: 'Amorphiron', imgIcon: 'Amorphiron', element: ' ', gender: 'm', rarity: 5, have: false, status: 'new', version: '0.3', out: false },

    // ---------------------------------------------------------------------
    // TEMPLATE: copy the line, remove the // and delete the fields you do not need.
    // What every field means and its values: GUIDE.md.   Icon too close / too far: zoom, iconX, iconY (see GUIDE.md).
    // { name: '', imgIcon: '', element: '', gender: '', rarity: , have: false, status: '', version: '', want: , perma: true, collab: true, collabStatus: [''], out: false, ph:  },
    // ---------------------------------------------------------------------
  ],
  // ---- paths (used by the home page, the Characters page and the popups) ----
  getIconPath: (c) => `../assets/charaid/NexusAnima/TempIcons/${Dex.iconName(c)}.png`,
  getElementPath: () => null, // no element icons yet (Nexus Anima elements: reality, beauty, joy ...)
  getSpritePath: (c) => `../assets/Sprite/NexusAnima/${Dex.iconName(c)}.png`,
  getFallbackPath: () => Dex.FALLBACK_ICON, // same for every game (set in shared/js/common.js)
};
