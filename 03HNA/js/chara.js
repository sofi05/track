window.CHARA_CONFIG = {
  //PICS ARE FROM SITE OR BETA, THEYRE TEMP, CHANGE IT ON LAUNCH
  characters: [
    //Rarity 4
    { name: 'Cassio Rollex', imgName: 'Cassio_Rollex', element: 'IconElectric', have: false, gender:'m', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Hua', element: 'IconElectric', have: false, gender:'m', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Kiana', element: 'IconElectric', have: false, gender:'f', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Maple Manybell', imgName: 'Maple_Manybell', element: 'IconElectric',  have: false, gender:'f', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Nanafey', element: 'IconElectric', have: false, gender:'f', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Jalily Belau', imgName: 'Jalily_Belau', element: 'IconElectric', have: false, gender:'f', rarity: 4, status: 'new', version: '0.3' },    
    
    //??
    { name: 'Victus', imgName: 'Victus', element: 'IconElectric', have: false, type: [''], gender:'m', status: 'soon', version: '0.1' },
    { name: 'Amstradath', imgName: 'Amstradath', element: 'IconElectric', have: false, type: [''], gender:'m', status: 'soon', version: '0.1'},
    { name: 'Apeiron', imgName: 'Apeiron', element: 'IconElectric', have: false, type: [''], gender:'', status: 'soon', version: '0.1' },
    { name: 'Breadhead', imgName: 'Breadhead', element: 'IconElectric', have: false, gender:'m', status: 'new' }, //unsure
    { name: 'Darsea', imgName: 'Darsea', element: 'IconElectric', have: false, gender:'f', status: 'new' }, //unsure
    { name: 'Argenti', imgName: '', element: 'IconElectric', have: false, gender:'m', status: 'new' }, //unsure

    //Rarity 5
    { name: 'Kumyo Kyo', imgName: 'Kumyo_Kyo', element: 'IconElectric', have: false, type: ['sov'], gender:'m', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Prabhas', imgName: 'Prabhas', element: 'IconElectric', have: false, type: ['nov'], gender:'f', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Armand', imgName: 'Armand', element: 'IconElectric', have: false, type: ['sov','nov'], gender:'m', rarity: 5, status: 'new', version: '0.3'  },
    { name: 'Blade', imgName: 'Blade', element: 'IconElectric', have: false, type: ['nov'], gender:'m', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Parayaya', imgName: 'Parayaya', element: 'IconElectric', have: false, type: ['nov'], gender:'f', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Parayaya 2', imgName: 'Parayaya_OG', element: 'IconElectric', have: false, type: ['sov'], gender:'f', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Sir Champion', imgName: 'Sir_Champion', element: 'IconElectric', gender:'m',  have: false, type: ['nov'], rarity: 5, status: 'new', version: '0.3' },
    { name: 'Hungrille', imgName: 'Hungrille', element: 'IconElectric', have: false, type: ['nov'], gender:'f', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Amorphiron', imgName: 'Amorphiron', element: 'IconElectric', have: false, type: [''], gender:'m', rarity: 5, status: 'new', version: '0.3' },
    // Add more characters here
  ],

getSpritePath: function(char) {
    const imgName = char.imgName || char.name;
    const folder = char.folder || ''; 
    return `../assets/Sprite/NexusAnima/${imgName}.png`;
  },

getFallbackPath: function(char) {
  return `../assets/others/Genshin/Random/UI_Icon_LunaRite_Unknown.png`; //change this when needed
},

createImageElement(c) {
  const container = document.createElement('div');
  container.className = 'char-icon-container';
  
  const img = document.createElement('img');
  img.className = 'char-icon';
  const imgSrcName = c.imgName || c.name; // Use imgName if available, otherwise use name
  img.src = `../assets/charaid/NexusAnima/TempIcons/${imgSrcName}.png`;
  img.alt = c.name;

  const fallbackImg = this.getFallbackPath(c);  
  img.onerror = () => {
    img.src = fallbackImg;  // If image fails to load, use fallback image
  };

  const elementImg = document.createElement('img');
  elementImg.className = 'element-icon';
  elementImg.src = `../assets/others/Zenless/Element/${c.element}.png`;  
  elementImg.alt = c.element;

  container.appendChild(img);
  container.appendChild(elementImg);

  container.addEventListener('click', () => {
    const imgPath = `../assets/Sprite/NexusAnima/${imgSrcName}.png`;
    showPopup(imgPath, c.name);
  });

    return container;
  },
};