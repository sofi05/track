document.addEventListener('DOMContentLoaded', () => {
  const characters = [
    { name: 'Tuskpir', imgName: '251001', have: true, folder: 'Pets', rarity: '4', status: 'available' },
    { name: 'Bubbles', imgName: '251002', have: true, folder: 'Pets', rarity: '4', status: 'available'},
    { name: 'Complainer', imgName: '251003', have: false, folder: 'Pets', rarity: '5', status: 'available' },
    { name: 'Furbobo Press Corps', imgName: '251004(temp)', have: false, folder: 'Pets', rarity: '5', status: 'new' },
    //{ name: '', imgName: '', have: false, folder: 'Pets', rarity: '5', status: 'new' },
 ];

  const gameFolder = '../assets/Sprite/StarRail';
  const spriteFolder = '../assets/Sprite/StarRail';

  window.currentCharacters = characters;
  window.gameFolder = gameFolder;
  window.spriteFolder = spriteFolder;

  window.renderGlobalList(characters, gameFolder, spriteFolder);

  window.setupGlobalFilters('have', 'have', characters, gameFolder, spriteFolder);
  window.setupGlobalFilters('rarity', 'rarity', characters, gameFolder, spriteFolder);
  window.setupGlobalFilters('element', 'element', characters, gameFolder, spriteFolder);
});