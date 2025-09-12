window.CHARA_CONFIG = {
  characters: [
  { name: 'Cassio Rollex', imgName: 'Cassio_Rollex', status: 'new', have: true, status: 'new' },
  { name: 'Hua', imgName: 'Hua', status: 'new', have: true, status: 'new' },
  { name: 'Kiana', imgName: 'Kiana', status: 'new', have: true, status: 'new' },
  { name: 'Maple Manybell', imgName: 'Maple_Manybell', status: 'new', have: true, status: 'new' },
  { name: 'Nanafey', imgName: 'Nanafey', status: 'new', have: false, status: 'new' },
  { name: 'Victus', imgName: 'The_2nd_Novarch', status: 'new', have: false, status: 'new' },
  { name: 'Kumyo Kyo', imgName: 'The_4th_Sovereign', status: 'new', have: false, status: 'new' },
  { name: 'Amstradath', imgName: 'The_5th_Sovereign', status: 'new', have: false, status: 'new'},
  { name: 'Prabhas', imgName: 'The_16th_Novarch', status: 'new', have: false, status: 'new' },
  { name: 'Armand', imgName: 'The_17th_Novarch', status: 'new', have: false, status: 'new' },
  { name: 'Blade', imgName: 'The_22nd_Novarch', status: 'new', have: false, status: 'new' },
  { name: 'Parayaya', imgName: 'The_29th_Novarch', status: 'new', have: false, status: 'new' },
  { name: 'Sir Champion', imgName: 'The_34th_Novarch', status: 'new', have: false, status: 'new' },
  { name: 'Apeiron', imgName: 'The_57th_Novarch', status: 'new', have: false, status: 'new' },
  // Add more characters here
],

getSpritePath: function(char) {
    const imgName = char.imgName || char.name;
    // Assume each char has a folder property for their folder name
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
    const imgSrcName = c.imgName || c.name;
    img.src = `../assets/charaid/NexusAnima/TempIcons/${imgName}.png`;
    img.alt = c.name;

    const fallbackImg = this.getFallbackPath(c);  // Path to fallback image
  img.onerror = () => {
    img.src = fallbackImg;
  };

    container.appendChild(img);

    // Optional group/label
    if (c.group) {
      const groupLabel = document.createElement('div');
      groupLabel.className = 'region-list';
      const label = document.createElement('span');
      label.className = 'region-label';
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