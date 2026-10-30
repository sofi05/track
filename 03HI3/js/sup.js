const characters = [
  // PART 1 - ELFS
  { name: 'Blood Embrace', imgIcon: 'Elf_10001', have: false, element: 'Physical', rarity: '4' },
  { name: 'Jingwei\'s Wings', imgIcon: 'Elf_10002', have: true, element: 'Fire_DMG', rarity: '4' },
  { name: 'Selune\'s Elegy', imgIcon: 'Elf_10003', have: false, element: 'Ice_DMG', rarity: '5' },
  { name: 'Book of Fuxi', imgIcon: 'Elf_10006', have: false, element: 'Fire_DMG', rarity: '5' },
  { name: 'Tesla ZERO', imgIcon: 'Elf_10008', have: false, element: 'Physical', rarity: '5' },
  { name: 'Bella', imgIcon: 'Elf_10009', have: false, element: 'Lightning_DMG', rarity: '5' },
  { name: 'Water\'s Edge', imgIcon: 'Elf_10010', have: false, element: 'Ice_DMG', rarity: '5' },
  { name: 'Sirin', imgIcon: 'Elf_10011', have: false, element: 'Fire_DMG', rarity: '5' },
  { name: 'Klein', imgIcon: 'Elf_10012', have: false, element: 'Lightning_DMG', rarity: '5' },
  { name: 'Blade Durandal', imgIcon: 'Elf_10013', have: false, element: 'Physical', rarity: '5' },
  { name: 'Elf Elysia', imgIcon: 'Elf_10014', have: false, element: 'Ice_DMG', rarity: '5' },
  { name: 'Kiana Kaslana', imgIcon: 'Elf_10015', have: false, element: 'Fire_DMG', rarity: '5' },
  { name: 'Project Bunny', imgIcon: 'Elf_10016', have: false, element: 'Physical', rarity: '5' },
  
  // PART 2 - ASTRAL OP
  { name: 'Dreamseeker', imgIcon: 'AstraMate_01', imgSprite: ['=', 'AstraMate_02'], have: true, element: 'Lightning_DMG', rarity: '5', p: 2 }, // imgName2 = male version, sprite only
  { name: 'Songque', imgIcon: 'AstraMate_03', have: false, element: 'Lightning_DMG', rarity: '5', p: 2 },
  { name: 'Serapeum', imgIcon: 'AstraMate_04', have: false, element: 'Physical', rarity: '5', p: 2 },
  { name: 'Theresa', imgIcon: 'AstraMate_05', have: false, element: 'Lightning_DMG', rarity: '5', p: 2 },
  { name: 'Chenxue', imgIcon: 'AstraMate_06', have: false, element: 'Fire_DMG', rarity: '5', p: 2 },
  { name: 'Youyun', imgIcon: 'AstraMate_07', have: false, element: 'Lightning_DMG', rarity: 5, p: 2 },
  { name: 'Senadina', imgIcon: 'AstraMate_08', have: false, element: 'Fire_DMG', rarity: 5, p: 2 }, 
  { name: 'Vita', imgIcon: '', have: false, element: 'Ice_DMG', rarity: '5', p: 2, status: 'soon' },
  // Add more characters here  (what the fields mean: GUIDE.md > Supports page)
  // { name: '', imgIcon: '', imgSprite: ['='], have: false, element: '', rarity: '5', p: 2, status: 'soon' },
];

// Filter buttons of this page (same settings as js/chara-page.js: quick = always visible, popup = tabs, parts = Part buttons)
const page = {
  quick: [['have', 'new'], 'rarity'],
  popup: ['element'],
  parts: [
    { label: 'Part 1', group: 'part', field: 'p', value: '1' },
    { label: 'Part 2', group: 'part', field: 'p', value: '2' },
  ],
  filters: {
    element: {
      label: 'Element',
      options: [
        { value: 'Fire_DMG', label: 'Fire', icon: '../assets/others/Element/HI3_Core_Fire_DMG.png' },
        { value: 'Ice_DMG', label: 'Ice', icon: '../assets/others/Element/HI3_Core_Ice_DMG.png' },
        { value: 'Lightning_DMG', label: 'Lightning', icon: '../assets/others/Element/HI3_Core_Lightning_DMG.png' },
        { value: 'Physical', label: 'Physical', icon: '../assets/others/Element/HI3_Core_Physical.png' },
      ],
    },
    rarity: {
      label: 'Rarity',
      options: [
        { value: '4', label: 'A', icon: '../assets/others/Rank/HI3_BattleRating_A.png' },
        { value: '5', label: 'S', icon: '../assets/others/Rank/HI3_BattleRating_S.png' },
      ],
    },
  },
};

// The version this list is updated to (the red "vers." pill under the title). Change it when you update the list.
const lastVersion = '9.1 / soon 9.2';

Dex.initSupportPage({
  characters,
  iconFolder: '../assets/charaid/HI3/AstralElf',
  spriteFolder: '../assets/Sprite/HI3/AstralElf',
  page,
  lastVersion,
});
