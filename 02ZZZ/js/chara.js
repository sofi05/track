window.CHARA_CONFIG = {
  gameId: 'ZenlessZone', // key of this game in vs.js (main folder)
  characters: [
    //HAVE - ORGANIZED BY NUMBER
    { name: 'Anby', imgIcon: '01', element: 'Electric', gender: 'f', rarity: 4, area: ['SS'], have: true },
    { name: 'Soldier 11', imgIcon: '05', element: 'Fire', gender: 'f', rarity: 5, area: ['TQ', 'OE'], have: true },
    { name: 'Corin', imgIcon: '09', element: 'Physical', gender: 'f', rarity: 4, area: ['LS'], have: true },
    { name: 'Billy', imgIcon: '10', element: 'Physical', gender: 'm', rarity: 4, area: ['SS', 'OR'], have: true },
    { name: 'Nekomata', imgIcon: '11', element: 'Physical', gender: 'f', rarity: 5, area: ['SS'], have: true },
    { name: 'Nicole', imgIcon: '12', element: 'Ether', gender: 'f', rarity: 4, area: ['SS'], have: true },
    { name: 'Miyabi', imgIcon: '13', element: 'Frost', filterElement: 'Ice', gender: 'f', rarity: 5, area: ['TQ'], have: true },
    { name: 'Koleda', imgIcon: '14', element: 'Fire', gender: 'f', rarity: 5, area: ['BSCS'], have: true },
    { name: 'Anton', imgIcon: '15', element: 'Electric', gender: 'm', rarity: 4, area: ['BSCS'], have: true },
    { name: 'Ben', imgIcon: '16', element: 'Fire', gender: 'm', rarity: 4, area: ['BSCS'], have: true },
    { name: 'Soukaku', imgIcon: '17', element: 'Ice', gender: 'f', rarity: 4, area: ['TQ'], have: true },
    { name: 'Lycaon', imgIcon: '18', element: 'Ice', gender: 'm', rarity: 5, area: ['LS'], have: true },
    { name: 'Grace', imgIcon: '20', element: 'Electric', gender: 'f', rarity: 5, area: ['BSCS'], have: true },
    { name: 'Rina', imgIcon: '22', element: 'Electric', gender: 'f', rarity: 5, area: ['LS'], have: true },
    { name: 'Jane Doe', imgIcon: '24', element: 'Physical', gender: 'f', rarity: 5, area: ['NEPS'], have: true, status: 'available', version: '3.1', want: 1, ph: 1 },
    { name: 'Lucy', imgIcon: '27', element: 'Fire', gender: 'f', rarity: 4, area: ['OR'], have: true },
    { name: 'Piper', imgIcon: '28', element: 'Physical', gender: 'f', rarity: 4, area: ['OR'], have: true },
    { name: 'Seth', imgIcon: '30', element: 'Electric', gender: 'm', rarity: 4, area: ['NEPS'], have: true },
    { name: 'Harumasa', imgIcon: '35', element: 'Electric', gender: 'm', rarity: 5, area: ['TQ'], have: true },
    { name: 'Pulchra', imgIcon: '38', element: 'Physical', gender: 'f', rarity: 4, area: ['OR'], have: true },
    { name: 'Anby • Soldier 0', imgIcon: '40', element: 'Electric', gender: 'f', rarity: 5, area: ['SS', 'OE'], have: true },
    { name: 'Pan Yinhu', imgIcon: '45', element: 'Physical', gender: 'm', rarity: 4, area: ['WP'], have: true },
    { name: 'Alice', imgIcon: '46', element: 'Physical', gender: 'f', rarity: 5, area: ['WP'], have: true },
    { name: 'Lucia', imgIcon: '50', element: 'Ether', gender: 'f', rarity: 5, area: ['WP'], have: true },
    { name: 'Manato', imgIcon: '51', element: 'Fire', gender: 'm', rarity: 4, area: ['WP'], have: true },
    { name: 'Yidhari', imgIcon: '52', element: 'Ice', gender: 'f', rarity: 5, area: ['WP'], have: true },
    { name: 'Shunguan', imgIcon: '55', element: 'HonedEdge', filterElement: 'Physical', gender: 'f', rarity: 5, area: ['WP'], have: true },
    { name: 'Zhao', imgIcon: '56', element: 'Ice', gender: 'f', rarity: 5, area: ['TQ'], have: true },
    { name: 'Pyrois', imgIcon: '63', imgSprite: ['=', '63_F', '63_M'], element: 'Ether', gender: '', rarity: 5, area: ['RP'], have: true },
    { name: 'Remielle', imgIcon: '67', element: 'Lumiflux', gender: 'f', rarity: 5, area: ['Ros','OE'], have: true },

    //COLLAB
    { name: 'Kafka', imgIcon: '', element: 'Electric', gender: 'f', rarity: 5, area: [''], have: false, status: 'soon', version: '3.4', collab: true, collabStatus: ['mhy'], out: false, ph:1  },
    { name: 'Robin', imgIcon: '1661', element: 'Ether', gender: 'f', rarity: 5, area: [''], have: false, status: 'soon', version: '3.4', collab: true, collabStatus: ['mhy'], ph:1  },

    //DONT HAVE - ORGANIZED BY NUMBER
    { name: 'Ellen', imgIcon: '21', element: 'Ice', gender: 'f', rarity: 5, area: ['LS'], have: false, status: 'available', version: '2.4', ph: 2 },
    { name: 'Zhu Yuan', imgIcon: '23', element: 'Ether', gender: 'f', rarity: 5, area: ['NEPS'], have: false, status: 'available', version: '3.1', perma: true },
    { name: 'Caesar', imgIcon: '25', element: 'Physical', gender: 'f', rarity: 5, area: ['OR'], have: false, status: 'available', version: '3.1', want: 2, perma: true },
    { name: 'Lighter', imgIcon: '26', element: 'Fire', gender: 'm', rarity: 5, area: ['OR'], have: false, status: 'available', version: '1.7', want: 2 },
    { name: 'Qingyi', imgIcon: '29', element: 'Electric', gender: 'f', rarity: 5, area: ['NEPS'], have: false, status: 'available', version: '2.5', want: 1, ph: 1 },
    { name: 'Yanagi', imgIcon: '31', element: 'Electric', gender: 'f', rarity: 5, area: ['TQ'], have: false, status: 'available', version: '3.1', perma: true },
    { name: 'Burnice', imgIcon: '32', element: 'Fire', gender: 'f', rarity: 5, area: ['OR'], have: false, status: 'available', version: '2.5', want: 2, ph: 1 },
    { name: 'Astra Yao', imgIcon: '36', element: 'Ether', gender: 'f', rarity: 5, area: ['LS'], have: false, status: 'available', version: '2.5', ph: 2 },
    { name: 'Evelyn', imgIcon: '37', element: 'Fire', gender: 'f', rarity: 5, area: ['LS'], have: false, status: 'available', version: '2.2', ph: 2 },
    { name: 'Trigger', imgIcon: '39', element: 'Electric', gender: 'f', rarity: 5, area: ['TQ'], have: false, status: 'available', version: '3.1', want: 2, ph: 1 },
    { name: 'Vivian', imgIcon: '41', element: 'Ether', gender: 'f', rarity: 5, area: ['LS'], have: false, status: 'available', version: '2.3', ph: 1 },
    { name: 'Hugo', imgIcon: '42', element: 'Ice', gender: 'm', rarity: 5, area: ['LS'], have: false, status: 'available', version: '3.1', want: 2, ph: 1 },
    { name: 'Ju Fufu', imgIcon: '43', element: 'Fire', gender: 'f', rarity: 5, area: ['WP'], have: false, status: 'available', version: '2.3', ph: 2 },
    { name: 'Yixuan', imgIcon: '44', element: 'AuricInk', filterElement: 'Ether', gender: 'f', rarity: 5, area: ['WP'], have: false, status: 'available', version: '2.6', want: 1, ph: 1 },
    { name: 'Yuzuha', imgIcon: '47', element: 'Physical', gender: 'f', rarity: 5, area: ['WP'], have: false, status: 'available', version: '3.1', ph: 2 },
    { name: 'Seed', imgIcon: '48', element: 'Electric', gender: 'f', rarity: 5, area: ['TQ'], have: false, status: 'available', version: '2.7', want: 2, ph: 2 },
    { name: 'Orphie & Magus', imgIcon: '49', element: 'Fire', gender: 'f', rarity: 5, area: ['TQ'], have: false, status: 'available', version: '2.8', ph: 2 },
    { name: 'Banyue', imgIcon: '53', element: 'Fire', gender: 'm', rarity: 5, area: ['TQ', 'WP'], have: false, status: 'available', version: '2.4', ph: 1 },
    { name: 'Dialyn', imgIcon: '54', element: 'Physical', gender: 'f', rarity: 5, area: ['TQ'], have: false, status: 'available', version: '3.1', ph: 2 },
    { name: 'Aria', imgIcon: '57', imgSprite: ['=', '57_Form2'], element: 'Ether', gender: 'f', rarity: 5, area: ['SS'], have: false, status: 'available', version: '3.1', ph: 1 },
    { name: 'Sunna', imgIcon: '58', element: 'Physical', gender: 'f', rarity: 5, area: ['SS'], have: false, status: 'available', version: '3.0', ph: 2 },
    { name: 'Nangong Yu', imgIcon: '59', element: 'Ether', gender: 'f', rarity: 5, area: ['SS'], have: false, status: 'available', version: '3.2', ph: 1 },
    { name: 'Cissia', imgIcon: '60', element: 'Electric', gender: 'f', rarity: 5, area: ['NEPS'], have: false, status: 'available', version: '2.7', ph: 2 },
    { name: 'Promeia', imgIcon: '61', element: 'Ice', gender: 'f', rarity: 5, area: ['TQ'], have: false, status: 'available', version: '3.2', ph: 1 },
    { name: 'Billy • Starlight', imgIcon: '62', element: 'Physical', gender: 'm', rarity: 5, area: ['SS','OR'], have: false, status: 'available', version: '2.8', ph: 2 },
    { name: 'Velina', imgIcon: '64', element: 'Wind', gender: 'f', rarity: 5, area: ['Ros'], have: false, status: 'available', version: '3.3', ph: 1 },
    { name: 'Norma', imgIcon: '65', element: 'Fire', gender: 'f', rarity: 5, area: ['Ros'], have: false, status: 'available', version: '3.3', ph: 2 },
    { name: 'Sigrid', imgIcon: '66', element: 'Ice', gender: 'f', rarity: 5, area: ['Ros'], have: false, status: 'available', version: '3.1', ph: 2 },
    { name: 'Roxy', imgIcon: '68', element: 'Wind', gender: 'f', rarity: 5, area: ['Ros'], have: false, status: 'available', version: '3.2', want: 2, ph: 2 },
    { name: 'Claret', imgIcon: '1611', element: 'Electric', gender: 'f', rarity: 5, area: ['Ros'], have: false, status: 'available', version: '3.2', ph: 1 },
    
    { name: 'Phoenix', imgIcon: '1641', element: 'Fire', gender: 'f', rarity: 5, area: ['TQ'], have: false, status: 'new', version: '3.3', want: 1, ph: 1 },
    { name: 'Severian', imgIcon: '1631', element: 'Wind', gender: 'm', rarity: 5, area: ['NEPS'], have: false, status: 'new', version: '3.3', ph: 2 },

    { name: 'Sunbringer', imgIcon: '1601', element: 'Fire', filterElement: '', gender: 'f', rarity: 5, area: ['OE','Ros'], have: false, status: 'soon', version: '3.4', want: 1, ph: 1  },
    // ---------------------------------------------------------------------
    // TEMPLATE: copy the line, remove the // and delete the fields you do not need.
    // What every field means and its values: GUIDE.md.   Icon too close / too far: zoom, iconX, iconY (see GUIDE.md).
    // { name: '', imgIcon: '', imgSprite: ['='], element: '', filterElement: '', gender: '', rarity: , area: [''], have: false, status: '', version: '', want: , perma: true, collab: true, collabStatus: [''], out: false, ph:  },
    // ---------------------------------------------------------------------
  ],
  // ---- paths (used by the home page, the Characters page and the popups) ----
  getIconPath: (c) => `../assets/charaid/Zenless/${c.collab ? 'Collab/' : ''}IconRoleCrop${Dex.iconName(c)}.png`,
  getElementPath: (c) => `../assets/others/Element/ZZZ_Icon${c.element}.png`,
  getSpritePath: (c) => `../assets/Sprite/Zenless/${c.collab ? 'Collab/' : ''}IconRole${Dex.iconName(c)}.png`,
  getFallbackPath: () => Dex.FALLBACK_ICON, // same for every game (set in shared/js/common.js)

  // Agents can have several big pictures (imgSprite: ['=', '67_02', 'Outfit/Name'])
  getSpritePaths: (c) => Dex.spriteList(c, (name) => `../assets/Sprite/Zenless/${c.collab ? 'Collab/' : ''}IconRole${name}.png`, '../assets/Sprite/Zenless/Outfit/IconRole'),

  // Small text tags under the icon (factions)
  getLabels: (c) => (Array.isArray(c.area) ? { list: 'group-list', item: 'group-label', values: c.area } : null),
};
