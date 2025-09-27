window.CHARA_CONFIG = {
  characters: [
    { name2: 'Removed', name: 'Dreamseeker', GP: 2, imgName: 'Dreamseeker_Alt', have: false,  gender:'m', rarity: 5, status: 'available' },
    { name2: 'Main Character', name: 'Dreamseeker ', GP: 1, imgName: 'Dreamseeker', have: true,  gender:'f', rarity: 5, status: 'available'},
    { name2: 'Main Character', name: 'Adam', GP: 1, imgName: 'Main_Character_APHO', have: true,  gender:'m', rarity: 5, status: 'available' },
    // Add more characters here
  ],

getSpritePath: function(char) {
    const imgName = char.imgName || char.name;
    const folder = char.folder || ''; 
    return `../assets/Sprite/HI3/MC/${imgName}.png`;
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
    img.src = `../assets/charaid/Honkai/MC/${imgSrcName}.png`;
    img.alt = c.name;

    const fallbackImg = this.getFallbackPath(c);  
    img.onerror = () => {
      img.src = fallbackImg;
    };

    container.appendChild(img);

    container.addEventListener('click', () => {
      const imgName = c.imgName ? c.imgName : c.name;
      const imgPath = `../assets/Sprite/HI3/MC/${imgName}.png`;
      showPopup(imgPath, c.name);
    });

    return container;
  },
};
window.CHARA_CONFIG.pageType = "typeB";

