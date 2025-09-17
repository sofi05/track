const gameConfig = {
  characters: [
    { name: 'Alhaitham', imgName: 'Alhatham', have: [false], status:'new',
        spriteImages: ['Noise_Filtering', 'Reading_Time'] },
        
    { name: 'Amber', imgName: 'Ambor', have: [true], 
        spriteImages: ['Warm_Greeting'] },

    { name: 'Ayato', have: [false], 
        spriteImages: ['Solemn_Countenance'] },

    { name: 'Baizhu', imgName: 'Baizhuer', have: [false], 
        spriteImages: ['Leisure_Time'] },

    { name: 'Barbara', have: [true], 
        spriteImages: ['Upbeat_Encouragement'] },

    { name: 'Bennett', have: [false], 
        spriteImages: ['Filled_With_Confidence','Upbeat_Encouragement'] },

    { name: 'Candace', have: [false], 
        spriteImages: ['Ready_for_Battle'] },

    { name: 'Charlotte', have: [false], 
        spriteImages: ['Photographic_Muse'] },

    { name: 'Chasca', have: [false], status:'new',
        spriteImages: ['Leisure_Time'] },

    { name: 'Chiori', have: [false], 
        spriteImages: ['All_Green_and_Good_to_Go'] },

    { name: 'Chongyun', have: [false], 
        spriteImages: ['Leisure_Time'] },

    { name: 'Collei', have: [true], 
        spriteImages: ['Looking_Around_Curiously'] },

    { name: 'Cyno', have: [false], 
        spriteImages: ['Ready_for_Battle'] },
    
    { name: 'Diluc', have: [false], 
        spriteImages: ['All_Green_and_Good_to_Go'] },
    
    { name: 'Diona', have: [false], 
        spriteImages: ['Leisure_Time'] },

    { name: 'Eula', have: [false], 
        spriteImages: ['Elegant_Countenance'] },

    { name: 'Faruzan', have: [false], 
        spriteImages: ['Casual_Conversation'] },

    { name: 'Fischl', have: [false], 
        spriteImages: ['Prinzessins_Majesty', 'Refined_Countenance'] },

    { name: 'Freminet', have: [true], 
        spriteImages: ['Guard_Up'] },

    { name: 'Gaming', have: [true], 
        spriteImages: ['Perfect_Partner'] },

    { name: 'Ganyu', have: [false], 
        spriteImages: ['Gentle_Countenance'] },

    { name: 'Gorou', have: [false], 
        spriteImages: ['All_Green_and_Good_to_Go'] },

    { name: 'Heizou', imgName: 'Heizo', have: [false], 
        spriteImages: ['Deep_Contemplation'] },

    { name: 'Jean', imgName: 'Qin', have: [true], 
        spriteImages: ['Leisure_Time'] },

    { name: 'Kaeya', have: [false], 
        spriteImages: ['Leisure_Time'] },

    { name: 'Kaveh', have: [true], 
        spriteImages: ['Careful_Negotiations'] },

    { name: 'Kazuha', have: [false], 
        spriteImages: ['Virtuoso_Performance'] },

    { name: 'Keqing', have: [false], 
        spriteImages: ['Ready_for_Battle'] },

    { name: 'Klee', have: [true], 
        spriteImages: ['Happy_Times'] },

    { name: 'Kokomi', have: [false], 
        spriteImages: ['Leisure_Time_Sangonomiya'] },

    { name: 'Layla', have: [false], 
        spriteImages: ['Thesis_Progression'] },

    { name: 'Lisa', have: [false], 
        spriteImages: ['Leisure_Time'] },

    { name: 'Lynette', imgName: 'Linette', have: [true], 
        spriteImages: ['Elegant_Greeting'] },

    { name: 'Lyney', imgName: 'Liney', have: [true], 
        spriteImages: ['Elegant_Greeting'] },

    { name: 'Mika', have: [true], 
        spriteImages: ['Striving_to_Negotiate'] },

    { name: 'Mona', have: [false], 
        spriteImages: ['Elegant_Countenance'] },

    { name: 'Mualani', have: [true], 
        spriteImages: ['Puffy_Polka'] },

    { name: 'Navia', have: [true], 
        spriteImages: ['Elegant_Countenance'] },

    { name: 'Neuvillette', have: [true], 
        spriteImages: ['Leisure_Time'] },

    { name: 'Ningguang', have: [false], 
        spriteImages: ['Refined_Countenance'] },

    { name: 'Noelle', imgName: 'Noel', have: [false], 
        spriteImages: ['Elegant_Countenance'] },

    { name: 'Raiden Shogun', imgName: 'Shougun', spriteFolder: 'Raiden', have: [true], 
        spriteImages: ['Ready_for_Battle'] },

    { name: 'Razor', have: [false], status:'new',
        spriteImages: ['Watching_and_Waiting'] },

    { name: 'Sethos', have: [false], 
        spriteImages: ['Earnest_Negotiation'] },

    { name: 'Tartaglia', have: [true], 
        spriteImages: ['All_Green_and_Good_to_Go'] },

    { name: 'Thoma', imgName: 'Tohma', have: [false], 
        spriteImages: ['Leisure_Time'] },

    { name: 'Tighnari', have: [false], 
        spriteImages: ['Deep_Contemplation'] },

    { name: 'Venti', have: [true], 
        spriteImages: ['Spontaneous_Performance'] },

    { name: 'Wanderer', have: [false], 
        spriteImages: ['Surveying_Surroundings'] },

    { name: 'Wriothesley', have: [false], 
        spriteImages: ['Tidying_Up'] },

    { name: 'Xiangling', have: [true], 
        spriteImages: ['Upbeat_Encouragement'] },

    { name: 'Xinyan', have: [false], 
        spriteImages: ['Performance_Time'] },

    { name: 'Yae Miko', imgName: 'Yae', spriteFolder: 'YaeMiko', have: [false], 
        spriteImages: ['Prayer_Time'] },

    { name: 'Yaoyao', have: [false], 
        spriteImages: ['Cheerful_Greeting'] },

    { name: 'Yelan', have: [false], 
        spriteImages: ['Elegant_Countenance','Leisure_Time'] },
    
    { name: 'Yoimiya', have: [true], 
        spriteImages: ['Filled_With_Confidence'] },

    { name: 'Yun Jin', imgName: 'Yunjin', have: [false], status:'new',
        spriteImages: ['Masters_Poise'] },
    
    { name: 'Zhongli', have: [true], 
        spriteImages: ['Solemn_Countenance'] },
    // more characters...
  ],

  pathPrefix: "../assets/charaid/Genshin/",
  spritePrefix: "../assets/others/Genshin/Thespian/",

  getImgPath: (char) => {
    const imgName = char.imgName || char.name.replace(/\s+/g, ''); // fallback to name with no spaces
    return `${gameConfig.pathPrefix}UI_AvatarIcon_${imgName}.png`;
  },

  getSpritePath: (char) => {
    const folder = char.spriteFolder || char.name.replace(/\s+/g, '');
    const images = char.spriteImages || [];
    return images.map(img => `${gameConfig.spritePrefix}${folder}/${img}.webp`);
 }
};

if (gameConfig.id !== 'hi3') {
  gameConfig.characters = gameConfig.characters.map(c => ({
    ...c,
    have: Array.isArray(c.have) ? c.have[0] : !!c.have, // Convert [false] → false
    imgName: c.imgName || c.name.replace(/\s+/g, ''), // fallback for missing imgName
    spriteFolder: c.spriteFolder || c.name.replace(/\s+/g, ''), // fallback for spriteFolder
    folder: c.folder || '', // optional, in case your render logic uses it
    part: c.part || null, // optional
    rarity: c.rarity || 4, // fallback default rarity
    spriteImages: c.spriteImages || [], // prevent undefined errors
  }));
}
