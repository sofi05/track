const gameConfig = {
  id: 'hi3',
  characters: [
    //SOLO FOLDER
    { name: 'Ai Hyperion', imgName: 'Chrono_Navi', folder: 'SoloChara', spriteFolder: 'Ai', have: false, part: '1',
        spriteImages: ['Burning_Rescue_Soul', 'Indelible_Memories', 'Leisurely_Melody'], },
    {name: 'Aponia', imgName: 'Disciplinary_Perdition', folder:'SoloChara', spriteFolder: 'Aponia', have: false, part: '1',
        spriteImages: ['Butterfly_Dreams', 'Mesmerizing_Blue'], },

    { name: 'Bronya', imgName: 'Wolfs_Dawn', folder: 'Bronya', spriteFolder: 'Bronya', have: false, part: '1',
        spriteImages: ['White_Devil', 'Throatwort', 'Techno_Beats', 'School_Swimsuit', 'Nightfall_Witch','Midnight_Blues','Mercurial_Hatter','Helenas_Wings','Fleurs_du_Mal','Carrot_and_Beet_Soup','Candy_Demon','Blue_Sky','Blue_Reunion',
                    'White_ARC', 'Arc_City_Blues', 'Old_Times',
                    'Ultraviolet_Kinetik', 'Magic_Girl_Bronya', 'Bestial_Afterburn',
                    'Seaside_Vibes',
                    'Outstanding_Attitude', 'Neonized', 'Heart_of_the_Night'], },

    { name: 'Carole', imgName: 'Sweet_n_Spicy', folder:'SoloChara', spriteFolder: 'Carole', have: false, part: '1',
        spriteImages: ['Let_the_Class_End', 'Special_Blend'], },

    { name: 'Coralie', imgName: 'Valkyrie_Blastmetal', folder: 'Coralie', spriteFolder: 'Coralie', have: false, part: '2',
        spriteImages: ['Puppy_Patrol'], },

    { name: 'Durandal', imgName: 'Bright_Knight_-_Excelsis', folder: 'Durandal', spriteFolder: 'Durandal', have: false, part: '1',
        spriteImages: ['Emerald_of_Alfheim', 'Starlit_Evening', 'Purrfect_Holiday', 'Misty_Lavender', 'Lord_Paramount', 'Gale_Hunter',
                    'Heavenward_Dragon', 'Pumping_Heart', 'Red_Dragon_Rises', 'Stellar_Promise',
                    'Nibelungen_Traumlied'], },

    { name: 'Eden', imgName: 'Golden_Diva', folder:'SoloChara', spriteFolder: 'Eden', have: false, part: '1',
        spriteImages: ['Crimson_Carol', 'Flowing_Rhyme'], },

    { name: 'Elysia', imgName: 'Miss_Pink_Elf', folder: 'Elysia', spriteFolder: 'Elysia', have: false, part: '1',
        spriteImages: ['Faded_Miss_Elf', 'Miss_Pink', 'Summer_Miss_Elf',
                    'Peachy_Spring'], },


    { name: 'Erdos', imgName: 'Valkyrie_Boltstorm', folder: 'Erdos', spriteFolder: 'Erdos', have: false, part: '2',
        spriteImages: ['Salted_Plum'], },


    { name: 'FuHua', imgName: 'Valkyrie_Accipiter', folder: 'FuHua', spriteFolder: 'FuHua', have: false, part: '1',
        spriteImages: ['Autumn_Shades', 'Blood_Voivode', 'Blue_Swallow', 'Dark_Butler', 'Hawk_of_the_Yard', 'Onyx_Simurgh', 'Rustic_Noir', 'Seagulls_Soar', 'Spring_Traveler', 'Fire_and_Sword', 'Sword_and_Fire',
                    'Cerulean_Court', 'Taixuan_Impression',
                    'Ooh_Summer', 'Turn_Up_the_Music',
                    'Crane_of_Taixuan'], },

    { name: 'Griseo', imgName: 'Starry_Impression', folder: 'Griseo', spriteFolder: 'Griseo', have: false, part: '1',
        spriteImages: ['Everdream', 'Maroon_Riding_Hood', 'Summer_as_a_Painting', 
                    'Gokudo_Brushstrokes','Star-Speckled_Blue'], },

    { name: 'Himeko', imgName: 'Battle_Storm', folder: 'Himeko', spriteFolder: 'Himeko', have: false, part: '1',
        spriteImages: ['Rouged_Mayumi', 'Vernal_Brocade', 
                    'Rosy_Passion',
                    'Frisian_Cutlass',
                    'Desert_Camouflage', 'Summer_Party', 'Red_Mist', 'Origin', 'Night_Enchantress', 'Holy_Rose', 'Black_Mamba'], },

    { name: 'Kallen', imgName: 'Sundenjager', folder: 'Kallen', spriteFolder: 'Kallen', have: false, part: '1',
        spriteImages: ['Blanc_X_-_Kata', 'Hanami_Daimyo', 'Pumpkin_Hunter', 'Snow_Fairy'], },

    { name: 'Kiana', imgName: 'White_Comet', folder: 'Kiana', spriteFolder: 'Kiana', have: false, part: '1',
        spriteImages: ['Bastets_Secret', 'Frostmoon_Bunny', 'Honkai_World_Diva', 'Lavender_Love', 'Lemon_Soda', 'Ocean_Ranger','Prodigal_Girl','Sea_Breeze','Starless_Rift','Sunny_Beach','Winter_Princess',
                    'Born_in_Flames','Flowering_Luminance', 'Time_Runner',
                    'Frigid_Empress','Magic_Girl_Sirin','Parasol_Kaiserin',
                    'Peak_Sync_PS','Radiant_Blaze','Red_Lictor',
                    'Selenic_Ripples'], },

    { name: 'Shigure Kira', imgName: 'Sugary_Starburst', folder:'SoloChara', spriteFolder: 'Kira', have: false, part: '1',
        spriteImages: ['Dreamy_Melody', 'Fuzzy_Pink_Love', 'Tonights_My_Time'], },

    { name: '"Lantern"', imgName: 'Lone_Destruction_-_Shadowchaser', folder:'SoloChara', spriteFolder: 'Lantern', have: false, part: '2',status: 'new',
        spriteImages: ['At_Your_Service'], },

    { name: 'Mei', imgName: 'Crimson_Impulse', folder: 'Mei', spriteFolder: 'Mei', have: false, part: '1',
        spriteImages: ['Aeterna_Purum', 'Blue_Memories', 'Hind_of_Noel', 'Soul_Symphony','Vast_Ocean',
                    'Aqua_Chime','Eventide_Phantom','Gardenia','Scorching_Golden_Thunder','Ultramarine_Octave',
                    'Aqueous_Springtide','Haunted_Dusk','Nocturne_Ablaze','Rainy_Springtide',
                    'Orochi_Cuirass','Thunderbolt_Drive',
                    'Crooning_Tides'], },

    { name: 'Schariac', imgName: 'Dreamweaver', folder:'SoloChara', spriteFolder: 'Misteln', have: false, part: '1',
        spriteImages: ['Lulling_Waves', 'Silky_Violet_Dream'], },

    { name: 'Mobius', imgName: 'Infinite_Ouroboros', folder:'SoloChara', spriteFolder: 'Mobius', have: false, part: '1',
        spriteImages: ['Daughter_of_Corals', 'Scorching_Gravel'], },

    { name: 'Natasha', imgName: 'Midnight_Absinthe', folder:'SoloChara', spriteFolder: 'Natasha', have: false, part: '1',
        spriteImages: ['Absinthe_Dream', 'Midnight_Martini', 'Spectral_Raven','Tipsy_Hour'], },

    { name: 'Liliya', imgName: 'Blueberry_Blitz', folder:'Olenyeva', spriteFolder: 'Olenyeva', have: false, part: '1',
        spriteImages: ['Wave_Galactica', 'Shelleys_Beastliya', 'Lavender_Glow'], },

    { name: 'Rozalia', imgName: 'Fervent_Tempo', folder:'Olenyeva', spriteFolder: 'Olenyeva', have: false, part: '1',
        spriteImages: ['Violet_Dreamscape', 'Gothic_Rozamary', 'Coral_Sunrise',
                    '8-bit_Fever'], },

    { name: 'Pardofelis', imgName: 'Reverist_Calico', folder:'SoloChara', spriteFolder: 'Pardofelis', have: false, part: '1',
        spriteImages: ['Meowtose_Macchiato', 'Midsummer_Collector', 'Simply_Orange', 'Spectral_Claws'], },

    { name: 'PROMETHEUS', imgName: 'Terminal_Aide_0017', folder:'SoloChara', spriteFolder: 'Prometheus', have: false, part: '1',
        spriteImages: ['Fizzy_Ray', 'Saccharine_Lash-Out'], },

    { name: 'Rita', imgName: 'Argent_Knight_-_Artemis', folder: 'Rita', spriteFolder: 'Rita', have: false, part: '1',
        spriteImages: ['Dame_de_Cur', 'Dusky_Murmurs', 'Hanafuda_Oyabun', 'Valkyrie_Dawn','Victoria','Vow_of_Roses',
                    'Maid_of_Celestia','Icy_Sea_Spray','Maid_of_Celestia','Summer_Nights_Dream','Sweet_Osmanthus','Deepwood_Thyme',
                    'Eternal_Dance'], },

    { name: 'Sakura', imgName: 'Goushinnso_Memento', folder: 'Sakura', spriteFolder: 'Sakura', have: false, part: '1',
        spriteImages: ['Blanc_X_-_Ichijin', 'Frozen_Sakura','Midnight_Marigold', 'Summer_Dream','Summer_Sakura',
                    'Blooming_Maiko','Dream_Raiment','Hyoukai_Sonata','Mauve_Cascade','Rising_Moon','Sakura_Summer','Sublime_Lotus',
                    'Neon_Shade','Peach_Sanctuary','Shiden_Kasumi','Shimmering_Wavelets'], },

    { name: 'Seele', imgName: 'Stygian_Nymph', folder: 'Seele', spriteFolder: 'Seele', have: false, part: '1',
        spriteImages: ['Azure_Memories', 'Dream_Seeker', 'Papilio_Lily',
                    'Estonia_in_Spring', 'Mirrored_Flourishes','Stygian_Seafoam',
                    'Eternal_Nights_Embrace',
                    'Magic_Girl_Seele','On_Fair_Clouds'], },

    { name: 'Senadina', imgName: 'Deepspace_Anchor_-_First_Light', folder:'SoloChara', spriteFolder: 'Senadina', have: false, part: '2',
        spriteImages: ['Steering_Inequations'], },

    { name: 'Sirin', imgName: 'Miracle_Magical_Girl', folder:'SoloChara', spriteFolder: 'Sirin', have: false, part: '1',
        spriteImages: ['Magic_Academy_Uniform', 'Soaring_Wings'], },

    { name: 'Susannah', imgName: 'Valkyrie_Quicksand', folder:'SoloChara', spriteFolder: 'Susannah', have: false, part: '1',
        spriteImages: ['Bear_Squad_go', 'Immortal_Blades_Uniform', 'Sandy_Coast'], },

    { name: 'Sushang', imgName: 'Jade_Knight', folder: 'Sushang', spriteFolder: 'Sushang', have: false, part: '1',
        spriteImages: ['Auspicious_Dazzle', 'Midnight_Moon'], },
    
    { name: 'Thelema', imgName: 'Mad_Pleasure_-_Shadowbringer', folder:'SoloChara', spriteFolder: 'Thelema', have: false, part: '2', status: 'new',
        spriteImages: ['Gentle_is_the_Night', 'Roseate_Summer'], },
    
    { name: 'Theresa', imgName: 'Valkyrie_Pledge', folder: 'Theresa', spriteFolder: 'Theresa', have: false, part: '1',
        spriteImages: ['Before_the_Dawn', 'Blood_Knight_-_Moonlight', 'Campus_Detective','Empyrean_Psalms', 'Grand_Sage','Heat_of_Trifolium','Lilac_of_the_Valley', 'Magic_Girl_Teriri','Morning_Sunshine','Ouranons_Forgiveness','Pledge','Rosy_Bridesmaid','Shallow_Sunset','Starry_Night','Sugar_Haw_Child','Wonderland_Trek',
                    'Herald_of_Spring','Orchids_Night','Startold_Fortune',
                    'Redolent_in_Red','Till_Death_Do_Us_Part',
                    'Verdant_Sky'], },

    { name: 'Vill-V', imgName: 'Helical_Contraption', folder:'SoloChara', spriteFolder: 'Vill-V', have: false, part: '2',
        spriteImages: ['Im_the_Storm'], },

    { name: 'Vita', imgName: 'Lone_Planetfarer', folder:'SoloChara', spriteFolder: 'Vita', have: false, part: '2',
        spriteImages: ['Eldritch_Vantage'], },
    
    // Add more characters here
  ],


  pathPrefix: "../assets/charaid/Honkai/",
  spritePrefix: ".../assets/Sprite/HI3/Outfit/", 

  getImgPath: (char) => `${gameConfig.pathPrefix}${char.folder}/${char.imgName}.png`,
  getSpritePath: (char) => (char.spriteImages || []).map( 
    img =>`${gameConfig.spritePrefix}${char.spriteFolder}/${img}.png`),
};