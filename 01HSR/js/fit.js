const gameConfig = {
  characters: [
    { name: 'March 7th', imgName: '1100101', have: true, rarity: 4 },
    { name: 'Firefly', imgName: '1131001', have: false, rarity: 5 },
    { name: 'Ruan Mei', imgName: '1130301', have: true, rarity: 5}, 
    { name: 'Castorice', imgName: '1140701', have: false, rarity: 5},
    { name: 'Sparxie', imgName: '1150101', have: false, rarity: 5},

    { name: 'Evanescia', imgName: '1150501', imgName2:'', have: false, rarity: 5, status: 'soon' },
    { name: 'Hyacine', imgName: '1140901', imgName2:'', have: false, rarity: 5, status: 'soon' },
    // ---------------------------------------------------------------------
    // TEMPLATE: copy a line, remove the // and fill it in.
    //   { name: '', imgName: '', imgName2: '', have: false, rarity: 5, status: 'soon' },
    //
    //   Same name = ONE card: to add an outfit to a character, add a line with the same name.
    //   imgName        icon of this outfit            imgName2   extra big picture(s) in the popup (one name or a list)
    //   status         'new' / 'soon' = label         rarity     4 | 5      have   true / false
    // ---------------------------------------------------------------------
  ],

  // The version this list is updated to (shows as a red "vers." pill under the title)
  lastVersion: '4.5',

  // Where the pictures are. Edit the folders here.
  pathPrefix: "../assets/charaid/StarRail/Outfit/",
  spritePrefix: "../assets/Sprite/StarRail/Outfit/",

  getImgPath: (c) => `${gameConfig.pathPrefix}${c.imgName}.png`,
  // List of pictures shown when you click a card (imgName + imgName2)
  getSpritePath: (c) => Dex.imageNames(c).map((name) => `${gameConfig.spritePrefix}${name}.png`),
};
