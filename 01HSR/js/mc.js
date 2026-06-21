window.CHARA_CONFIG = {
  characters: [
    { name: 'Caelus', imgName: '8001', have: true, element: 'physical', group:'dest', gender:'m', rarity: 5},
    { name: 'Stelle', imgName: '8002', have: true, element: 'physical', group:'dest', gender:'f', rarity: 5},
    { name: 'Caelus', imgName: '8003', have: true, element: 'fire', group:'prese', gender:'m', rarity: 5},
    { name: 'Stelle', imgName: '8004', have: true, element: 'fire', group:'prese', gender:'f', rarity: 5},
    { name: 'Caelus', imgName: '8005', have: true, element: 'imaginary', group:'harm', gender:'m', rarity: 5},
    { name: 'Stelle', imgName: '8006', have: true, element: 'imaginary', group:'harm', gender:'f', rarity: 5},
    { name: 'Caelus', imgName: '8007', imgName2: ['8007','8007_1'], have: true, element: 'ice', group:'reme', gender:'m', rarity: 5},
    { name: 'Stelle', imgName: '8008', imgName2: ['8008','8008_1'], have: true, element: 'ice', group:'reme', gender:'f', rarity: 5},
    { name: 'Caelus', imgName: '8009', have: true, element: 'thunder', group:'ela', gender:'m', rarity: 5},
    { name: 'Stelle', imgName: '8010', have: true, element: 'thunder', group:'ela', gender:'f', rarity: 5},

    // { name: '', imgName: '', have: true, element: '', group:'', gender:'', rarity: 5,  status: 'new' },
  ],

getSpritePath: function(char) {
    const imgName = char.imgName || char.name;
    const folder = char.folder || ''; 
    return `../assets/Sprite/StarRail/${imgName}.png`;
  },

getFallbackPath: function(char) {
  return `../assets/others/StarRail/Random/Type_Unknown_Small.webp`; 
},

createImageElement(c) {
    const container = document.createElement('div');
    container.className = 'char-icon-container';

    const img = document.createElement('img');
    img.className = 'char-icon';
    const imgSrcName = c.imgName ? c.imgName : c.name;
    img.src = `../assets/charaid/StarRail/${imgSrcName}.png`;
    img.alt = c.name;

    const fallbackImg = this.getFallbackPath(c);  
  img.onerror = () => {
    img.src = fallbackImg;
  };

    const elementImg = document.createElement('img');
    elementImg.className = 'element-icon';
    elementImg.src = `../assets/others/StarRail/Element/${c.element}.png`;
    elementImg.alt = c.element;

    container.appendChild(img);
    container.appendChild(elementImg);

    container.addEventListener('click', () => {
      // Build the list of sprites to show
      let spriteList = [];

      if (Array.isArray(c.imgName2) && c.imgName2.length > 0) {
        spriteList = c.imgName2.map(name => `../assets/Sprite/StarRail/${name}.png`);
      } else {
        spriteList = [`../assets/Sprite/StarRail/${c.imgName || c.name}.png`];
      }

      // Show popup manually (with thumbnails / next-prev)
      showPopup(spriteList, c.name);
    });

    return container;
  },
};