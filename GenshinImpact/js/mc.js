window.CHARA_CONFIG = {
  characters: [
    { name: 'Aether', imgName: 'PlayerBoy', have: false, element: 'Anemo', group:'dest', gender:'m', rarity: 5,  status: 'available' },
    { name: 'Lumine', imgName: 'PlayerGirl', have: true, element: 'Anemo', group:'dest', gender:'f', rarity: 5,  status: 'available' },
    { name: 'Aether', imgName: 'PlayerBoy', have: false, element: 'Geo', group:'dest', gender:'m', rarity: 5,  status: 'available' },
    { name: 'Lumine', imgName: 'PlayerGirl', have: true, element: 'Geo', group:'dest', gender:'f', rarity: 5,  status: 'available' },
    { name: 'Aether', imgName: 'PlayerBoy', have: false, element: 'Electro', group:'dest', gender:'m', rarity: 5,  status: 'available' },
    { name: 'Lumine', imgName: 'PlayerGirl', have: true, element: 'Electro', group:'dest', gender:'f', rarity: 5,  status: 'available' },
    { name: 'Aether', imgName: 'PlayerBoy', have: false, element: 'Dendro', group:'dest', gender:'m', rarity: 5,  status: 'available' },
    { name: 'Lumine', imgName: 'PlayerGirl', have: true, element: 'Dendro', group:'dest', gender:'f', rarity: 5,  status: 'available' },
    { name: 'Aether', imgName: 'PlayerBoy', have: false, element: 'Hydro', group:'dest', gender:'m', rarity: 5,  status: 'available' },
    { name: 'Lumine', imgName: 'PlayerGirl', have: true, element: 'Hydro', group:'dest', gender:'f', rarity: 5,  status: 'available' },
    { name: 'Aether', imgName: 'PlayerBoy', have: false, element: 'Pyro', group:'dest', gender:'m', rarity: 5,  status: 'available' },
    { name: 'Lumine', imgName: 'PlayerGirl', have: true, element: 'Pyro', group:'dest', gender:'f', rarity: 5,  status: 'available' },
    
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

    const elementImg = document.createElement('img');
    elementImg.className = 'element-icon';
    elementImg.src = `../assets/others/Genshin/Element/${c.element}.png`;
    elementImg.alt = c.element;

    container.appendChild(img);
    container.appendChild(elementImg);

    container.addEventListener('click', () => {
      const imgName = c.imgName ? c.imgName : c.name;
      const imgPath = `../assets/Sprite/Genshin/UI_Gacha_AvatarImg_${c.imgName}.png`;
      showPopup(imgPath, c.name);
    });

    return container;
  },
};