window.CHARA_CONFIG = {
  showPart: true, // the popup shows "Part 1" / "Part 2" from p (Honkai Impact has story parts, no banner phases)
  gameId: 'HonkaiImpact', // key of this game in vs.js (main folder)
  characters: [
    //PART 1 - ORGANIZED BY CHARA > HAVE
    { name: 'Bronya • VC', imgIcon: '301', element: 'PSY', rarity: 3, have: true },
    { name: 'Bronya • YA', imgIcon: '302', element: 'PSY', rarity: 4, have: true },
    { name: 'Bronya • SS', imgIcon: '303', element: 'BIO', rarity: 4, have: true },
    { name: 'Bronya • WD', imgIcon: '311', element: 'PSY', rarity: 4, have: true },
    { name: 'Bronya • BN', imgIcon: '312', element: 'BIO', rarity: 5, have: true },
    { name: 'Bronya • HoR', imgIcon: '313', element: 'MECH', rarity: 5, have: true },
    { name: 'Bronya • HB', imgIcon: '314', element: 'PSY', rarity: 4, have: true },
    { name: 'Bronya • HoT', imgIcon: '317', element: 'IMG', rarity: 5, have: true },
    //====================================================================================================================
    { name: 'Bronya • DB', imgIcon: '304', element: 'MECH', rarity: 5, have: false, status: 'available', version: '8.6', perma: true }, // 1 -80
    { name: 'Bronya • S', imgIcon: '315', element: 'BIO', rarity: 5, have: false, status: 'available', version: '8.6', perma: true }, //4 -80


    { name: 'Durandal • VG', imgIcon: '801', element: 'QUA', rarity: 4, have: true },
    { name: 'Durandal • PE', imgIcon: '804', element: 'IMG', rarity: 5, have: true },
    //====================================================================================================================
    { name: 'Durandal • BN', imgIcon: '802', element: 'MECH', rarity: 5, have: false, status: 'available', version: '8.6', perma: true },
    { name: 'Durandal • DA', imgIcon: '803', element: 'BIO', rarity: 5, have: false, status: 'available', version: '8.6', perma: true },
    { name: 'Durandal • RS', imgIcon: '806', element: 'IMG', rarity: 5, role: 'LoA', have: false, status: 'available', version: '9.0', p: 2 },
    

    { name: 'Elysia • HoH', imgIcon: '2202', element: 'PSY', rarity: 5, have: true },
    { name: 'Elysia • MPE', imgIcon: '2201', element: 'PSY', rarity: 5, have: true },
    { name: 'Elysia • HLE', imgIcon: '21001', element: 'SD', rarity: 5, role: 'GoI', have: true, p: 2 },


    { name: 'Fu Hua • VA', imgIcon: '601', element: 'PSY', rarity: 4, have: true },
    { name: 'Fu Hua • NS', imgIcon: '603', element: 'BIO', rarity: 4, have: true },
    { name: 'Fu Hua • AE', imgIcon: '611', element: 'PSY', rarity: 5, have: true },
    { name: 'Fu Hua • HoS', imgIcon: '612', element: 'BIO', rarity: 5, have: true },
    //====================================================================================================================
    { name: 'Fu Hua • SK', imgIcon: '602', element: 'MECH', rarity: 5, have: false, status: 'available', version: '8.6', perma: true },
    { name: 'Fu Hua • P', imgIcon: '604', element: 'PSY', rarity: 5, have: false, status: 'available', version: '8.6', perma: true }, // 2- 80
    { name: 'Fu Hua • FoV', imgIcon: '613', element: 'BIO', rarity: 5, have: false, status: 'available', version: '9.1', perma: true },
    

    { name: 'Griseo • SI', imgIcon: '2901', element: 'PSY', rarity: 4, have: true },
    { name: 'Griseo • CE', imgIcon: '2902', element: 'SD', rarity: 4, have: true },
    

    { name: 'Himeko • VT', imgIcon: '401', element: 'BIO', rarity: 4, have: true },
    { name: 'Himeko • SF', imgIcon: '402', element: 'MECH', rarity: 4, have: true },
    { name: 'Himeko • BS', imgIcon: '403', element: 'BIO', rarity: 3, have: true },
    { name: 'Himeko • K', imgIcon: '411', element: 'PSY', rarity: 4, have: true },
    { name: 'Himeko • VK', imgIcon: '412', element: 'MECH', rarity: 5, have: true },
    //====================================================================================================================
    { name: 'Himeko • BR', imgIcon: '404', element: 'PSY', rarity: 5, have: false, status: 'available', version: '8.6', perma: true },
    

    { name: 'Kallen • SS', imgIcon: '111', element: 'PSY', rarity: 5, have: true },
    { name: 'Kallen • RI', imgIcon: '112', element: 'MECH', rarity: 4, have: true },
    { name: 'Kallen • S', imgIcon: '114', element: 'MECH', rarity: 4, have: true },


    { name: 'Kiana • WC', imgIcon: '101', element: 'MECH', rarity: 3, have: true },
    { name: 'Kiana • VR', imgIcon: '102', element: 'MECH', rarity: 4, have: true },
    { name: 'Kiana • DP', imgIcon: '104', element: 'PSY', rarity: 4, have: true },
    { name: 'Kiana • HoF', imgIcon: '106', element: 'IMG', rarity: 5, have: true },
    { name: 'Kiana • HoV', imgIcon: '113', element: 'BIO', rarity: 5, have: true },
    //====================================================================================================================
    { name: 'Kiana • KM', imgIcon: '103', element: 'BIO', rarity: 5, have: false, status: 'available', version: '8.6', perma: true },
    { name: 'Kiana • HoF', imgIcon: '105', element: 'PSY', rarity: 5, have: false, status: 'available', version: '8.6', perma: true },
    { name: 'Kiana • BD', imgIcon: '115', element: 'SD', rarity: 5, role: 'LoA', have: false, status: 'available', version: '8.7', p: 2 },


    { name: 'Mei • CI', imgIcon: '201', element: 'BIO', rarity: 3, have: true },
    { name: 'Mei • SD', imgIcon: '202', element: 'MECH', rarity: 4, have: true },
    { name: 'Mei • VB', imgIcon: '203', element: 'BIO', rarity: 4, have: true },
    { name: 'Mei • HoT', imgIcon: '205', element: 'PSY', rarity: 5, have: true },
    { name: 'Mei • HoO', imgIcon: '206', element: 'IMG', rarity: 5, have: true },
    //====================================================================================================================
    { name: 'Mei • LE', imgIcon: '204', element: 'PSY', rarity: 5, have: false, status: 'available', version: '8.6', perma: true },
    { name: 'Mei • XDC', imgIcon: '207', element: 'MECH', rarity: 5, role: 'GoI', have: false, status: 'available', version: '8.9', p: 2 },
    

    { name: 'Liliya', imgIcon: '421', element: 'MECH', rarity: 4, have: true },
    { name: 'Rozalia • MC', imgIcon: '422', element: 'PSY', rarity: 5, have: true },
    

    { name: 'Rita • PI', imgIcon: '702', element: 'MECH', rarity: 4, have: true },
    { name: 'Rita • UR', imgIcon: '703', element: 'PSY', rarity: 4, have: true },
    { name: 'Rita • FR', imgIcon: '705', element: 'QUA', rarity: 5, have: true },
    //====================================================================================================================
    { name: 'Rita • AK', imgIcon: '704', element: 'BIO', rarity: 5, have: false, status: 'available', version: '8.6', perma: true },
    { name: 'Rita • SA', imgIcon: '706', element: 'MECH', rarity: 5, have: false, status: 'available', version: '8.6', perma: true },
    { name: 'Rita • ME', imgIcon: '707', element: 'IMG', rarity: 5, role: 'WoD', have: false, status: 'available', version: '8.7', p: 2 },


    { name: 'Sakura • GM', imgIcon: '211', element: 'BIO', rarity: 4, have: true },
    { name: 'Sakura • GM', imgIcon: '212', element: 'MECH', rarity: 5, have: true },
    { name: 'Sakura • FS', imgIcon: '213', element: 'BIO', rarity: 4, have: true },
    { name: 'Sakura • DJ', imgIcon: '214', element: 'BIO', rarity: 4, have: true },
    

    { name: 'Seele • SP', imgIcon: '711', element: 'QUA', rarity: 4, have: true },
    { name: 'Seele • SN ', imgIcon: '712', element: 'QUA', rarity: 5, have: true },
    //====================================================================================================================
    { name: 'Seele • SN', imgIcon: '713', element: 'QUA', rarity: 5, have: false, status: 'available', version: '8.6', perma: true },
    { name: 'Seele • HoR', imgIcon: '714', element: 'PSY', rarity: 5, have: false, status: 'available', version: '9.1', perma: true }, //3-80
    { name: 'Seele • WP', imgIcon: '715', element: 'SD', rarity: 5, role: '', have: false, status: 'available', version: '8.9', p: 2 }, //EDIT


    { name: 'Sushang • JK', imgIcon: '3101', element: 'PSY', rarity: 5, have: false, status: 'available', version: '8.6', perma: true }, //1-80
    { name: 'Sushang • PS', imgIcon: '3102', element: 'BIO', rarity: 5, role: 'LoA', have: false, status: 'available', version: '8.6', p: 2 },


    { name: 'Theresa • VP', imgIcon: '501', element: 'PSY', rarity: 4, have: true },
    { name: 'Theresa • SR', imgIcon: '503', element: 'PSY', rarity: 4, have: true },
    { name: 'Theresa • SA', imgIcon: '506', element: 'BIO', rarity: 4, have: true },
    { name: 'Theresa • LV', imgIcon: '507', element: 'PSY', rarity: 5, have: true },
    { name: 'Theresa • LK', imgIcon: '511', element: 'BIO', rarity: 4, have: true },
    //====================================================================================================================
    { name: 'Theresa • VE', imgIcon: '502', element: 'MECH', rarity: 5, have: false, status: 'available', version: '8.6', perma: true },
    { name: 'Theresa • CH', imgIcon: '504', element: 'BIO', rarity: 5, have: false, status: 'available', version: '8.6', perma: true },
    { name: 'Theresa • SI', imgIcon: '512', element: 'QUA', rarity: 5, role: 'WS', have: false, status: 'available', version: '8.7', p: 2 },


    { name: 'Mobius', imgIcon: '2301', element: 'MECH', rarity: 5, have: true },
    { name: 'Natasha', imgIcon: '2401', element: 'IMG', rarity: 4, have: true },
    { name: 'Carole Pepper', imgIcon: '2501', element: 'MECH', rarity: 4, have: true },
    { name: 'Pardofelis', imgIcon: '2601', element: 'IMG', rarity: 4, have: true },
    { name: 'Eden', imgIcon: '2801', element: 'IMG', rarity: 4, have: true },
    { name: 'Ai Hyperion', imgIcon: '3201', element: 'MECH', rarity: 4, have: true },
    { name: 'Susannah', imgIcon: '3301', element: 'QUA', rarity: 4, have: true },
    { name: 'Schariac', imgIcon: '3401', element: 'MECH', rarity: 5, have: true },
    { name: 'PROMETHEUS', imgIcon: '3501', element: 'IMG', rarity: 4, have: true },
    { name: 'Shigure Kira', imgIcon: '3601', element: 'MECH', rarity: 4, have: true },
    { name: 'Sirin', imgIcon: '3701', element: 'IMG', rarity: 5, have: true },
    { name: 'Vill-V', imgIcon: '3001', element: 'QUA', rarity: 5, have: true },
    //====================================================================================================================
    { name: 'Aponia', imgIcon: '2701', element: 'PSY', rarity: 5, have: false, status: 'available', version: '8.7', perma: true },

    //COLLAB characters
    { name: 'Fischl', imgIcon: '2101', element: 'BIO', rarity: 4, have: true, collab: true, collabStatus: ['mhy'] },
    //====================================================================================================================
    { name: 'Sparkle', imgIcon: '20901', element: 'QUA', rarity: 5, role: 'WS', have: false, status: 'available', version: '9.1', collab: true, collabStatus: ['mhy'], p: 2 },
    { name: 'Asuka', imgIcon: '901', element: 'BIO', rarity: 4, have: false, collab: true, collabStatus: ['solo'] },
    { name: 'Keqing', imgIcon: '2001', rarity: 4, have: false, status: 'guest', collab: true, collabStatus: ['mhy', 'solo'] },

    //PART 1 - ORGANIZED BY CHARA > HAVE
    { name: 'Coralie • VB', imgIcon: '20301', element: 'PSY', rarity: 4, role: 'RoO', have: true, p: 2 },
    //====================================================================================================================
    { name: 'Coralie • BF', imgIcon: '20302', element: 'MECH', rarity: 5, role: 'RoO', have: false, status: 'available', version: '8.8', p: 2 },

    { name: 'Helia • VB', imgIcon: '20401', element: 'MECH', rarity: 4, role: 'WS', have: true, p: 2 },
    //====================================================================================================================
    { name: 'Helia • PA', imgIcon: '20402', element: 'BIO', rarity: 5, role: 'GoI', have: false, status: 'available', version: '8.8', p: 2 },

    //====================================================================================================================
    { name: 'Senadina', imgIcon: '20201', element: 'SD', rarity: 5, role: 'WS', have: false, status: 'available', version: '8.8', p: 2 },
    { name: 'Thelema', imgIcon: '20501', element: 'MECH', rarity: 5, role: 'WoD', have: false, status: 'available', version: '8.4', p: 2 },
    { name: '"Lantern"', imgIcon: '20601', element: 'PSY', rarity: 5, role: 'WoD', have: true, p: 2 },
    { name: 'Songque', imgIcon: '20701', element: 'SD', rarity: 5, role: 'WoD', have: false, status: 'available', version: '8.6', p: 2 },
    { name: 'Vita', imgIcon: '20801', element: 'MECH', rarity: 5, role: 'RoO', have: false, status: 'available', version: '8.9', p: 2 },
    
    { name: 'Dreamseeker', imgIcon: '', element: 'IMG', gender: 'f', rarity: 5, role: 'WoD', have: false, status: 'new', version: '9.1', want: 2, p: 2 },
    
    // ---------------------------------------------------------------------
    // TEMPLATE: copy the line, remove the // and delete the fields you do not need.
    // What every field means and its values: GUIDE.md.   Icon too close / too far: zoom, iconX, iconY (see GUIDE.md).
    // { name: '', imgIcon: '', imgSprite: ['='], element: '', gender: '', rarity: , area: [''], role: '', have: false, status: '', version: '', want: , perma: true, collab: true, collabStatus: [''], out: false, p:  },
    // ---------------------------------------------------------------------
  ],
    // ---- paths (used by the home page, the Characters page and the popups) ----
  getIconPath: (c) => `../assets/charaid/HI3/${subfolder(c)}${Dex.iconName(c)}.png`,
  getElementPath: (c) => `../assets/others/Element/HI3_${c.element}.png`,
  getSpritePath: (c) => `../assets/Sprite/HI3/${subfolder(c)}${spriteFile(c)}.png`,
  getFallbackPath: () => Dex.FALLBACK_ICON, // same for every game (set in shared/js/common.js)

  // Big pictures: the character, then alternative outfits (imgSprite: ['=', 'Outfit/Folder/Image'])
  getSpritePaths: (c) => Dex.spriteList(c, (name) => `../assets/Sprite/HI3/${subfolder(c)}${name === Dex.iconName(c) ? spriteFile(c) : name}.png`, '../assets/Sprite/HI3/Outfit/'),
};

// collab characters have their pictures in the "Collab/" folder
function subfolder(c) {
  return c.collab ? 'Collab/' : '';
}

//   301 (3 digits) -> 60301     2801 (4 digits) -> 62801     20201 (5 digits) -> 3020201
const SPRITE_PREFIX = { 3: '60', 4: '6', 5: '30' };
function spriteFile(c) {
  const icon = Dex.iconName(c);
  return (SPRITE_PREFIX[icon.length] || '') + icon;
}
