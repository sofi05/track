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
    { name: 'Charlotte', imgName: 'CharlotteCostumeDong', have: true, rarity: 4 },
    { name: 'Citlali', imgName: 'CitlaliCostumeXia', have: false, rarity: 5 },

 // ---------------------------------------------------------------------
 // TEMPLATE: copy a line, remove the // and fill it in.
 //   { name: '', imgName: '', imgName2: '', have: false, rarity: 4, status: 'new' },
 //
 //   Same name = ONE card: to add an outfit to a character, add a line with the same name.
 //   imgName        icon of this outfit            imgName2   extra big picture(s) in the popup (one name or a list)
 //   status         'new' / 'soon' = label         rarity     4 | 5      have   true / false
 // ---------------------------------------------------------------------
  ],

  // Filter buttons of this page (same settings as js/chara-page.js: quick = always visible, parts = Part / Collab buttons)
  page: {
    quick: [['have', 'new']],
    popup: [],
    parts: [],
  },

  // The version this list is updated to (shows as a red "vers." pill under the title)
  lastVersion: '7.1',

  // Where the pictures are. Edit the folders here.
  pathPrefix: "../assets/charaid/Genshin/Outfit/UI_AvatarIcon_",
  spritePrefix: "../assets/Sprite/Genshin/Outfit/UI_Costume_",

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.png`,
  // List of pictures shown when you click a card (imgName + imgName2)
  getSpritePath: (c) => Dex.imageNames(c).map((name) => `${gameConfig.spritePrefix}${name}.png`),
};
