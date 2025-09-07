document.addEventListener("DOMContentLoaded", () => {
  const newCharSlider = document.getElementById('new-characters-slider');
  const rerunSlider = document.getElementById('reruns-slider');

  const { newCharacters, rerunCharacters } = filterAndSortCharacters(characters); // ✅ global call

  const config = {
    iconPath: '../assets/charaid/Genshin',
    elementPath: '../assets/others/Genshin/Element',
    imagePrefix: 'UI_AvatarIcon_',
    useImgName: true,
    dynamicGradient: false,
  };

  newCharacters.forEach(char => {
    newCharSlider.appendChild(createCharacterCard(char, config)); // ✅ global call
  });

  rerunCharacters.forEach(char => {
    rerunSlider.appendChild(createCharacterCard(char, config));
  });
});
