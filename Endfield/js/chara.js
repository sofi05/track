window.CHARA_CONFIG = {
  characters: [
    //have
    { name: 'Perlica', imgName: '0004_pelica', element: 'Electric', race: 'Liberi', have: true, faction: ['EndIndustries'], class:'Caster', gender:'f', rarity: 5, status: 'available'},
    { name: 'Chen Qianyu', imgName: '0005_chen', element: 'Physical', race: 'Lung', have: true, faction: ['EndIndustries'], class:'Guard', gender:'f', rarity: 5, status: 'available'},
    { name: 'Wulfgard', imgName: '0006_wolfgd', element: 'Heat', race: 'Lupo', have: true, faction: ['EndIndustries'], class:'Caster', gender:'m', rarity: 5, status: 'available' },
    { name: 'Arclight', imgName: '0007_ikut', element: 'Electric', race: 'Kuranta', have: true, faction: ['Hannabit'], class:'Vanguard', gender:'f', rarity: 5, status: 'available'},
    { name: 'Xaihi', imgName: '0011_seraph', element: 'Cryo', race: 'Sarkaz', have: true, faction: ['Cabal'], class:'Support', gender:'f', rarity: 5, status: 'available' },
    { name: 'Avywenna', imgName: '0012_avywen', element: 'Electric', race: 'Cautus', have: true, faction: ['TGCC'], class:'Striker', gender:'f', rarity: 5, status: 'available'},
    { name: 'Gilberta', imgName: '0013_aglina', element: 'Nature', race: 'Vulpo', have: true, faction: ['Rhodes'], class:'Support', gender:'f', rarity: 6, status: 'available'},
    { name: 'Snowshine', imgName: '0014_aurora', element: 'Cryo', race: 'Ursus', have: true, faction: ['Rhodes'], class:'Defender', gender:'f', rarity: 5, status: 'available'},
    { name: 'Da Pan', imgName: '0018_dapan', element: 'Physical', race: 'Ursus', have: true, faction: ['Hongshan'], class:'Striker', gender:'m', rarity: 5, status: 'available'},
    { name: 'Akekuri', imgName: '0019_karin', element: 'Heat', race: 'Perro', have: true, faction: ['EndIndustries'], class:'Vanguard', gender:'f', rarity: 4, status: 'available'},
    { name: 'Catcher', imgName: '0020_meurs', element: 'Physical', race: 'Perro', have: true, faction: ['EndIndustries'], class:'Defender', gender:'m', rarity: 4, status: 'available'},
    { name: 'Estella', imgName: '0021_whiten', element: 'Cryo', race: 'Feline', have: true, faction: ['EndIndustries'], class:'Guard', gender:'f', rarity: 4, status: 'available'},
    { name: 'Fluorite', imgName: '0022_bounda', element: 'Nature', race: 'Phidia', have: true, faction: ['EndIndustries'], class:'Caster', gender:'f', rarity: 4, status: 'available'},
    { name: 'Antal', imgName: '0023_antal', element: 'Support', race: 'Savra', have: true, faction: ['EndIndustries'], class:'Support', gender:'m', rarity: 4, status: 'available'},
    { name: 'Alesh', imgName: '0024_deepfin', element: 'Cryo', race: 'Anaty', have: true, faction: [''], class:'Vanguard', gender:'m', rarity: 5, status: 'available'},
    { name: 'Ardelia', imgName: '0025_ardelia', element: 'Nature', race: 'Caprinae', have: true, faction: ['Rhodes'], class:'Support', gender:'f', rarity: 6, status: 'available'},
    { name: 'Last Rite', imgName: '0026_lastrite', element: 'Cryo', race: 'Sarkaz', have: true, faction: [''], class:'Striker', gender:'f', rarity: 6, status: 'available'},
    
    //dont have
    { name: 'Yvonne', imgName: '0017_yvonne', element: 'Cryo', race: 'Vouivre', have: false, faction: ['EndIndustries'], class:'Caster', gender:'f', rarity: 6, status: 'available', version: '1.0' },
    { name: 'Pogranichnik', imgName: '0029_pograni', element: 'Physical', race: 'Liberi', have: false, faction: ['Rhodes'], class:'Vanguard', gender:'m', rarity: 6, status: 'available', version: '1.0' },
    { name: 'Lifeng', imgName: '0015_lifeng', element: 'Physical', race: 'Anasa', have: false, faction: ['Hongshan'], class:'Guard', gender:'m', rarity: 6, status: 'available', version: '1.0' },
    { name: 'Laevatain', imgName: '0016_laevat', element: 'Heat', race: 'Sarkaz', have: false, faction: ['Rhodes'], class:'Striker', gender:'f', rarity: 6, status: 'available', version: '1.0' },
    { name: 'Ember', imgName: '0009_azrila', element: 'Heat', race: 'Sankta', have: false, faction: ['SteelOath'], class:'Defender', gender:'f', rarity: 6, status: 'available', version: '1.0' },

    //{ name: '', imgName: '', element: '', race: '', have: false, faction: [''], class:'', gender:'', rarity: , status: 'soon', version: '1.0' },
  ],

getSpritePath: function(char) {
    const imgName = char.imgName || char.name;
    const folder = char.folder || ''; 
    return `../assets/Sprite/Endfield/chr_${imgName}.png`;
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
  img.src = `../assets/charaid/Endfield/chr_${imgSrcName}.png`;
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
    const imgPath = `../assets/Sprite/Endfield/chr_${imgSrcName}.png`;
    showPopup(imgPath, c.name);
  });

  return container;
}

};