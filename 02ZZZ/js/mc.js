window.CHARA_CONFIG = {
  characters: [
    { name: 'Belle', imgName: '33', have: true, gender:'f', rarity: 5, hasOutfit: true },
    { name: 'Belle', imgName: '33_01', have: true, gender:'f', rarity: 5, hasOutfit: true },
    { name: 'Belle', imgName: '33_02', have: true, gender:'f', rarity: 5, hasOutfit: true },
    { name: 'Belle', imgName: '33_03', have: true, gender:'f', rarity: 5, hasOutfit: true },

    { name: 'Wise', imgName: '34', have: false, gender:'m', rarity: 5, hasOutfit: false },
    { name: 'Wise', imgName: '34_01', have: false, gender:'m', rarity: 5, hasOutfit: false },
    { name: 'Wise', imgName: '34_02', have: false, gender:'m', rarity: 5, hasOutfit: false },
    { name: 'Wise', imgName: '34_03', have: true, gender:'m', rarity: 5, hasOutfit: true },
    // ---------------------------------------------------------------------
    // TEMPLATE: copy a line, remove the // and fill it in.
    //   { name: '', imgName: '', imgName2: [''], have: true, gender: '', rarity: 5, status: 'new', hasOutfit: true },
    //
    //   imgName2      list of pictures: the icon flips between them
    //   hasOutfit    true = the icon is in the Outfit folder        status   'new' / 'soon' = label
    // ---------------------------------------------------------------------
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
      // The popup also steps through the other icons on screen (arrows / swipe / tap the picture).
      const list = (Dex.currentList || []).includes(c) ? Dex.currentList : [c];
      Promise.all(list.map((x) => this.findImage(x, 'Sprite', 'IconRole'))).then((urls) =>
        Dex.showPopup(urls, c.name, { start: list.indexOf(c) })
      );
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
    const temporary = await Dex.resolveImage(candidates[0], { temp: true }); // assets/Temp/
    return temporary || this.fallbackUrl;
  },
  get fallbackUrl() {
    return Dex.FALLBACK_ICON; // same for every game (set in shared/js/common.js)
  },
};

