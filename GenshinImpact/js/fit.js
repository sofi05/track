const gameConfig = {
  characters: [
    { name: 'Lisa', imgName: 'A_Sobriquet_Under_Shade_Icon', imgName2:'LisaCostumeStudentin', have: true, rarity: 4, status: 'available' },
    { name: 'Diluc', imgName: 'Red_Dead_of_Night_Icon',imgName2:'DilucCostumeFlamme', have: false, rarity: 5, status: 'available' },
    { name: 'Ayaka', imgName: 'Springbloom_Missive_Icon',imgName2:'AyakaCostumeFruhling', have: false,  rarity: 5, status: 'available' },
    { name: 'Barbara', imgName: 'Summertime_Sparkle_Icon',imgName2:'BarbaraCostumeSummertime', have: false, rarity: 4, status: 'available' },
    { name: 'Bennett', imgName: 'Adventures_in_Blazing_Hue_Icon',imgName2:'BennettCostumeSummer', have: true, rarity: 4, status: 'available' },
    { name: 'Yelan', imgName: 'Tranquil_Banquet_Icon',imgName2:'YelanCostumeSummer', have: false, rarity: 5, status: 'available'},
    { name: 'Nilou', imgName: 'Breeze_of_Sabaa_Icon',imgName2:'NilouCostumeFairy', have: false, rarity: 5, status: 'available'},
    { name: 'Shenhe', imgName: 'Frostflower_Dew_Icon',imgName2:'ShenheCostumeDai', have: false, rarity: 5, status: 'available'},
    { name: 'Kirara', imgName: 'Phantom_in_Boots_Icon', imgName2:'MomokaCostumeErrantry',have: true, rarity: 4, status: 'available' },
    { name: 'Fischl', imgName: 'Ein_Immernachtstraum_Icon',imgName2:'FischlCostumeHighness', have: true, rarity: 4, status: 'available' },
    { name: 'Ganyu', imgName: 'Twilight_Blossom_Icon',imgName2:'GanyuCostumeYu', have: false, rarity: 5, status: 'available' },
    { name: 'Kaeya', imgName: 'Sailwind_Shadow_Icon',imgName2:'KaeyaCostumeDancer', have: true, rarity: 4, status: 'available' },
    { name: 'Keqing', imgName: 'Opulent_Splendor_Icon',imgName2:'KeqingCostumeFeather', have: false, rarity: 5, status: 'available' },
    { name: 'Klee', imgName: 'Blossoming_Starlight_Icon',imgName2:'KleeCostumeWitch', have: false, rarity: 5, status: 'available'},
    { name: 'Ningguang', imgName: 'Orchids_Evening_Gown_Icon',imgName2:'NingguangCostumeFloral', have: false, rarity: 4, status: 'available' },
    { name: 'Hu Tao', imgName: 'Cherries_Snow-Laden_Icon',imgName2:'HutaoCostumeWinter', have: false, rarity: 5, status: 'available' },
    { name: 'Jean', imgName: 'Sea_Breeze_Dandelion_Icon',imgName2:'QinCostumeSea', have: false, rarity: 5, status: 'available' },
    { name: 'Xiangling', imgName: 'New_Years_Cheer_Icon',imgName2:'XianglingCostumeWinter', have: true, rarity: 4, status: 'available' },
    { name: 'Xingqiu', imgName: 'Bamboo_Rain_Icon',imgName2:'XingqiuCostumeBamboo', have: true, rarity: 4, status: 'available' }
 // { name: '', imgName: '',imgName2:'', have: true, rarity: 4, status: 'new' }
  ],

  pathPrefix: "../assets/charaid/Genshin/Outfit/",
  spritePrefix: "../assets/Sprite/Genshin/Outfit/UI_Costume_", 

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.webp`,
  getSpritePath: (c) => `${gameConfig.spritePrefix}${c.imgName2}.png`
};