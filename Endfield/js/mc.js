window.CHARA_CONFIG = {
  characters: [
    { name: '',name2: 'Endministrator', GP: 1, imgName: '0002_endminm', have: true, element: 'Physical', gender:'m', rarity: 6},
    { name: '',name2: 'Endministrator', GP: 1, imgName: '0003_endminf', have: true, element: 'Physical', gender:'f', rarity: 6},
  ],

getSpritePath: function(char) {
    const imgName = char.imgName || char.name;
    const folder = char.folder || ''; 
    return `../assets/Sprite/Endfield/${imgName}_splash.png`;
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
    img.src = `../assets/charaid/Endfield/icon_chr_${imgSrcName}.png`;
    img.alt = c.name;

    const fallbackImg = this.getFallbackPath(c);  
    img.onerror = () => {
      img.src = fallbackImg;
    };

    container.appendChild(img);

    if (typeof c.element === 'string') {
      const elementImg = document.createElement('img');
      elementImg.className = 'element-icon';
      elementImg.src = `../assets/others/Endfield/Element/${c.element}.png`;
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
      const imgPath = `../assets/Sprite/Endfield/${imgName}_splash.png`;
      showPopup(imgPath, c.name);
    });

    return container;
  },
};
window.CHARA_CONFIG.pageType = "typeB";
