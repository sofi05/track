window.CHARA_CONFIG = {
  characters: [
    { name: 'Aether',name2: 'Traveler', GP: 1, imgName: 'PlayerBoy', have: false, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], group:'dest', gender:'m', rarity: 5,  status: 'available' },
    { name: 'Lumine',name2: 'Traveler', GP: 1, imgName: 'PlayerGirl', have: true, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], group:'dest', gender:'f', rarity: 5,  status: 'available' },

    { name: 'Manekin',name2: 'Manekins', GP: 2, imgName: 'PlayerBoy', have: false, group:'dest', gender:'m', rarity: 5,  status: 'available' },
    { name: 'Manekina',name2: 'Manekins', GP: 2, imgName: 'PlayerGirl', have: false, group:'dest', gender:'f', rarity: 5,  status: 'available' },
  
    // Add more characters here
  ],

getSpritePath: function(char) {
    const imgName = char.imgName || char.name;
    const folder = char.folder || ''; 
    return `../assets/Sprite/Genshin/${imgName}.png`;
  },

getFallbackPath: function(char) {
  return `../assets/others/Genshin/Random/UI_Icon_LunaRite_Unknown.png`; 
},

createImageElement(c) {
    const container = document.createElement('div');
    container.className = 'char-icon-container';

    const img = document.createElement('img');
    img.className = 'char-icon';
    const imgSrcName = c.imgName ? c.imgName : c.name;
    img.src = `../assets/charaid/Genshin/UI_AvatarIcon_${imgSrcName}.png`;
    img.alt = c.name;

    const fallbackImg = this.getFallbackPath(c);  
    img.onerror = () => {
      img.src = fallbackImg;
    };

    container.appendChild(img);

    if (typeof c.element === 'string') {
      const elementImg = document.createElement('img');
      elementImg.className = 'element-icon';
      elementImg.src = `../assets/others/Genshin/Element/${c.element}.png`;
      elementImg.alt = c.element;
      container.appendChild(elementImg);
    }

    // If theres two or more in a tag
    const elementList = document.createElement('div');
    elementList.className = 'element-list';
    if (Array.isArray(c.element)) {
      c.element.forEach(element => {
        const elementLabel = document.createElement('span');
        elementLabel.className = 'element-label';
        elementLabel.textContent = element;
        elementList.appendChild(elementLabel);
      });
      container.appendChild(elementList);
    }

    container.addEventListener('click', () => {
      const imgName = c.imgName ? c.imgName : c.name;
      const imgPath = `../assets/Sprite/Genshin/UI_Gacha_AvatarImg_${imgName}.png`;
      showPopup(imgPath, c.name);
    });

    return container;
  },
};
window.CHARA_CONFIG.pageType = "typeB";

window.CHARA_CONFIG.getElementIconPath = function(el) {
  // This can vary by game, page, folder, whatever
  return `../assets/others/Genshin/Element/${el}.png`;
};
