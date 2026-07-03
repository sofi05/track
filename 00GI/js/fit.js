const gameConfig = {
  characters: [
    { name: 'Lisa', imgName: 'LisaCostumeStudentin', have: true, rarity: 4 },
    { name: 'Diluc', imgName: 'DilucCostumeFlamme', have: false, rarity: 5 },
    { name: 'Ayaka', imgName: 'AyakaCostumeFruhling', have: false,  rarity: 5 },
    { name: 'Barbara', imgName: 'BarbaraCostumeSummertime', have: false, rarity: 4 },
    { name: 'Bennett', imgName: 'BennettCostumeSummer', have: true, rarity: 4 },
    { name: 'Yelan', imgName: 'YelanCostumeSummer', have: false, rarity: 5},
    { name: 'Nilou', imgName: 'NilouCostumeFairy', have: false, rarity: 5},
    { name: 'Shenhe', imgName: 'ShenheCostumeDai', have: false, rarity: 5},
    { name: 'Kirara', imgName: 'MomokaCostumeErrantry',have: true, rarity: 4 },
    { name: 'Fischl', imgName: 'FischlCostumeHighness', have: true, rarity: 4 },
    { name: 'Ganyu', imgName: 'GanyuCostumeYu', have: false, rarity: 5 },
    { name: 'Kaeya', imgName: 'KaeyaCostumeDancer', have: true, rarity: 4 },
    { name: 'Keqing', imgName: 'KeqingCostumeFeather', have: false, rarity: 5 },
    { name: 'Klee', imgName: 'KleeCostumeWitch', have: false, rarity: 5},
    { name: 'Ningguang', imgName: 'NingguangCostumeFloral', have: false, rarity: 4 },
    { name: 'Hu Tao', imgName: 'HutaoCostumeWinter', have: false, rarity: 5 },
    { name: 'Jean', imgName: 'QinCostumeSea', have: false, rarity: 5 },
    { name: 'Xiangling', imgName: 'XianglingCostumeWinter', have: true, rarity: 4 },
    { name: 'Xingqiu', imgName: 'XingqiuCostumeBamboo', have: true, rarity: 4 },
    { name: 'Durin', imgName: 'DurinCostumeWic', have: true, rarity: 5 },
    { name: 'Yaoyao', imgName: 'YaoyaoCostumeWinter', have: true, rarity: 4},
    { name: 'Neuvillette', imgName: 'NeuvilletteCostumeWinter', have: false, rarity: 5},

    { name: 'Charlotte', imgName: 'CharlotteCostumeDong', have: false, rarity: 4, status: 'new' },
    { name: 'Citlali', imgName: 'CitlaliCostumeXia', have: false, rarity: 5, status: 'new' },

 // { name: '', imgName: '', imgName2:'', have: false, rarity: 4, status: 'new' },
  ],

  pathPrefix: "../assets/charaid/Genshin/Outfit/UI_AvatarIcon_",
  spritePrefix: "../assets/Sprite/Genshin/Outfit/UI_Costume_", 

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.png`,
  getSpritePath: (c) => `${gameConfig.spritePrefix}${c.imgName2 || c.imgName}.png`
};