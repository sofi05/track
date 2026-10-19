const characters = [
  // PART 1 - ELFS
  { name: 'Blood Embrace', imgName: 'Elf_10001',  have: false, rarity: '4', element: 'Physical', part:'1' },
  { name: 'Jingwei\'s Wings', imgName: 'Elf_10002', folder:'', have: true, rarity: '4', element: 'Fire_DMG', part:'1'},
  { name: 'Selune\'s Elegy', imgName: 'Elf_10003',  have: false, rarity: '5', element: 'Ice_DMG', part:'1' },
  { name: 'Book of Fuxi', imgName: 'Elf_10006',  have: false, rarity: '5', element: 'Fire_DMG', part:'1' },
  { name: 'Tesla ZERO', imgName: 'Elf_10008',  have: false, rarity: '5', element: 'Physical', part:'1'},
  { name: 'Bella', imgName: 'Elf_10009',  have: false, rarity: '5', element: 'Lightning_DMG', part:'1' },
  { name: 'Water\'s Edge', imgName: 'Elf_10010',  have: false, rarity: '5', element: 'Ice_DMG', part:'1'},
  { name: 'Sirin', imgName: 'Elf_10011',  have: false, rarity: '5', element: 'Fire_DMG', part:'1'},
  { name: 'Klein', imgName: 'Elf_10012',  have: false, rarity: '5', element: 'Lightning_DMG', part:'1'},
  { name: 'Blade Durandal', imgName: 'Elf_10013',  have: false, rarity: '5', element: 'Physical', part:'1'},
  { name: 'Elf Elysia', imgName: 'Elf_10014',  have: false, rarity: '5', element: 'Ice_DMG', part:'1'},
  { name: 'Kiana Kaslana', imgName: 'Elf_10015',  have: false, rarity: '5', element: 'Fire_DMG', part:'1'},
  { name: 'Project Bunny', imgName: 'Elf_10016',  have: false, rarity: '5', element: 'Physical', part:'1'},
  
  // PART 2 - ASTRAL OP
  { name: 'Dreamseeker', imgName: 'AstraMate_01', imgName2: 'AstraMate_02',  have: true, rarity: '5', element: 'Lightning_DMG', part:'2'}, // imgName2 = male version, sprite only
  { name: 'Songque', imgName: 'AstraMate_03',  have: false, rarity: '5', element: 'Lightning_DMG', part:'2'},
  { name: 'Serapeum', imgName: 'AstraMate_04', have: false, rarity: '5', element: 'Physical', part:'2'},
  { name: 'Theresa', imgName: 'AstraMate_05',  have: false, rarity: '5', element: 'Lightning_DMG', part:'2'},
  { name: 'Chenxue', imgName: 'AstraMate_06', have: false, rarity: '5', element: 'Fire_DMG', part:'2'},
  { name: 'Youyun', imgName: 'AstraMate_07',  have: false, rarity: 5, part:'2',version: '8.8' },//edit
  { name: 'Senadina', imgName: 'AstraMate_08',  have: false, rarity: 5, part:'2',version: '?' },//edit
  // Add more characters here
];

Dex.initSupportPage({
  characters,
  iconFolder: '../assets/charaid/Honkai/AstralElf',
  spriteFolder: '../assets/Sprite/HI3/AstralElf',
});
