document.addEventListener("DOMContentLoaded", () => {
  const newCharSlider = document.getElementById('new-characters-slider');
  const rerunSlider = document.getElementById('reruns-slider');

  const { newCharacters, rerunCharacters } = filterAndSortCharacters(characters);

  const config = {
    iconPath: '../assets/charaid/Zenless',
    elementPath: '../assets/others/Zenless/Element',
    imagePrefix: 'IconRoleCrop',
    useImgName: true,
    dynamicGradient: false,  
  };

  newCharacters.forEach(char => {
    newCharSlider.appendChild(createCharacterCard(char, config));
  });

  rerunCharacters.forEach(char => {
    rerunSlider.appendChild(createCharacterCard(char, config));
  });
});
