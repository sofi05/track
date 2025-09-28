document.addEventListener('DOMContentLoaded', () => {
  const characters = [
    // PART 1 - ELFS
    { name: 'Jingwei\'s Wings', imgName: 'Jingweis_Wings', folder:'All_Elfs', have: true, rarity: '4', element: 'Fire_DMG', part:'1'},
    { name: 'Blood Embrace', imgName: 'Blood_Embrace', folder:'All_Elfs', have: false, rarity: '4', element: 'Physical', part:'1' },
    { name: 'Selune\'s Elegy', imgName: 'Selunes_Elegy', folder:'All_Elfs', have: false, rarity: '5', element: 'Ice_DMG', part:'1' },
    { name: 'Book of Fuxi', imgName: 'Book_of_Fuxi', folder:'All_Elfs', have: false, rarity: '5', element: 'Fire_DMG', part:'1' },
    { name: 'Bella', imgName: 'Bella_ELF', folder:'All_Elfs', have: false, rarity: '5', element: 'Lightning_DMG', part:'1' },
    { name: 'Sirin', imgName: 'Sirin_ELF', folder:'All_Elfs', have: false, rarity: '5', element: 'Fire_DMG', part:'1'},
    { name: 'Klein', imgName: 'Klein_ELF', folder:'All_Elfs', have: false, rarity: '5', element: 'Lightning_DMG', part:'1'},
    { name: 'Blade Durandal', imgName: 'Blade_Durandal_ELF', folder:'All_Elfs', have: false, rarity: '5', element: 'Physical', part:'1'},
    { name: 'Elf Elysia', imgName: 'Elf_Elysia', folder:'All_Elfs', have: false, rarity: '5', element: 'Ice_DMG', part:'1'},
    { name: 'Kiana Kaslana', imgName: 'Kiana_Kaslana_ELF', folder:'All_Elfs', have: false, rarity: '5', element: 'Fire_DMG', part:'1'},
    { name: 'Tesla ZERO', imgName: 'Tesla_ZERO', folder:'All_Elfs', have: false, rarity: '5', element: 'Physical', part:'1'},
    { name: 'Water\'s Edge', imgName: 'Waters_Edge', folder:'All_Elfs', have: false, rarity: '5', element: 'Ice_DMG', part:'1'},
    { name: 'Project Bunny', imgName: 'Project_Bunny', folder:'All_Elfs', have: false, rarity: '5', element: 'Physical', part:'1'},
    
    // PART 2 - ASTRAL OP
    { name: 'Chenxue', imgName: 'Chenxue', folder:'All_AstralOp', have: false, rarity: '5', element: 'Fire_DMG', part:'2', status: 'new'},
    //{ name: 'Dreamseeker', imgName: 'Dreamseeker', folder:'All_AstralOp', have: true, rarity: '5', element: 'Lightning_DMG', part:'2'},
    { name: 'Serapeum', imgName: 'Serapeum', folder:'All_AstralOp', have: false, rarity: '5', element: 'Physical', part:'2'},
    { name: 'Songque', imgName: 'Songque_AstralOp', folder:'All_AstralOp', have: false, rarity: '5', element: 'Lightning_DMG', part:'2'},
    { name: 'Theresa', imgName: 'Theresa_Apocalypse_AstralOp', folder:'All_AstralOp', have: false, rarity: '5', element: 'Lightning_DMG', part:'2'},
    // Add more characters here
  ];

  const gameFolder = '../assets/charaid/Honkai';
  const spriteFolder = '../assets/Sprite/HI3';

  window.currentCharacters = characters;
  window.gameFolder = gameFolder;
  window.spriteFolder = spriteFolder;

  window.renderGlobalList(characters, gameFolder, spriteFolder);

  window.setupGlobalFilters('have', 'have', characters, gameFolder, spriteFolder);
  window.setupGlobalFilters('rarity', 'rarity', characters, gameFolder, spriteFolder);
  window.setupGlobalFilters('element', 'element', characters, gameFolder, spriteFolder);
});