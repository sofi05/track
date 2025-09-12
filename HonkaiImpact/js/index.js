document.addEventListener("DOMContentLoaded", () => {
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

  newCharacters.forEach(char => {
    newCharSlider.appendChild(createCharacterCard(char, config, hi3ImgPathFn, window.CHARA_CONFIG.getFallbackPath));
  });

  rerunCharacters.forEach(char => {
    rerunSlider.appendChild(createCharacterCard(char, config, hi3ImgPathFn, window.CHARA_CONFIG.getFallbackPath));
  });

  permaCharacters.forEach(char => {
    permaSlider.appendChild(createCharacterCard(char, config, hi3ImgPathFn, window.CHARA_CONFIG.getFallbackPath));
  });
});

// Icon source function (used for icons only)
function getIconPath(char, imgName, config) {
  return `${config.iconPath}/${config.imagePrefix}${imgName}.png`;  // This returns the icon path for the card
}