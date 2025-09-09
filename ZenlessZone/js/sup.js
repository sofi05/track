document.addEventListener('DOMContentLoaded', () => {
  // Define the character data for the specific game
  const characters = [
    { name: 'Bagboo', have: true, rarity: '4' },
    { name: 'Cryboo', have: true, rarity: '4' },
    { name: 'Avocaboo', have: false, rarity: '4' },
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
    { name: 'Rocketboo', have: false, rarity: '5' },
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
    { name: 'Brawlerboo', have: false, rarity: '4' },
    { name: 'Snap', have: false, rarity: '5' },
    { name: 'Robin', have: false, rarity: '5' },
    { name: 'Overtimeboo', have: false, rarity: '4' },
    { name: 'Belion', have: false, rarity: '5' },
    { name: 'Miss Esme', have: false, rarity: '5' },
    { name: 'Mercury', have: false, rarity: '5' },
    { name: 'Excaliboo', have: false, rarity: '4' }
    // Add more characters as needed
  ];

  // Define the path for sprites and icons (same for both)
  const spriteFolder = '../assets/Sprite/Zenless/Bangboo/';  // Same path for both sprite and icon

  // Missing image indexes to skip
  const missingIndexes = [8, 22, 33, 34, 35]; 

  // Save to global window object for the global code to use
  window.currentCharacters = characters;
  window.spriteFolder = spriteFolder;

  let currentIndex = 1; // Start the imgName from 1

  // Dynamically assign imgName to characters, skipping missing ones
  characters.forEach((character, index) => {
    // Skip missing numbers
    while (missingIndexes.includes(currentIndex)) {
      currentIndex++; // Skip missing index
    }

    const imgName = `BangbooGarageRole${String(currentIndex).padStart(2, '0')}`;
    character.imgName = imgName;  // Assign imgName to the character

    // Build the image path
    const imgPath = `${spriteFolder}${imgName}.png`;
    character.imgPath = imgPath;

    // Log to verify correct path creation
    console.log(`Character: ${character.name}, imgPath: ${imgPath}`);

    currentIndex++;  // Increment for the next character
  });

  // Filter out characters with no valid imgName (those that are missing)
  const validCharacters = characters.filter(c => c.imgName !== null);

  // Call global render to display the valid characters only
  if (window.renderGlobalList) {
    window.renderGlobalList(validCharacters, spriteFolder, spriteFolder);  // Same path for both sprite and icon
  } else {
    console.error('renderGlobalList function is not defined');
  }

  // Optionally, set up filters (if needed)
  if (window.setupGlobalFilters) {
    window.setupGlobalFilters('have', 'have', validCharacters, spriteFolder, spriteFolder);
    window.setupGlobalFilters('rarity', 'rarity', validCharacters, spriteFolder, spriteFolder);
    window.setupGlobalFilters('element', 'element', validCharacters, spriteFolder, spriteFolder);
  } else {
    console.error('setupGlobalFilters function is not defined');
  }
});
