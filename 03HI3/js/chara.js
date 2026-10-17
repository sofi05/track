window.CHARA_CONFIG = {
  gameId: 'HonkaiImpact', // key of this game in shared/js/vs.js
  characters: [
    //PART 1 - ORGANIZED BY CHARA > HAVE
    { name: 'Bronya • BN', imgName: 'Black_Nucleus', folder:'Bronya', have: true, element: 'BIO', rarity: 5, part:'1' },
    { name: 'Bronya • HB', imgName: 'Haxxor_Bunny', folder:'Bronya', have: true, element: 'PSY', rarity: 4, part:'1' },
    { name: 'Bronya • HoR', imgName: 'Herrscher_of_Reason', folder:'Bronya', have: true, element: 'MECH', rarity: 5, part:'1' },
    { name: 'Bronya • HoT', imgName: 'Herrscher_of_Truth', folder:'Bronya', have: true, element: 'IMG', rarity: 5, part:'1' },
    { name: 'Bronya • SS', imgName: 'Snowy_Sniper', folder:'Bronya', have: true, element: 'BIO', rarity: 4, part:'1' },
    { name: 'Bronya • VC', imgName: 'Valkyrie_Chariot', folder:'Bronya', have: true, element: 'PSY', rarity: 3, part:'1' },
    { name: 'Bronya • WD', imgName: 'Wolfs_Dawn', folder:'Bronya', have: true, element: 'PSY', rarity: 4, part:'1' },
    { name: 'Bronya • YA', imgName: 'Yamabuki_Armor', folder:'Bronya', have: true, element: 'PSY', rarity: 4, part:'1' },
    //====================================================================================================================
    { name: 'Bronya • DB', imgName: 'Dimension_Breaker', folder:'Bronya', have: false, element: 'MECH', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true }, // 1 -80
    { name: 'Bronya • S', imgName: 'Silverwing_-_N-EX', folder:'Bronya', have: false, element: 'BIO', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true, apho: true }, //4 -80

    { name: 'Durandal • VG', imgName: 'Valkyrie_Gloria', folder:'Durandal', have: true, element: 'QUA', rarity: 4, part:'1' },
    { name: 'Durandal • PE', imgName: 'Palatinus_Equinox', folder:'Durandal', have: true, element: 'IMG', rarity: 5, part:'1'},
    //====================================================================================================================
    { name: 'Durandal • BN', imgName: 'Bright_Knight_-_Excelsis', folder:'Durandal', have: false, element: 'MECH', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true },
    { name: 'Durandal • DA', imgName: 'Dea_Anchora', folder:'Durandal', have: false, element: 'BIO', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true },
    
    { name: 'Elysia • HoH', imgName: 'Herrscher_of_Human_-_Ego', folder:'Elysia', have: true, element: 'PSY', rarity: 5, part:'1' },
    { name: 'Elysia • MPE', imgName: 'Miss_Pink_Elf', folder:'Elysia', have: true, element: 'PSY', rarity: 5, part:'1'},

    { name: 'Fu Hua • HoS', imgName: 'Herrscher_of_Sentience', folder:'FuHua', have: true, element: 'BIO', rarity: 5, part:'1' },
    { name: 'Fu Hua • NS', imgName: 'Night_Squire', folder:'FuHua', have: true, element: 'BIO', rarity: 4, part:'1' },
    { name: 'Fu Hua • VA', imgName: 'Valkyrie_Accipiter', folder:'FuHua', have: true, element: 'PSY', rarity: 4, part:'1' },
    { name: 'Fu Hua • AE', imgName: 'Azure_Empyrea', folder:'FuHua', have: true, element: 'PSY', rarity: 5, part:'1' },
    //====================================================================================================================
    { name: 'Fu Hua • FoV', imgName: 'Fenghuang_of_Vicissitude', folder:'FuHua', have: false, element: 'BIO', rarity: 5, part:'1', status: 'available', version:'8.6' },
    { name: 'Fu Hua • P', imgName: 'Phoenix', folder:'FuHua', have: false, element: 'PSY', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true }, // 2- 80
    { name: 'Fu Hua • SK', imgName: 'Shadow_Knight', folder:'FuHua', have: false, element: 'MECH', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true },

    { name: 'Griseo • CE', imgName: 'Cosmic_Expression', folder:'Griseo', have: true, element: 'SD', rarity: 4, part:'1' },
    { name: 'Griseo • SI', imgName: 'Starry_Impression', folder:'Griseo', have: true, element: 'PSY', rarity: 4, part:'1' },

    { name: 'Himeko • BS', imgName: 'Battle_Storm', folder:'Himeko', have: true, element: 'BIO', rarity: 3, part:'1' },
    { name: 'Himeko • K', imgName: 'Kriegsmesser', folder:'Himeko', have: true, element: 'PSY', rarity: 4, part:'1' },
    { name: 'Himeko • SF', imgName: 'Scarlet_Fusion', folder:'Himeko', have: true, element: 'MECH', rarity: 4, part:'1' },
    { name: 'Himeko • VT', imgName: 'Valkyrie_Triumph', folder:'Himeko', have: true, element: 'BIO', rarity: 4, part:'1' },
    { name: 'Himeko • VK', imgName: 'Vermilion_Knight_-_Eclipse', folder:'Himeko', have: true, element: 'MECH', rarity: 5, part:'1' },
    //====================================================================================================================
    { name: 'Himeko • BR', imgName: 'Blood_Rose', folder:'Himeko', have: false, element: 'PSY', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true },
    
    { name: 'Kallen • RI', imgName: 'Ritual_Imayoh', folder:'Kallen', have: true, element: 'MECH', rarity: 4, part:'1' },
    { name: 'Kallen • SS', imgName: 'Sixth_Serenade', folder:'Kallen', have: true, element: 'PSY', rarity: 5, part:'1' },
    { name: 'Kallen • S', imgName: 'Sundenjager', folder:'Kallen', have: true, element: 'MECH', rarity: 4, part:'1' },

    { name: 'Kiana • DP', imgName: 'Divine_Prayer', folder:'Kiana', have: true, element: 'PSY', rarity: 4, part:'1' },
    { name: 'Kiana • HoF', imgName: 'Herrscher_of_Finality', folder:'Kiana', have: true, element: 'IMG', rarity: 5, part:'1' },
    { name: 'Kiana • HoV', imgName: 'Herrscher_of_the_Void', folder:'Kiana', have: true, element: 'BIO', rarity: 5, part:'1' },
    { name: 'Kiana • WC', imgName: 'White_Comet', folder:'Kiana', have: true, element: 'MECH', rarity: 3, part:'1' },
    { name: 'Kiana • VR', imgName: 'Valkyrie_Ranger', folder:'Kiana', have: true, element: 'MECH', rarity: 4, part:'1'},
    //====================================================================================================================
    { name: 'Kiana • HoF', imgName: 'Herrscher_of_Flamescion', folder:'Kiana', have: false, element: 'PSY', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true },
    { name: 'Kiana • KM', imgName: 'Knight_Moonbeam', folder:'Kiana', have: false, element: 'BIO', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true },
    
    { name: 'Mei • CI', imgName: 'Crimson_Impulse', folder:'Mei', have: true, element: 'BIO', rarity: 3, part:'1' },
    { name: 'Mei • HoO', imgName: 'Herrscher_of_Origin', folder:'Mei', have: true, element: 'IMG', rarity: 5, part:'1' },
    { name: 'Mei • SD', imgName: 'Shadow_Dash', folder:'Mei', have: true, element: 'MECH', rarity: 4, part:'1' },
    { name: 'Mei • VB', imgName: 'Valkyrie_Bladestrike', folder:'Mei', have: true, element: 'BIO', rarity: 4, part:'1' },
    { name: 'Mei • HoT', imgName: 'Herrscher_of_Thunder', folder:'Mei', have: true, element: 'PSY', rarity: 5, part:'1' }, 
    //====================================================================================================================
    { name: 'Mei • LE', imgName: 'Lightning_Empress', folder:'Mei', have: false, element: 'PSY', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true },
    
    { name: 'Liliya', imgName: 'Blueberry_Blitz', folder:'Olenyeva', have: true, element: 'MECH', rarity: 4, part:'1' },
    { name: 'Rozalia • MC', imgName: 'Molotov_Cherry', folder:'Olenyeva', have: true, element: 'PSY', rarity: 5, part:'1' },
    
    { name: 'Rita • FR', imgName: 'Fallen_Rosemary', folder:'Rita', have: true, element: 'QUA', rarity: 5, part:'1' },
    { name: 'Rita • PI', imgName: 'Phantom_Iron', folder:'Rita', have: true, element: 'MECH', rarity: 4, part:'1' },
    { name: 'Rita • UR', imgName: 'Umbral_Rose', folder:'Rita', have: true, element: 'PSY', rarity: 4, part:'1' },
    //====================================================================================================================
    { name: 'Rita • AK', imgName: 'Argent_Knight_-_Artemis', folder:'Rita', have: false, element: 'BIO', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true }, 
    { name: 'Rita • SA', imgName: 'Spina_Astera', folder:'Rita', have: false, element: 'MECH', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true },
    
    { name: 'Sakura • DJ', imgName: 'Darkbolt_Jonin', folder:'Sakura', have: true, element: 'BIO', rarity: 4, part:'1' },
    { name: 'Sakura • FS', imgName: 'Flame_Sakitama', folder:'Sakura', have: true, element: 'BIO', rarity: 4, part:'1' },
    { name: 'Sakura • GM', imgName: 'Goushinnso_Memento', folder:'Sakura', have: true, element: 'MECH', rarity: 5, part:'1' },
    { name: 'Sakura • GM', imgName: 'Gyakushinn_Miko', folder:'Sakura', have: true, element: 'BIO', rarity: 4, part:'1' },

    { name: 'Seele • SP', imgName: 'Swallowtail_Phantasm', folder:'Seele', have: true, element: 'QUA', rarity: 4, part:'1' },
    //====================================================================================================================
    { name: 'Seele • HoR', imgName: 'Herrscher_of_Rebirth', folder:'Seele', have: false, element: 'PSY', rarity: 5, part:'1', status: 'available', version:'8.6' }, //3-80
    { name: 'Seele • SN', imgName: 'Starchasm_Nyx', folder:'Seele', have: false, element: 'QUA', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true },
    { name: 'Seele • SN ', imgName: 'Stygian_Nymph', folder:'Seele', have: false, element: 'QUA', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true },
    
    { name: 'Sushang • JK', imgName: 'Jade_Knight', folder:'Sushang', have: false, element: 'PSY', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true }, //1-80
    
    { name: 'Theresa • LK', imgName: 'Luna_Kindred', folder:'Theresa', have: true, element: 'BIO', rarity: 4, part:'1' },
    { name: 'Theresa • SR', imgName: 'Sakuno_Rondo', folder:'Theresa', have: true, element: 'PSY', rarity: 4, part:'1' },
    { name: 'Theresa • SA', imgName: 'Starlit_Astrologos', folder:'Theresa', have: true, element: 'BIO', rarity: 4, part:'1' },
    { name: 'Theresa • VP', imgName: 'Valkyrie_Pledge', folder:'Theresa', have: true, element: 'PSY', rarity: 4, part:'1' },
    { name: 'Theresa • LV', imgName: 'Lunar_Vow_-_Crimson_Love', folder:'Theresa', have: true, element: 'PSY', rarity: 5, part:'1'},
    //====================================================================================================================
    { name: 'Theresa • VE', imgName: 'Violet_Executer', folder:'Theresa', have: false, element: 'MECH', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true },
    { name: 'Theresa • CH', imgName: 'Celestial_Hymn', folder:'Theresa', have: false, element: 'BIO', rarity: 5, part:'1', status: 'available', version:'8.6', perma: true },
    
    { name: 'Ai Hyperion', imgName: 'Chrono_Navi', folder:'SoloChara', have: true, element: 'MECH', rarity: 4, part:'1' }, 
    { name: 'Schariac', imgName: 'Dreamweaver', folder:'SoloChara', have: true, element: 'MECH', rarity: 5, part:'1' },
    { name: 'Eden', imgName: 'Golden_Diva', folder:'SoloChara', have: true, element: 'IMG', rarity: 4, part:'1' },
    { name: 'Natasha', imgName: 'Midnight_Absinthe', folder:'SoloChara', have: true, element: 'IMG', rarity: 4, part:'1' },
    { name: 'Sirin', imgName: 'Miracle_Magical_Girl', folder:'SoloChara', have: true, element: 'IMG', rarity: 5, part:'1' },
    { name: 'Pardofelis', imgName: 'Reverist_Calico', folder:'SoloChara', have: true, element: 'IMG', rarity: 4, part:'1' },
    { name: 'Carole Pepper', imgName: 'Sweet_n_Spicy', folder:'SoloChara', have: true, element: 'MECH', rarity: 4, part:'1', apho: true },
    { name: 'PROMETHEUS', imgName: 'Terminal_Aide_0017', folder:'SoloChara', have: true, element: 'IMG', rarity: 4, part:'1' },
    { name: 'Susannah', imgName: 'Valkyrie_Quicksand', folder:'SoloChara', have: true, element: 'QUA', rarity: 4, part:'1' },
    { name: 'Shigure Kira', imgName: 'Sugary_Starburst', folder:'SoloChara', have: true, element: 'MECH', rarity: 4, part:'1' },
    { name: 'Mobius', imgName: 'Infinite_Ouroboros', folder:'SoloChara', have: true, element: 'MECH', rarity: 5, part:'1'},
    //====================================================================================================================
    { name: 'Aponia', imgName: 'Disciplinary_Perdition', folder:'SoloChara', have: false, element: 'BIO', rarity: 5, part:'1', status: 'available', version:'8.7', perma: true },
    { name: 'Vill-V', imgName: 'Helical_Contraption', folder:'SoloChara', have: true, element: 'QUA', rarity: 5, part:'1'},

    //COLLAB characters
    { name: 'Fischl', imgName: 'Prinzessin_der_Verurteilung', folder:'All_Collabs', have: true, element: 'BIO', rarity: 4, part:'1', collab: true },
    //====================================================================================================================
    { name: 'Sparkle', imgName: 'Thousand-Faced_Maestro_-_Cameo', folder:'All_Collabs', have: false, element: 'QUA', rarity: 5, part:'2', status: 'available', collab: true, spec:'WS', version:'8.8' },

    //PART 1 - ORGANIZED BY CHARA > HAVE
    { name: 'Coralie • VB', imgName: 'Valkyrie_Blastmetal', folder:'Coralie', have: true, element: 'PSY', rarity: 4, part:'2', spec:'RoO' },
    //====================================================================================================================
    { name: 'Coralie • BF', imgName: 'Behold_Fate-Defying_Dragon', folder:'Coralie', have: false, element: 'MECH', rarity: 5, part:'2', spec:'RoO', status: 'available', version:'8.8' }, 

    { name: 'Erdös • VB', imgName: 'Valkyrie_Boltstorm', folder:'Erdos', have: true, element: 'MECH', rarity: 4, part:'2', spec:'WS'},
    //====================================================================================================================
    { name: 'Erdös • PA', imgName: 'Planar_Armament_-_Warped_Spacetime', folder:'Erdos', have: false, element: 'BIO', rarity: 5, part:'2', status: 'available', spec:'GoI', version:'8.8' },

    { name: 'Elysia • HLE', imgName: 'Hi_Love_Elf', folder:'Elysia', have: true, element: 'SD', rarity: 5, part:'2', spec:'GoI' },
    //====================================================================================================================
    { name: 'Durandal • RS', imgName: 'Reign_Solaris', folder:'Durandal', have: false, element: 'IMG', rarity: 5, part:'2', status: 'available', spec:'LoA', version:'8.9'  },
    { name: 'Kiana • BD', imgName: 'Ba-Dum_Fiery_Wishing_Star', folder:'Kiana', have: false, element: 'SD', rarity: 5, part:'2', status: 'available', spec:'LoA', version:'8.7'  }, 
    { name: 'Senadina', imgName: 'Deepspace_Anchor_-_First_Light', folder:'SoloChara', have: false, element: 'SD', rarity: 5, part:'2', status: 'available', spec:'WS', version:'8.8'},
    { name: 'Songque', imgName: 'Jovial_Deception_-_Shadowdimmer', folder:'SoloChara', have: false, element: 'SD', rarity: 5, part:'2', status: 'available', spec:'WoD', version:'8.6' },
    { name: '"Lantern"', imgName: 'Lone_Destruction_-_Shadowchaser', folder:'SoloChara', have: false, element: 'PSY', rarity: 5, part:'2', status: 'available', spec:'WoD', version:'8.5' }, 
    { name: 'Thelema', imgName: 'Mad_Pleasure_-_Shadowbringer', folder:'SoloChara', have: false, element: 'MECH', rarity: 5, part:'2', status: 'available', spec:'WoD', version:'8.4' },
    { name: 'Vita', imgName: 'Lone_Planetfarer', folder:'SoloChara', have: false, element: 'MECH', rarity: 5, part:'2', status: 'available', spec:'RoO', version:'8.9' }, 
    { name: 'Theresa • SI', imgName: 'Schicksals_Imperative', folder:'Theresa', have: false, element: 'QUA', rarity: 5, part:'2', status: 'available', spec:'WS', version:'8.7' },
    { name: 'Sushang • PS', imgName: 'Peregrine_Sword', folder:'Sushang', have: false, element: 'BIO', rarity: 5, part:'2', status: 'available', spec:'LoA', version:'8.6' }, 
    { name: 'Rita • ME', imgName: 'Miss_Espionage', folder:'Rita', have: false, element: 'IMG', rarity: 5, part:'2', status: 'available', spec:'WoD',version: '8.7' },
    { name: 'Mei • XDC', imgName: 'Xentinel_Dawnbearing_Crescent', folder:'Mei', have: false, element: 'MECH', rarity: 5, part:'2', status: 'available', spec:'GoI',version: '8.9' },

    { name: 'Seele • WP', imgName: 'Wings_of_Panacea', folder:'Seele', have: false, element: 'SD', rarity: 5, part:'2', status: 'new', spec:'',version: '8.9' }, //EDIT
    // ---------------------------------------------------------------------
    // TEMPLATE (Honkai Impact): copy a line, remove the // and fill it in.
    //   No picture yet? Put a temporary one in assets/Temp/ with the SAME file name the real picture will have (e.g. 1511.png or .webp). It is used until the real one exists.
    //   { name: '', imgName: '', folder: '', outfitSprites: [''], have: false, element: '', rarity: 5, part: '2', spec: '',
    //     collab: true, status: 'soon', version: '', p: 1, perma: true, want: 1, out: false },
    //
    //   Needed:   name, imgName, folder, have, element, rarity, part
    //   Optional:
    //     outfitSprites  alternative outfits shown in the popup, e.g. ['Folder/Image'] (inside the Outfit sprite folder)
    //     spec           the character's spec (see Values)
    //     collab         true = collab character (Collab button)
    //     status         'new' / 'soon' = label + shown on the home page   'available' = rerun
    //     version, p     banner version and phase ('7.1', p: 2): countdown and colours
    //     perma          true = permanent banner (own row on the home page)
    //     want           1 = ★    2 = ☆   (marker on the home page)
    //     out            false = not out yet (greyed out, no label)
    //   Values:
    //     part: '1' | '2'     rarity: 3 | 4 | 5     element: IMG | SD | PSY | MECH | BIO | QUA
    //     spec: WoD | LoA | WS | GoI | RoO
    // ---------------------------------------------------------------------

    //  Element: IMG | SD | PSY | MECH | BIO | QUA
    //  Spec: WoD | LoA | WS | GoI | RoO
  ],
  // ---- paths (used by the home page, the Characters page and the popups) ----
  getIconPath: (c) => `../assets/charaid/Honkai/${c.folder}/${c.imgName || c.name}.png`,
  getElementPath: (c) => `../assets/others/HI3/Element/${c.element}.png`,
  getSpritePath: (c) => `../assets/Sprite/HI3/${c.folder}/${c.imgName || c.name}.png`,
  getFallbackPath: () => Dex.FALLBACK_ICON, // same for every game (set in shared/js/common.js)

  // Big pictures: the character, then alternative outfits (outfitSprites: ['Folder/Image'])
  getSpritePaths: (c) => Dex.spriteList(c, `../assets/Sprite/HI3/${c.folder}/${c.imgName || c.name}.png`, '../assets/Sprite/HI3/Outfit/'),
};
