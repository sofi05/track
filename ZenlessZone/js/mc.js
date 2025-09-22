window.CHARA_CONFIG = {
  characters: [
    { name: 'Wise', imgName: '34', have: false, element: 'Anemo', group:'dest', gender:'m', rarity: 5, status: 'available', hasOutfit: false },
    { name: 'Belle', imgName: '33', have: true, element: 'Anemo', group:'dest', gender:'f', rarity: 5, status: 'available', hasOutfit: true },
    { name: 'Wise', imgName: '34_01', have: false, element: 'Geo', group:'dest', gender:'m', rarity: 5, status: 'available', hasOutfit: false },
    { name: 'Belle', imgName: '33_01', have: true, element: 'Geo', group:'dest', gender:'f', rarity: 5, status: 'available', hasOutfit: true },
    { name: 'Wise', imgName: '34_02', have: false, element: 'Electro', group:'dest', gender:'m', rarity: 5, status: 'available', hasOutfit: false },
    { name: 'Belle', imgName: '33_02', have: true, element: 'Electro', group:'dest', gender:'f', rarity: 5, status: 'available', hasOutfit: true },
    // Add more characters here
  ],

imageExists(url, callback) {
  const img = new Image();
  img.onload = () => callback(true); 
  img.onerror = () => callback(false); 
  img.src = url;
},

getPath: function(char, type, callback) {
  const imgName = char.imgName || char.name;
  
  const normalPath = type === 'sprite' 
    ? `../assets/Sprite/Zenless/IconRole${imgName}.png`
    : `../assets/charaid/Zenless/IconRoleCrop${imgName}.png`;

  const outfitPath = type === 'sprite' 
    ? `../assets/Sprite/Zenless/Outfit/IconRole${imgName}.png`
    : `../assets/charaid/Zenless/Outfit/IconRoleCrop${imgName}.png`;

  this.imageExists(normalPath, (existsNormal) => {
    if (existsNormal) {
      callback(normalPath);
    } else {
      this.imageExists(outfitPath, (existsOutfit) => {
        if (existsOutfit) {
          callback(outfitPath);
        } else {
          callback(`../assets/others/Genshin/Random/UI_Icon_LunaRite_Unknown.png`);
        }
      });
    }
  });
},

  createImageElement(c) {
    const container = document.createElement('div');
    container.className = 'char-icon-container';

    const img = document.createElement('img');

    this.getPath(c, 'charid', (imgPath) => {
      img.src = imgPath;  
    });

    const elementImg = document.createElement('img');
    container.appendChild(img);

    container.addEventListener('click', () => {
      this.getPath(c, 'sprite', (imgPath) => {
        showPopup(imgPath, c.name);
      });
    });

    return container;
  },
};