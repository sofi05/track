document.addEventListener('DOMContentLoaded', () => {
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
    { name: 'Booltergeist', have: false, rarity: '4', status: 'soon' },
    { name: 'Biggest Fan', have: false, rarity: '5',status: 'new' },
    //{ name: '', have: false, rarity: '', status: 'soon' },
  ];

  const spriteFolder = '../assets/Sprite/Zenless/Bangboo/';
  const missingIndexes = [8, 22, 33, 34, 35, 40, 44];
  let currentIndex = 1;

  characters.forEach((character) => {
    while (missingIndexes.includes(currentIndex)) currentIndex++;
    const imgName = `BangbooGarageRole${String(currentIndex).padStart(2, '0')}`;
    character.imgName = imgName;
    character.imgPath = `${spriteFolder}${imgName}.png`;
    currentIndex++;
  });

  const validCharacters = characters.filter(c => c.imgName !== null);

  window.currentCharacters = validCharacters;
  window.gameFolder = spriteFolder; 
  window.spriteFolder = spriteFolder;

  if (window.setupGlobalFilters) {
    window.setupGlobalFilters('have', 'have', validCharacters, spriteFolder, spriteFolder);
    window.setupGlobalFilters('rarity', 'rarity', validCharacters, spriteFolder, spriteFolder);
    window.setupGlobalFilters('element', 'element', validCharacters, spriteFolder, spriteFolder);
  }

  if (typeof window.updateFiltersFromUI === 'function') {
    window.updateFiltersFromUI();
  }

  if (window.renderGlobalList) {
    window.renderGlobalList(validCharacters, spriteFolder, spriteFolder);
  }
});