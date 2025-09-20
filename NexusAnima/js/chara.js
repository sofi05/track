window.CHARA_CONFIG = {
  characters: [
    { name: 'Cassio Rollex', imgName: 'Cassio_Rollex', have: false, gender:'m', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Hua', imgName: 'Hua',  have: false, gender:'m', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Kiana', imgName: 'Kiana',  have: false, gender:'f', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Maple Manybell', imgName: 'Maple_Manybell',  have: false, gender:'f', rarity: 4, status: 'new' },
    { name: 'Nanafey', imgName: 'Nanafey',  have: false, gender:'f', rarity: 4, status: 'new' },
    { name: 'Victus', imgName: 'The_2nd_Novarch',  have: false, type: [''], gender:'m', status: 'soon', version: '0.0', rarity:0 },
    { name: 'Kumyo Kyo', imgName: 'The_4th_Sovereign',  have: false, type: ['sov'], gender:'m', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Amstradath', imgName: 'The_5th_Sovereign',  have: false, type: [''], gender:'m', rarity: 0, status: 'soon', version: '0.0'},
    { name: 'Prabhas', imgName: 'The_16th_Novarch',  have: false, type: ['nov'], gender:'f', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Armand', imgName: 'The_17th_Novarch',  have: false, type: ['sov','nov'], gender:'m', rarity: 5, status: 'new', version: '0.3'  },
    { name: 'Blade', imgName: 'The_22nd_Novarch',  have: false, type: ['nov'], gender:'m', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Parayaya', imgName: 'The_29th_Novarch',  have: false, type: ['nov'], gender:'f', rarity: 5, status: 'new' },
    { name: 'Parayaya 2', imgName: '',  have: false, type: ['sov'], gender:'f', rarity: 5, status: 'new' },
    { name: 'Sir Champion', imgName: 'The_34th_Novarch', gender:'m',  have: false, type: ['nov'], rarity: 5, status: 'new', version: '0.3' },
    { name: 'Apeiron', imgName: 'The_57th_Novarch',  have: false, type: [''], gender:'', status: 'soon', version: '0.0' },
    { name: 'Breadhead', imgName: '',  have: false, gender:'m', rarity: 5, status: 'new' }, //unsure
    { name: 'Hungrille', imgName: '',  have: false, type: ['nov'], gender:'f', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Jalily Belau', imgName: '',  have: false, gender:'f', rarity: 4, status: 'new', version: '0.3' },    
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
  const rarity = c.rarity;
  const gradient = getRarityGradient(rarity);

    const container = document.createElement('div');
    container.className = 'char-icon-container';

    const img = document.createElement('img');
    img.className = 'char-icon';
    const imgSrcName = c.imgName || c.name;
    img.src = `../assets/charaid/NexusAnima/TempIcons/${imgName}.png`;
    img.alt = c.name;

    const fallbackImg = this.getFallbackPath(c);  
  img.onerror = () => {
    img.src = fallbackImg;
  };

    container.appendChild(img);

    // if theres 2+
    if (c.group) {
      const groupLabel = document.createElement('div');
      groupLabel.className = 'type-list';
      const label = document.createElement('span');
      label.className = 'type-label';
      label.textContent = c.group;
      groupLabel.appendChild(label);
      container.appendChild(groupLabel);
    }

    container.addEventListener('click', () => {
      const imgPath = `../assets/Sprite/NexusAnima/${imgName}.png`;
      showPopup(imgPath, c.name);
    });

    return container;
  }
};