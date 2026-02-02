window.CHARA_CONFIG = {
  characters: [
    //HAVE - ORGANIZED BY NUMBER
    { name: 'Perlica', imgName: '1004', element: 'Electric', have: true, group: ['EndIndustries'], gender:'f', rarity: 5},
    { name: 'Chen Qianyu', imgName: '1005', element: 'Physical', have: true, group: ['EndIndustries', 'Hongshan'], gender:'f', rarity: 5},
    { name: 'Wulfgard', imgName: '1006', element: 'Heat', have: true, group: ['EndIndustries'], gender:'m', rarity: 5 },
    { name: 'Arclight', imgName: '1007', element: 'Electric', have: true, group: ['Hannabit'], gender:'f', rarity: 5},
    { name: 'Xaihi', imgName: '1011', element: 'Cryo', have: true, group: ['Cabal'], gender:'f', rarity: 5 },
    { name: 'Avywenna', imgName: '1012', element: 'Electric', have: true, group: ['TGCC'], gender:'f', rarity: 5},
    { name: 'Gilberta', imgName: '1013', element: 'Nature', have: true, group: ['Rhodes'], gender:'f', rarity: 6},
    { name: 'Snowshine', imgName: '1014', element: 'Cryo', have: true, group: ['Rhodes'], gender:'f', rarity: 5},
    { name: 'Laevatain', imgName: '1016', element: 'Heat', have: true, group: ['Rhodes'], gender:'f', rarity: 6},
    { name: 'Da Pan', imgName: '1018', element: 'Physical', have: true, group: ['Hongshan'], gender:'m', rarity: 5},
    { name: 'Akekuri', imgName: '1019', element: 'Heat', have: true, group: ['EndIndustries'], gender:'f', rarity: 4},
    { name: 'Catcher', imgName: '1020', element: 'Physical', have: true, group: ['EndIndustries'], gender:'m', rarity: 4},
    { name: 'Estella', imgName: '1021', element: 'Cryo', have: true, group: ['EndIndustries'], gender:'f', rarity: 4},
    { name: 'Fluorite', imgName: '1022', element: 'Nature', have: true, group: ['EndIndustries'], gender:'f', rarity: 4},
    { name: 'Antal', imgName: '1023', element: 'Electric', have: true, group: ['EndIndustries'], gender:'m', rarity: 4},
    { name: 'Alesh', imgName: '1024', element: 'Cryo', have: true, group: ['UWST'], gender:'m', rarity: 5},
    { name: 'Ardelia', imgName: '1025', element: 'Nature', have: true, group: ['Rhodes'], gender:'f', rarity: 6},
    { name: 'Last Rite', imgName: '1026', element: 'Cryo', have: true, group: ['Sesqa'], gender:'f', rarity: 6},
    
    //DONT HAVE - ORGANIZED BY NUMBER
    { name: 'Ember', imgName: '1009', element: 'Heat', have: false, group: ['OrderSO'], gender:'f', rarity: 6, status: 'available', version: '1.0', perma: true },
    { name: 'Lifeng', imgName: '1015', element: 'Physical', have: false, group: ['Hongshan'], gender:'m', rarity: 6, status: 'available', version: '1.0', perma: true, want: 2 },
    { name: 'Yvonne', imgName: '1017', element: 'Cryo', have: false, group: ['EndIndustries'], gender:'f', rarity: 6, status: 'new', version: '1.0', p:3, want: 1 },
    { name: 'Pogranichnik', imgName: '1029', element: 'Physical', have: false, group: ['Rhodes'], gender:'m', rarity: 6, status: 'available', version: '1.0', perma: true},

    //{ name: '', imgName: '', element: '', have: false, group: [''], gender:'', rarity: || , status: 'new', version: '', p:2, perma: true, want: 1-2 },
    //  Element: Electric | Physical | Heat | Cryo | Nature 
    //  Group: Hongshan | EndIndustries | Rhodes | UWST | TGCC | OrderSO | Cabal | Hannabit | Sesqa
  ],

  getSpritePath: function(char) {
      const imgName = char.imgName || char.name;
      const folder = char.folder || ''; 
      return `../assets/Sprite/Endfield/${imgName}_splash.png`;
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
    img.src = `../assets/charaid/Endfield/${imgSrcName}.png`;  
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
      const imgPath = `../assets/Sprite/Endfield/${imgSrcName}_splash.png`;
      showPopup(imgPath, c.name);
    });

    return container;
  }

};