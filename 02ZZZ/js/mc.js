window.CHARA_CONFIG = {
  characters: [
    { name: 'Belle', imgName: '33', have: true, gender:'f', rarity: 5, hasOutfit: true },
    { name: 'Belle', imgName: '33_01', have: true, gender:'f', rarity: 5, hasOutfit: true },
    { name: 'Belle', imgName: '33_02', have: true, gender:'f', rarity: 5, hasOutfit: true },
    { name: 'Belle', imgName: '33_03', have: true, gender:'f', rarity: 5, status: 'new', hasOutfit: true },

    { name: 'Wise', imgName: '34', have: false, gender:'m', rarity: 5, hasOutfit: false },
    { name: 'Wise', imgName: '34_01', have: false, gender:'m', rarity: 5, hasOutfit: false },
    { name: 'Wise', imgName: '34_02', have: false, gender:'m', rarity: 5, hasOutfit: false },
    { name: 'Wise', imgName: '34_03', have: true, gender:'m', rarity: 5, status: 'new', hasOutfit: true },
    // { name: '', imgName: '', have: true, gender:'', rarity: 5, status: 'new', hasOutfit: true },
  ],
  // ---- icons ----
  // Pictures are either in the normal folder or in "Outfit/". Use whichever exists.
  createImageElement(c) {
    const container = Dex.el('div', 'char-icon-container');
    const img = document.createElement('img');
    container.appendChild(img);

    // One picture, or several (imgName2) that flip by themselves.
    Promise.all(Dex.imageNames(c).map((name) => this.findImage({ ...c, imgName: name }, 'charaid', 'IconRoleCrop'))).then((urls) => {
      Dex.cycleImage(img, [...new Set(urls)], this.fallbackUrl);
    });
    container.addEventListener('click', () => {
      this.findImage(c, 'Sprite', 'IconRole').then((url) => Dex.showPopup(url, c.name));
    });
    return container;
  },

  async findImage(c, folder, prefix) {
    const name = c.imgName || c.name;
    const candidates = [
      `../assets/${folder}/Zenless/${prefix}${name}.png`,
      `../assets/${folder}/Zenless/Outfit/${prefix}${name}.png`,
    ];
    for (const url of candidates) {
      const found = await Dex.resolveImage(url); // png or webp
      if (found) return found;
    }
    return this.fallbackUrl;
  },
  fallbackUrl: '../assets/others/Genshin/Random/UI_Icon_LunaRite_Unknown.png',
};

