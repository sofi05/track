window.CHARA_CONFIG = {
  characters: [
    { name: '', name2: 'Aether', GP: 2, imgName: 'PlayerBoy', have: false, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'm', rarity: 5 },
    { name: '', name2: 'Lumine', GP: 1, imgName: 'PlayerGirl', have: true, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'f', rarity: 5 },
    { name: ' ', name2: 'Aether', GP: 2, imgName: 'PlayerBoyCostumeCWXR', have: false, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'm', rarity: 5, hasOutfit:true },
    { name: ' ', name2: 'Lumine', GP: 1, imgName: 'PlayerGirlCostumeCWXR', have: true, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'f', rarity: 5, hasOutfit:true },
    
    { name: '  ', name2: 'Aether', GP: 2, imgName: '', have: false, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'm', rarity: 5, hasOutfit:true, status: 'soon' },
    { name: '  ', name2: 'Lumine', GP: 1, imgName: '', have: true, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'f', rarity: 5, hasOutfit:true, status: 'soon' },
    //{ name: ' ', name2: 'Aether', GP: 2, imgName: '', have: false, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'm', rarity: 5, hasOutfit:true },
    //{ name: ' ', name2: 'Lumine', GP: 1, imgName: '', have: true, element: ['Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro'], gender: 'f', rarity: 5, hasOutfit:true },
  ],

  pageType: "typeB",

  getSpritePath(char) {
    const base = char.hasOutfit ? '../assets/Sprite/Genshin/Outfit/' : '../assets/Sprite/Genshin/';
    const fileName = char.hasOutfit ? `UI_Costume_${char.imgName}.png` : `UI_Gacha_AvatarImg_${char.imgName}.png`;
    return [ `${base}${fileName}` ];
  },

  getFallbackPath() {
    return `../assets/others/Genshin/Random/UI_Icon_LunaRite_Unknown.png`;
  },

  createImageElement(char) {
    const container = document.createElement('div');
    container.className = 'char-icon-container';

    const img = document.createElement('img');
    img.className = 'char-icon';
    const imgSrcName = char.imgName || char.name;
    const baseIconPath = char.hasOutfit ? '../assets/charaid/Genshin/Outfit/' : '../assets/charaid/Genshin/';
    const paths = [
      `${baseIconPath}UI_AvatarIcon_${imgSrcName}.png`,
      this.getFallbackPath(char)
    ];

    let currentPathIndex = 0;
    const tryNextPath = () => {
      if (currentPathIndex >= paths.length) return;
      img.src = paths[currentPathIndex++];
    };
    img.onerror = tryNextPath;
    tryNextPath();

    img.alt = char.name;
    container.appendChild(img);

    if (typeof char.element === 'string') {
      const elementImg = document.createElement('img');
      elementImg.className = 'element-icon';
      elementImg.src = `../assets/others/Genshin/Element/${char.element}.png`;
      elementImg.alt = char.element;
      container.appendChild(elementImg);
    } else if (Array.isArray(char.element)) {
      const elementList = document.createElement('div');
      elementList.className = 'element-list';
      char.element.forEach(el => {
        const elementLabel = document.createElement('span');
        elementLabel.className = 'element-label';
        elementLabel.textContent = el;
        elementList.appendChild(elementLabel);
      });
      container.appendChild(elementList);
    }

    container.addEventListener('click', () => {
      const spritePaths = this.getSpritePath(char).concat(this.getFallbackPath(char));
      let idx = 0;
      const popupImg = new Image();
      popupImg.onerror = () => {
        idx++;
        if (idx < spritePaths.length) popupImg.src = spritePaths[idx];
      };
      popupImg.src = spritePaths[idx];
      showPopup(popupImg.src, char.name);
    });

    return container;
  },

  getElementIconPath(el) {
    return `../assets/others/Genshin/Element/${el}.png`;
  }
};
