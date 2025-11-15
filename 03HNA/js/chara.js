window.CHARA_CONFIG = {
  //PICS ARE FROM SITE OR BETA, THEYRE TEMP, CHANGE IT ON LAUNCH
  characters: [
    //Rarity 4
    { name: 'Cassio Rollex', imgName: 'Cassio_Rollex', have: false, gender:'m', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Hua', have: false, gender:'m', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Kiana', have: false, gender:'f', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Maple Manybell', imgName: 'Maple_Manybell',  have: false, gender:'f', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Nanafey', have: false, gender:'f', rarity: 4, status: 'new', version: '0.3' },
    { name: 'Jalily Belau', imgName: 'Jalily_Belau',  have: false, gender:'f', rarity: 4, status: 'new', version: '0.3' },    
    
    //??
    { name: 'Victus', imgName: 'Victus', have: false, type: [''], gender:'m', status: 'soon', version: '0.1' },
    { name: 'Amstradath', imgName: 'Amstradath',  have: false, type: [''], gender:'m', status: 'soon', version: '0.1'},
    { name: 'Apeiron', imgName: 'Apeiron',  have: false, type: [''], gender:'', status: 'soon', version: '0.1' },
    { name: 'Breadhead', imgName: 'Breadhead',  have: false, gender:'m', status: 'new' }, //unsure
    { name: 'Darsea', imgName: 'Darsea',  have: false, gender:'f', status: 'new' }, //unsure
    { name: 'Argenti', imgName: '',  have: false, gender:'m', status: 'new' }, //unsure

    //Rarity 5
    { name: 'Kumyo Kyo', imgName: 'Kumyo_Kyo',  have: false, type: ['sov'], gender:'m', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Prabhas', imgName: 'Prabhas',  have: false, type: ['nov'], gender:'f', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Armand', imgName: 'Armand',  have: false, type: ['sov','nov'], gender:'m', rarity: 5, status: 'new', version: '0.3'  },
    { name: 'Blade', imgName: 'Blade',  have: false, type: ['nov'], gender:'m', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Parayaya', imgName: 'Parayaya',  have: false, type: ['nov'], gender:'f', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Parayaya 2', imgName: 'Parayaya_OG',  have: false, type: ['sov'], gender:'f', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Sir Champion', imgName: 'Sir_Champion', gender:'m',  have: false, type: ['nov'], rarity: 5, status: 'new', version: '0.3' },
    { name: 'Hungrille', imgName: 'Hungrille',  have: false, type: ['nov'], gender:'f', rarity: 5, status: 'new', version: '0.3' },
    { name: 'Amorphiron', imgName: 'Amorphiron',  have: false, type: [''], gender:'m', rarity: 5, status: 'new', version: '0.3' },
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
  // If rarity is undefined or null, use fallback gradient
  const rarity = c.rarity; 
  const gradient = getRarityGradient(rarity);  // Uses the updated gradient function

  const container = document.createElement('div');
  container.className = 'char-icon-container';
  container.style.background = gradient;  // Apply the gradient to the container

  const img = document.createElement('img');
  img.className = 'char-icon';

  const imgSrcName = c.imgName || c.name; // Use imgName if available, otherwise use name

  // If imgName is missing, fallback to a default image path
  img.src = `../assets/charaid/NexusAnima/TempIcons/${imgSrcName}.png`;
  img.alt = c.name;

  const fallbackImg = this.getFallbackPath(c);  
  img.onerror = () => {
    img.src = fallbackImg;  // If image fails to load, use fallback image
  };

  container.appendChild(img);

  // If there's a group, show group label (if applicable)
  if (c.group) {
    const groupLabel = document.createElement('div');
    groupLabel.className = 'type-list';
    const label = document.createElement('span');
    label.className = 'type-label';
    label.textContent = c.group;
    groupLabel.appendChild(label);
    container.appendChild(groupLabel);
  }

  // Show the popup on click (for character details)
  container.addEventListener('click', () => {
    const imgPath = `../assets/Sprite/NexusAnima/${imgSrcName}.png`;
    showPopup(imgPath, c.name);
  });

  return container;
}

};