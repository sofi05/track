window.CHARA_CONFIG = {
  characters: [
    //HAVE - ORGANIZED BY NUMBER
    { name: 'Perlica', imgName: '0004_pelica', element: 'Electric', have: true, faction: ['EndIndustries'], gender:'f', rarity: 5},
    { name: 'Chen Qianyu', imgName: '0005_chen', element: 'Physical', have: true, faction: ['EndIndustries'], gender:'f', rarity: 5},
    { name: 'Wulfgard', imgName: '0006_wolfgd', element: 'Heat', have: true, faction: ['EndIndustries'], gender:'m', rarity: 5 },
    { name: 'Arclight', imgName: '0007_ikut', element: 'Electric', have: true, faction: ['Hannabit'], gender:'f', rarity: 5},
    { name: 'Xaihi', imgName: '0011_seraph', element: 'Cryo', have: true, faction: ['Cabal'], gender:'f', rarity: 5 },
    { name: 'Avywenna', imgName: '0012_avywen', element: 'Electric', have: true, faction: ['TGCC'], gender:'f', rarity: 5},
    { name: 'Gilberta', imgName: '0013_aglina', element: 'Nature', have: true, faction: ['Rhodes'], gender:'f', rarity: 6},
    { name: 'Snowshine', imgName: '0014_aurora', element: 'Cryo', have: true, faction: ['Rhodes'], gender:'f', rarity: 5},
    { name: 'Da Pan', imgName: '0018_dapan', element: 'Physical', have: true, faction: ['Hongshan'], gender:'m', rarity: 5},
    { name: 'Akekuri', imgName: '0019_karin', element: 'Heat', have: true, faction: ['EndIndustries'], gender:'f', rarity: 4},
    { name: 'Catcher', imgName: '0020_meurs', element: 'Physical', have: true, faction: ['EndIndustries'], gender:'m', rarity: 4},
    { name: 'Estella', imgName: '0021_whiten', element: 'Cryo', have: true, faction: ['EndIndustries'], gender:'f', rarity: 4},
    { name: 'Fluorite', imgName: '0022_bounda', element: 'Nature', have: true, faction: ['EndIndustries'], gender:'f', rarity: 4},
    { name: 'Antal', imgName: '0023_antal', element: 'Support', have: true, faction: ['EndIndustries'], gender:'m', rarity: 4},
    { name: 'Alesh', imgName: '0024_deepfin', element: 'Cryo', have: true, faction: [''], gender:'m', rarity: 5},
    { name: 'Ardelia', imgName: '0025_ardelia', element: 'Nature', have: true, faction: ['Rhodes'], gender:'f', rarity: 6},
    { name: 'Last Rite', imgName: '0026_lastrite', element: 'Cryo', have: true, faction: [''], gender:'f', rarity: 6},
    
    //DONT HAVE - ORGANIZED BY NUMBER
    { name: 'Yvonne', imgName: '0017_yvonne', element: 'Cryo', have: false, faction: ['EndIndustries'], gender:'f', rarity: 6, status: 'new', version: '1.0', p:3, want: 1 },
    { name: 'Pogranichnik', imgName: '0029_pograni', element: 'Physical', have: false, faction: ['Rhodes'], gender:'m', rarity: 6, status: 'new', version: '1.0', perma: true},
    { name: 'Lifeng', imgName: '0015_lifeng', element: 'Physical', have: false, faction: ['Hongshan'], gender:'m', rarity: 6, status: 'new', version: '1.0', perma: true, want: 2 },
    { name: 'Laevatain', imgName: '0016_laevat', element: 'Heat', have: false, faction: ['Rhodes'], gender:'f', rarity: 6, status: 'available', version: '1.0', p:2},
    { name: 'Ember', imgName: '0009_azrila', element: 'Heat', have: false, faction: ['SteelOath'], gender:'f', rarity: 6, status: 'new', version: '1.0', perma: true },

    //{ name: '', imgName: '', element: '', have: false, faction: [''], gender:'', rarity: || , status: 'new', version: '', p:2, perma: true, want: 1-2 },
    // NOTE: IN WANT 1 IS PRIORITY 2 IS SECONDARY (bc story)
  ],

  getSpritePath: function(char) {
      const imgName = char.imgName || char.name;
      const folder = char.folder || ''; 
      return `../assets/Sprite/Endfield/chr_${imgName}.png`;
    },

    //CHANGE ONCE U GET A UNKNOW ICON FROM GAME
  getFallbackPath: function(char) {
    return `../assets/others/Genshin/Random/UI_Icon_LunaRite_Unknown.png`; 
  },
  
  createImageElement(c) {
    const container = document.createElement('div');
    container.className = 'char-icon-container';

    const img = document.createElement('img');
    img.className = 'char-icon';
    const imgSrcName = c.imgName ? c.imgName : c.name;
    img.src = `../assets/charaid/Endfield/chr_${imgSrcName}.png`;  
    img.alt = c.name;

    const fallbackImg = this.getFallbackPath(c);  
    img.onerror = () => {
      img.src = fallbackImg;
    };

    const elementImg = document.createElement('img');
    elementImg.className = 'element-icon';
    elementImg.src = `../assets/others/Endfield/Element/${c.element}.png`;
    elementImg.alt = c.element;

    container.appendChild(img);
    container.appendChild(elementImg);

    // IF THERES 1+ TEXT IN A TAG ---- fix it later
    if (c.group) {
      const groupLabel = document.createElement('div');
      groupLabel.className = 'type-list';
      const label = document.createElement('span');
      label.className = 'type-label';
      label.textContent = c.group;
      groupLabel.appendChild(label);
      container.appendChild(groupLabel);
    }
    //=================================================

    container.addEventListener('click', () => {
      const imgPath = `../assets/Sprite/Endfield/chr_${imgSrcName}.png`;
      showPopup(imgPath, c.name);
    });

    return container;
  }

};