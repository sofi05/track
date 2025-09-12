document.addEventListener("DOMContentLoaded", async () => {
  const GAME_ID = 'HonkaiImpact';

  if (!window.GAME_VERSIONS) {
    await loadScript('../all-js.main/vs.js'); // Adjust path if needed
  }

  const actualVersion = window.GAME_VERSIONS?.[GAME_ID];

  const newCharSlider = document.getElementById('new-characters-slider');
  const rerunSlider = document.getElementById('reruns-slider');
  const permaSlider = document.getElementById('perma-slider');

  const { newCharacters, rerunCharacters, permaCharacters } = filterAndSortCharacters(characters, true);

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

      // ✅ Highlight if version matches actual version
      if (char.version && actualVersion && char.version === actualVersion) {
        card.classList.add('version-match');
      }

      container.appendChild(card);
    });
  };

  appendChar(newCharSlider, newCharacters);
  appendChar(rerunSlider, rerunCharacters);
  appendChar(permaSlider, permaCharacters);
});

function getIconPath(char, imgName, config) {
  return `${config.iconPath}/${config.imagePrefix}${imgName}.png`;
}