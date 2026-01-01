document.addEventListener("DOMContentLoaded", async () => {
  const GAME_ID = 'HonkaiImpact';

  if (!window.GAME_VERSIONS) {
    await loadScript('../shared/js/vs.js'); 
  }

  const versionData = window.GAME_VERSIONS?.[GAME_ID];
  const actualVersion = versionData?.version;

  if (typeof initializeCountdown === 'function') {
    initializeCountdown(GAME_ID, 'countdown-newchars');
  }

  const newCharSlider = document.getElementById('new-characters-slider');
  const rerunSlider = document.getElementById('reruns-slider');
  const permaSlider = document.getElementById('perma-slider');
  const permaSection = document.getElementById('perma');

  const { newCharacters, rerunCharacters, permaCharacters } = filterAndSortCharacters(characters, true);

    // === Add character count to top right corner ===
  const totalCount = newCharacters.length + rerunCharacters.length + permaCharacters.length;

  const charCountBox = document.createElement('div');
  charCountBox.textContent = `Total: ${totalCount} Characters`;
  Object.assign(charCountBox.style, {
    position: 'fixed',
    top: '6px',
    right: '8px',
    fontSize: '12px',
    color: '#fff',
    background: '#0008',
    padding: '4px 8px',
    borderRadius: '6px',
    zIndex: '9999',
    fontFamily: 'monospace',
    pointerEvents: 'none'
  });

  document.body.appendChild(charCountBox);

  permaCharacters.sort((a, b) => {
    const aVersion = isNaN(Number(a.version)) ? -Infinity : Number(a.version);
    const bVersion = isNaN(Number(b.version)) ? -Infinity : Number(b.version);

    if (aVersion === -Infinity && bVersion === -Infinity) return 0;
    if (aVersion === -Infinity) return 1;
    if (bVersion === -Infinity) return -1;

    return bVersion - aVersion; // Sort descending
  });

  const config = {
    iconPath: '../assets/charaid/Honkai',
    elementPath: '../assets/others/HI3/Element',
    dynamicGradient: true,
    useImgName: true,
  };

  // Custom image path function for HI3 to include folder
  const hi3ImgPathFn = (char, imgName, config) => {
    return `${config.iconPath}/${char.folder}/${imgName}.png`;
  };

  const appendChar = (container, charList) => {
    charList.forEach(char => {
      const card = createCharacterCard(char, config, hi3ImgPathFn, window.CHARA_CONFIG.getFallbackPath);

      if (char.version && actualVersion && char.version === actualVersion) {
        card.classList.add('version-match');
      }

      container.appendChild(card);
    });
  };

  if (newCharacters.length === 0 && newCharSlider) {
  const msg = document.createElement('div');
  msg.textContent = window.EMPTY_NEW_CHARACTERS_TEXT;
  Object.assign(msg.style, window.EMPTY_NEW_CHARACTERS_STYLE);
  newCharSlider.appendChild(msg);
} else {
  appendChar(newCharSlider, newCharacters);
}
  appendChar(rerunSlider, rerunCharacters);
  appendChar(permaSlider, permaCharacters);
  
  if (permaCharacters.length === 0 && permaSection) {
    permaSection.style.display = 'none';
  }
});

function getIconPath(char, imgName, config) {
  return `${config.iconPath}/${config.imagePrefix}${imgName}.png`;
}