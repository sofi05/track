document.addEventListener("DOMContentLoaded", () => {
  const newCharSlider = document.getElementById('new-characters-slider');
  const rerunSlider = document.getElementById('reruns-slider');
  const permaSlider = document.getElementById('perma-slider');

  const { newCharacters, rerunCharacters, permaCharacters } = filterAndSortCharacters(characters); 

  const config = {
    iconPath: '../assets/charaid/NexusAnima/TempIcons',
    imagePrefix: '',
    useImgName: true,
    dynamicGradient: false,
  };

  newCharacters.forEach(char => {
    newCharSlider.appendChild(createCharacterCard(char, config, getIconPath, window.CHARA_CONFIG.getFallbackPath)); 
  });

  rerunCharacters.forEach(char => {
    rerunSlider.appendChild(createCharacterCard(char, config, getIconPath, window.CHARA_CONFIG.getFallbackPath));
  });

  permaCharacters.forEach(char => {
    permaSlider.appendChild(createCharacterCard(char, config, getIconPath, window.CHARA_CONFIG.getFallbackPath));
  });
});

// Icon source function (used for icons only)
function getIconPath(char, imgName, config) {
  return `${config.iconPath}/${config.imagePrefix}${imgName}.png`;  // This returns the icon path for the card
}