document.addEventListener("DOMContentLoaded", async () => {
  const GAME_ID = 'ZenlessZone';
  const versionData = window.GAME_VERSIONS?.[GAME_ID];
  const actualVersion = versionData?.version;

  if (typeof initializeCountdown === 'function') {
    initializeCountdown(GAME_ID, 'countdown-newchars');
  } 

  document.body.appendChild(charCountBox);

  const config = {
    iconPath: '../assets/charaid/Zenless',
    elementPath: '../assets/others/Zenless/Element',
    elementPrefix: 'Icon',
    imagePrefix: 'IconRoleCrop',
    useImgName: true,
    dynamicGradient: false,  
  };

  const appendChar = (container, charList) => {
    charList.forEach(char => {
      const card = createCharacterCard(char, config, getIconPath, window.CHARA_CONFIG.getFallbackPath);

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
  if (rerunCharacters.length === 0 && rerunSlider) {
  const msg = document.createElement('div');
  msg.textContent = window.EMPTY_RERUN_CHARACTERS_TEXT;
  Object.assign(msg.style, window.EMPTY_RERUN_CHARACTERS_STYLE);
  rerunSlider.appendChild(msg);
} else {
  appendChar(rerunSlider, rerunCharacters);
}
  appendChar(permaSlider, permaCharacters);

  if (permaCharacters.length === 0 && permaSection) {
    permaSection.style.display = 'none';
  }
});

function getIconPath(char, imgName, config) {
  return `${config.iconPath}/${config.imagePrefix}${imgName}.png`;
}