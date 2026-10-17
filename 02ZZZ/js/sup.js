const characters = [
  { name: 'Bagboo', have: true, rarity: '4' },
  { name: 'Cryboo', have: true, rarity: '4' },
  { name: 'Avocaboo', have: true, rarity: '4' },
  { name: 'Paperboo', have: true, rarity: '4' },
  { name: 'Sumoboo', have: true, rarity: '4' },
  { name: 'Exploreboo', have: true, rarity: '4' },
  { name: 'Sharkboo', have: false, rarity: '5' },
  { name: 'Butler', have: true, rarity: '5' },
  { name: 'Safety', have: false, rarity: '5' },
  { name: 'Luckyboo', have: false, rarity: '4' },
  { name: 'Penguinboo', have: true, rarity: '4' },
  { name: 'Amillion', have: false, rarity: '5' },
  { name: 'Devilboo', have: true, rarity: '4' },
  { name: 'Rocketboo', have: true, rarity: '5' },
  { name: 'Electroboo', have: true, rarity: '4' },
  { name: 'Booressure', have: false, rarity: '4' },
  { name: 'Boollseye', have: true, rarity: '4' },
  { name: 'Plugboo', have: true, rarity: '5' },
  { name: 'Resonaboo', have: true, rarity: '5' },
  { name: 'Magnetiboo', have: true, rarity: '4' },
  { name: 'Bangvolver', have: false, rarity: '5' },
  { name: 'Baddieboo', have: true, rarity: '4' },
  { name: 'Officer Cui', have: false, rarity: '5' },
  { name: 'Red Moccus', have: false, rarity: '5' },
  { name: 'Knightboo', have: false, rarity: '4' },
  { name: 'Agent Gulliver', have: true, rarity: '5' },
  { name: 'Brawlerboo', have: true, rarity: '4' },
  { name: 'Snap', have: false, rarity: '5' },
  { name: 'Robin', have: true, rarity: '5' },
  { name: 'Overtimeboo', have: false, rarity: '4' },
  { name: 'Belion', have: false, rarity: '5' },
  { name: 'Miss Esme', have: true, rarity: '5' },
  { name: 'Mercury', have: false, rarity: '5' },
  { name: 'Excaliboo', have: false, rarity: '4' },
  { name: 'Bild N. Boolok', have: true, rarity: '4' },
  { name: 'Birkblick', have: false, rarity: '4'},
  { name: 'Sprout', have: false, rarity: '5' },
  { name: 'Booltergeist', have: false, rarity: '4'},
  { name: 'Biggest Fan', have: false, rarity: '5'},
  { name: 'Ultra Jake', have: false, rarity: '5', status: 'new' },

  { name: 'Ariel', have: false, rarity: '5', status: 'soon' },
  //{ name: '', have: false, rarity: '', status: 'soon' },
];

const spriteFolder = '../assets/Sprite/Zenless/Bangboo/';

// The picture files are numbered in list order (BangbooGarageRole01, 02 ...).
// Numbers that don't exist are skipped here, so the list above stays in order.
const MISSING_NUMBERS = [8, 22, 33, 34, 35, 40, 44];
let fileNumber = 1;
characters.forEach((c) => {
  while (MISSING_NUMBERS.includes(fileNumber)) fileNumber++;
  c.imgName = `BangbooGarageRole${String(fileNumber).padStart(2, '0')}`;
  fileNumber++;
});

// Filter buttons of this page (same settings as js/chara-page.js: quick = always visible, popup = inside "Filter")
const page = {
  quick: [['have', 'new'], 'rarity'],
  popup: [],
  parts: [],
};

Dex.initSupportPage({ characters, iconFolder: spriteFolder, spriteFolder, page });
