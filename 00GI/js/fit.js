const gameConfig = {
  characters: [
    { name: 'Lisa', imgIcon: 'LisaCostumeStudentin', gender: 'f', have: true, rarity: 4 },
    { name: 'Diluc', imgIcon: 'DilucCostumeFlamme', gender: 'm',  have: false, rarity: 5 },
    { name: 'Ayaka', imgIcon: 'AyakaCostumeFruhling', gender: 'f',  have: false, rarity: 5 },
    { name: 'Barbara', imgIcon: 'BarbaraCostumeSummertime', gender: 'f',  have: false, rarity: 4 },
    { name: 'Bennett', imgIcon: 'BennettCostumeSummer', gender: 'm',  have: true, rarity: 4 },
    { name: 'Yelan', imgIcon: 'YelanCostumeSummer', gender: 'f',  have: false, rarity: 5 },
    { name: 'Nilou', imgIcon: 'NilouCostumeFairy', gender: 'f',  have: false, rarity: 5 },
    { name: 'Shenhe', imgIcon: 'ShenheCostumeDai', gender: 'f',  have: false, rarity: 5 },
    { name: 'Kirara', imgIcon: 'MomokaCostumeErrantry', gender: 'f',  have: true, rarity: 4 },
    { name: 'Fischl', imgIcon: 'FischlCostumeHighness', gender: 'f',  have: true, rarity: 4 },
    { name: 'Ganyu', imgIcon: 'GanyuCostumeYu', gender: 'f',  have: false, rarity: 5 },
    { name: 'Kaeya', imgIcon: 'KaeyaCostumeDancer', gender: 'm',  have: true, rarity: 4 },
    { name: 'Keqing', imgIcon: 'KeqingCostumeFeather', gender: 'f',  have: false, rarity: 5 },
    { name: 'Klee', imgIcon: 'KleeCostumeWitch', gender: 'f',  have: false, rarity: 5 },
    { name: 'Ningguang', imgIcon: 'NingguangCostumeFloral', gender: 'f',  have: false, rarity: 4 },
    { name: 'Hu Tao', imgIcon: 'HutaoCostumeWinter', gender: 'f',  have: false, rarity: 5 },
    { name: 'Jean', imgIcon: 'QinCostumeSea', gender: 'f',  have: false, rarity: 5 },
    { name: 'Xiangling', imgIcon: 'XianglingCostumeWinter', gender: 'f',  have: true, rarity: 4 },
    { name: 'Xingqiu', imgIcon: 'XingqiuCostumeBamboo', gender: 'm',  have: true, rarity: 4 },
    { name: 'Durin', imgIcon: 'DurinCostumeWic', gender: 'm',  have: true, rarity: 5 },
    { name: 'Yaoyao', imgIcon: 'YaoyaoCostumeWinter', gender: 'f',  have: true, rarity: 4 },
    { name: 'Neuvillette', imgIcon: 'NeuvilletteCostumeWinter', gender: 'm',  have: false, rarity: 5 },
    { name: 'Charlotte', imgIcon: 'CharlotteCostumeDong', gender: 'f',  have: true, rarity: 4 },
    { name: 'Citlali', imgIcon: 'CitlaliCostumeXia', gender: 'f',  have: false, rarity: 5 },

 // ---------------------------------------------------------------------
 // TEMPLATE: copy a line, remove the // and fill it in.
 // { name: '', imgIcon: '', imgSprite: ['='], gender: '', have: false, rarity: 4, status: 'new' },
 // What every field means (and the same-name rule): GUIDE.md > Outfits page.
 // ---------------------------------------------------------------------
  ],

  // Filter buttons of this page (same settings as js/chara-page.js: quick = always visible, parts = Part / Collab buttons)
  page: {
    quick: [['have', 'new'], 'gender'],
    popup: [],
    parts: [],
  },

  // The version this list is updated to (shows as a red "vers." pill under the title)
  lastVersion: '7.1',

  // Where the pictures are. Edit the folders here.
  pathPrefix: "../assets/charaid/Genshin/Outfit/UI_AvatarIcon_",
  spritePrefix: "../assets/Sprite/Genshin/Outfit/UI_Costume_",

  getImgPath: (c) => `${gameConfig.pathPrefix}${Dex.iconName(c)}.png`,
  // List of pictures shown when you click a card (imgSprite)
  getSpritePath: (c) => Dex.spriteNames(c).map((name) => `${gameConfig.spritePrefix}${name}.png`),
};
