document.addEventListener("DOMContentLoaded", () => {
  const newCharSlider = document.getElementById('new-characters-slider');
  const rerunSlider = document.getElementById('reruns-slider');

  // Use the shared filter function (same filter logic for zzz)
  const { newCharacters, rerunCharacters } = filterAndSortCharacters(characters);

  const config = {
    iconPath: '../assets/charaid/Zenless',
    elementPath: '../assets/others/Zenless/Element',
    imagePrefix: 'IconRoleCrop',
    useImgName: true,
    dynamicGradient: false,  // zzz uses simple 5-star or else gradient
  };

  newCharacters.forEach(char => {
    newCharSlider.appendChild(createCharacterCard(char, config));
  });

  rerunCharacters.forEach(char => {
    rerunSlider.appendChild(createCharacterCard(char, config));
  });
});
