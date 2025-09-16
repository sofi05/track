document.addEventListener("DOMContentLoaded", async () => {
  const GAME_ID = 'GenshinImpact';

  if (!window.GAME_VERSIONS) {
    await loadScript('../all-js.main/vs.js');
  }

  const versionData = window.GAME_VERSIONS?.[GAME_ID];
  const actualVersion = versionData?.version;

  if (typeof initializeCountdown === 'function') {
    initializeCountdown(GAME_ID, 'countdown-newchars');
  } else {
    console.warn('[Countdown] Function not found!');
  }

  const newCharSlider = document.getElementById('new-characters-slider');
  const rerunSlider = document.getElementById('reruns-slider');
  const permaSlider = document.getElementById('perma-slider');
  const permaSection = document.getElementById('perma');

  const { newCharacters, rerunCharacters, permaCharacters } = filterAndSortCharacters(characters);

  const config = {
    iconPath: '../assets/charaid/Genshin',
    elementPath: '../assets/others/Genshin/Element',
    imagePrefix: 'UI_AvatarIcon_',
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

  appendChar(newCharSlider, newCharacters);
  appendChar(rerunSlider, rerunCharacters);
  appendChar(permaSlider, permaCharacters);

  if (permaCharacters.length === 0 && permaSection) {
    permaSection.style.display = 'none';
  }
});

function getIconPath(char, imgName, config) {
  return `${config.iconPath}/${config.imagePrefix}${imgName}.png`;
}