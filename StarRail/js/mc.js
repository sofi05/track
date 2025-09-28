window.CHARA_CONFIG = {
  characters: [
    { name: 'Caelus', imgName: '8001', have: true, element: 'physical', group:'dest', gender:'m', rarity: 5,  status: 'available' },
    { name: 'Stelle', imgName: '8002', have: true, element: 'physical', group:'dest', gender:'f', rarity: 5,  status: 'available' },
    { name: 'Caelus', imgName: '8003', have: true, element: 'fire', group:'prese', gender:'m', rarity: 5,  status: 'available' },
    { name: 'Stelle', imgName: '8004', have: true, element: 'fire', group:'prese', gender:'f', rarity: 5,  status: 'available' },
    { name: 'Caelus', imgName: '8005', have: true, element: 'imaginary', group:'harm', gender:'m', rarity: 5,  status: 'available' },
    { name: 'Stelle', imgName: '8006', have: true, element: 'imaginary', group:'harm', gender:'f', rarity: 5,  status: 'available' },
    { name: 'Caelus', imgName: '8007', have: true, element: 'ice', group:'reme', gender:'m', rarity: 5,  status: 'available' },
    { name: 'Stelle', imgName: '8008', have: true, element: 'ice', group:'reme', gender:'f', rarity: 5,  status: 'available' },

    // Add more characters here
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
      const imgName = c.imgName ? c.imgName : c.name;
      const imgPath = `../assets/Sprite/StarRail/${c.imgName}.png`;
      showPopup(imgPath, c.name);
    });

    return container;
  },
};