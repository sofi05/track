window.CHARA_CONFIG = {
  characters: [
    //Rarity 4
    { name: '', imgName: '',  have: false, type: [''], gender:'', rarity: 5, status: '', version: '0.0' },
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