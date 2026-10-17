window.CHARA_CONFIG = {
  gameId: 'ZenlessZone', // key of this game in shared/js/vs.js
  characters: [
    //HAVE - ORGANIZED BY NUMBER
    { name: 'Anby', imgName: '01', have: true, element: 'Electric', district:['SS'], gender:'f', rarity: 4 },
    { name: 'Soldier 11', imgName: '05', have: true, element: 'Fire', district:['TQ', 'OE'], gender:'f', rarity: 5 },
    { name: 'Corin', imgName: '09', have: true, element: 'Physical', district:['LS'], gender:'f', rarity: 4 },
    { name: 'Billy', imgName: '10', have: true, element: 'Physical', district:['SS', 'OR'], gender:'m', rarity: 4 },
    { name: 'Nekomata', imgName: '11', have: true, element: 'Physical', district:['SS'], gender:'f', rarity: 5 },
    { name: 'Nicole', imgName: '12', have: true, element: 'Ether', district:['SS'], gender:'f', rarity: 4 },
    { name: 'Miyabi', imgName: '13', have: true, element: 'Frost', filterElement: 'Ice', district:['TQ'], gender:'f', rarity: 5 },
    { name: 'Koleda', imgName: '14', have: true, element: 'Fire', district:['BSCS'], gender:'f', rarity: 5 },
    { name: 'Anton', imgName: '15', have: true, element: 'Electric', district:['BSCS'], gender:'m', rarity: 4 },
    { name: 'Ben', imgName: '16', have: true, element: 'Fire', district:['BSCS'], gender:'m', rarity: 4 },
    { name: 'Soukaku', imgName: '17', have: true, element: 'Ice', district:['TQ'], gender:'f', rarity: 4 },
    { name: 'Lycaon', imgName: '18', have: true, element: 'Ice', district:['LS'], gender:'m', rarity: 5 },
    { name: 'Grace', imgName: '20', have: true, element: 'Electric', district:['BSCS'], gender:'f', rarity: 5 },
    { name: 'Rina', imgName: '22', have: true, element: 'Electric', district:['LS'], gender:'f', rarity: 5 },
    { name: 'Lucy', imgName: '27', have: true, element: 'Fire', district:['OR'], gender:'f', rarity: 4 },
    { name: 'Piper', imgName: '28', have: true, element: 'Physical', district:['OR'], gender:'f', rarity: 4 },
    { name: 'Seth', imgName: '30', have: true, element: 'Electric', district:['NEPS'], gender:'m', rarity: 4 },
    { name: 'Harumasa', imgName: '35', have: true, element: 'Electric', district:['TQ'], gender:'m', rarity: 5 },
    { name: 'Pulchra', imgName: '38', have: true, element: 'Physical', district:['OR'], gender:'f', rarity: 4 },
    { name: 'Anby • Soldier 0', imgName: '40', have: true, element: 'Electric', district:['SS', 'OE'], gender:'f', rarity: 5 },
    { name: 'Pan Yinhu', imgName: '45', have: true, element: 'Physical', district:['WP'], gender:'m', rarity: 4 },
    { name: 'Alice', imgName: '46', have: true, element: 'Physical', district:['WP'], gender:'f', rarity: 5},
    { name: 'Lucia', imgName: '50', have: true, element: 'Ether', district:['WP'], gender:'f', rarity: 5},
    { name: 'Manato', imgName: '51', have: true, element: 'Fire', district:['WP'], gender:'m', rarity: 4},
    { name: 'Yidhari', imgName: '52', have: true, element: 'Ice', district:['WP'], gender:'f', rarity: 5},
    { name: 'Shunguan', imgName: '55', have: true, element: 'HonedEdge', filterElement: 'Physical', district:['WP'], gender:'f', rarity: 5},
    { name: 'Zhao', imgName: '56', have: true, element: 'Ice', district:['TQ'], gender:'f', rarity: 5},
    { name: 'Pyrois', imgName: '63', imgName2: ['63','63_F', '63_M'], have: true, element: 'Ether', district:['RP'], gender:'', rarity: 5},
    { name: 'Remielle', imgName: '67', have: true, element: 'Lumiflux', district:['Ros'], gender:'f', rarity: 5},


    //DONT HAVE - ORGANIZED BY NUMBER
    { name: 'Ellen', imgName: '21', have: false, element: 'Ice', district:['LS'], gender:'f', rarity: 5, status: 'available', version: '2.4', p:2},
    { name: 'Zhu Yuan', imgName: '23', have: false, element: 'Ether', district:['NEPS'], gender:'f', rarity: 5, status: 'available', version: '3.1', perma:true },
    { name: 'Jane Doe', imgName: '24', have: false, element: 'Physical', district:['NEPS'], gender:'f', rarity: 5, status: 'available', version: '3.1', want: 1, p:1 },
    { name: 'Caesar', imgName: '25', have: false, element: 'Physical', district:['OR'], gender:'f', rarity: 5, status: 'available', version: '3.1', want: 2, perma:true },
    { name: 'Lighter', imgName: '26', have: false, element: 'Fire', district:['OR'], gender:'m', rarity: 5, status: 'available', version: '1.7', want: 2 },
    { name: 'Qingyi', imgName: '29', have: false, element: 'Electric', district:['NEPS'], gender:'f', rarity: 5, status: 'available', version: '2.5', want: 1, p:1 },
    { name: 'Yanagi', imgName: '31', have: false, element: 'Electric', district:['TQ'], gender:'f', rarity: 5, status: 'available', version: '3.1', perma:true },
    { name: 'Burnice', imgName: '32', have: false, element: 'Fire', district:['OR'], gender:'f', rarity: 5, status: 'available', version: '2.5', want: 2, p:1 },
    { name: 'Astra Yao', imgName: '36', have: false, element: 'Ether', district:['LS'], gender:'f', rarity: 5, status: 'available', version: '2.5', p:2 },
    { name: 'Evelyn', imgName: '37', have: false, element: 'Fire', district:['LS'], gender:'f', rarity: 5, status: 'available', version: '2.2', p:2 },
    { name: 'Trigger', imgName: '39', have: false, element: 'Electric', district:['TQ'], gender:'f', rarity: 5, status: 'available', version: '3.1', p:1, want: 2 },
    { name: 'Vivian', imgName: '41', have: false, element: 'Ether', district:['LS'], gender:'f', rarity: 5, status: 'available', version: '2.3', p:1 },
    { name: 'Hugo', imgName: '42', have: false, element: 'Ice', district:['LS'], gender:'m', rarity: 5, status: 'available', version: '3.1', p:1, want: 2 },
    { name: 'Ju Fufu', imgName: '43', have: false, element: 'Fire', district:['WP'], gender:'f', rarity: 5, status: 'available', version: '2.3', p:2 },
    { name: 'Yixuan', imgName: '44', have: false, element: 'AuricInk', filterElement: 'Ether', district:['WP'], gender:'f', rarity: 5, status: 'available', version: '2.6', p:1, want: 1 },
    { name: 'Yuzuha', imgName: '47', have: false, element: 'Physical', district:['WP'], gender:'f', rarity: 5, status: 'available', version: '3.1',p:2 },
    { name: 'Seed', imgName: '48', have: false, element: 'Electric', district:['TQ'], gender:'f', rarity: 5, status: 'available', version: '2.7', p:2, want: 2 },
    { name: 'Orphie & Magus', imgName: '49', have: false, element: 'Fire', district:['TQ'], gender:'f', rarity: 5, status: 'available', version: '2.8', p:2 },
    { name: 'Banyue', imgName: '53', have: false, element: 'Fire', district:['TQ', 'WP'], gender:'m', rarity: 5, status: 'available', version: '2.4', p:1 },
    { name: 'Dialyn', imgName: '54', have: false, element: 'Physical', district:['TQ'], gender:'f', rarity: 5, status: 'available', version: '3.1', p:2 },
    { name: 'Aria', imgName: '57', imgName2: ['57', '57_Form2'], have: false, element: 'Ether', district:['SS'], gender:'f', rarity: 5, status: 'available', version: '3.1', p:1 },
    { name: 'Sunna', imgName: '58', have: false, element: 'Physical', district:['SS'], gender:'f', rarity: 5, status: 'available', version: '3.0', p:2 },
    { name: 'Nangong Yu', imgName: '59', have: false, element: 'Ether', district:['SS'], gender:'f', rarity: 5, status: 'available', version: '3.2', p:1 },
    { name: 'Cissia', imgName: '60', have: false, element: 'Electric', district:['NEPS'], gender:'f', rarity: 5, status: 'available', version: '2.7', p:2 },
    { name: 'Promeia', imgName: '61', have: false, element: 'Ice', district:['TQ'], gender:'f', rarity: 5, version: '3.2', p:1, status: 'available', },
    { name: 'Billy • Starlight', imgName: '62', have: false, element: 'Physical', district:['SS','OR'], gender:'m', rarity: 5, version: '2.8', p:2, status: 'available', },
    { name: 'Velina', imgName: '64', have: false, element: 'Wind', district:['Ros'], gender:'f', rarity: 5,  status: 'available', version: '3.0', p:1},
    { name: 'Norma', imgName: '65', have: false, element: 'Fire', district:['Ros'], gender:'f', rarity: 5, status: 'available', version: '3.0', p:2 },
    { name: 'Sigrid', imgName: '66', have: false, element: 'Ice', district:['Ros'], gender:'f', rarity: 5, status: 'available', version: '3.1', p:2 },
    { name: 'Roxy', imgName: '68', have: false, element: 'Wind', district:['Ros'], gender:'f', rarity: 5, status: 'new', version: '3.2', p:2, want: 2 },
    { name: 'Claret', imgName: '1611', have: false, element: 'Electric', district:['Ros'], gender:'f', rarity: 5, status: 'new', version: '3.2', p:1, },
    
    { name: 'Phoenix', imgName: '1641', have: false, element: 'Fire', district:['TQ'], gender:'f', rarity: 5, status: 'soon', version: '3.3', p:2,  want: 1 },
    { name: 'Severian', imgName: '1631', have: false, element: 'Wind', district:['NEPS'], gender:'m', rarity: 5, status: 'soon', version: '3.3', p:2 },
    // ---------------------------------------------------------------------
    // TEMPLATE (Zenless): copy a line, remove the // and fill it in.
    //   No picture yet? Put a temporary one in assets/Temp/ with the SAME file name the real picture will have (e.g. 1511.png or .webp). It is used until the real one exists.
    //   { name: '', imgName: '', imgName2: '', outfitSprites: [''], have: false, element: '', filterElement: '', district: [''],
    //     gender: '', rarity: 5, status: 'soon', version: '', p: 1, perma: true, want: 1, out: false },
    //
    //   Needed:   name, imgName, have, element, district, gender, rarity
    //   Optional:
    //     imgName2       second picture (or a list) shown in the popup, e.g. imgName2: ['67_02']
    //     outfitSprites  alternative outfits shown in the popup, e.g. ['Name'] (picture in the Outfit sprite folder)
    //     filterElement  the element name the Filter uses when it is different from the icon's element
    //     status         'new' / 'soon' = label + shown on the home page   'available' = rerun
    //     version, p     banner version and phase ('7.1', p: 2): countdown and colours
    //     perma          true = permanent banner (own row on the home page)
    //     want           1 = ★    2 = ☆   (marker on the home page)
    //     out            false = not out yet (greyed out, no label)
    //   Values:
    //     rarity: 4 | 5     gender: 'm' | 'f'
    // ---------------------------------------------------------------------
    //  Element: Electric | Physical ⇄ HonedEdge | Fire | Ether ⇄ AuricInk | Frost ⇄ Ice | Wind | Lumiflux
    //  District: SS (Sixth Street) | TQ (Throne Quarter) | OE (Old Eridu) | LS (Lumina Square)
    //            OR (Outer Ring) | BSCS (Brant Street Construction Site) | WP (Waifei Peninsula) | Ros (Roscaelifer)
    //            NEPS (New Eridu Public Security) | RP (Random Play)
  ],
  // ---- paths (used by the home page, the Characters page and the popups) ----
  getIconPath: (c) => `../assets/charaid/Zenless/IconRoleCrop${c.imgName}.png`,
  getElementPath: (c) => `../assets/others/Zenless/Element/Icon${c.element}.png`,
  getSpritePath: (c) => `../assets/Sprite/Zenless/IconRole${Dex.imageNames(c)[0]}.png`,
  getFallbackPath: () => Dex.FALLBACK_ICON, // same for every game (set in shared/js/common.js)

  // Agents can have several pictures (imgName + imgName2)
  // (outfitSprites: ['Name'] adds alternative outfits from the Outfit folder)
  getSpritePaths: (c) => Dex.spriteList(c, Dex.imageNames(c).map((name) => `../assets/Sprite/Zenless/IconRole${name}.png`), '../assets/Sprite/Zenless/Outfit/IconRole'),

  // Small text tags under the icon (factions)
  getLabels: (c) => (Array.isArray(c.district) ? { list: 'group-list', item: 'group-label', values: c.district } : null),
};
