document.addEventListener("DOMContentLoaded", () => {
  const newCharSlider = document.getElementById('new-characters-slider');
  const rerunSlider = document.getElementById('reruns-slider');
  const permaSlider = document.getElementById('perma-slider');

  const { newCharacters, rerunCharacters, permaCharacters } = filterAndSortCharacters(characters); 

  const config = {
    iconPath: '../assets/charaid/Genshin',
    elementPath: '../assets/others/Genshin/Element',
    imagePrefix: 'UI_AvatarIcon_',
    useImgName: true,
    dynamicGradient: false,
  };

  newCharacters.forEach(char => {
    newCharSlider.appendChild(createCharacterCard(char, config)); 
  });

  rerunCharacters.forEach(char => {
    rerunSlider.appendChild(createCharacterCard(char, config));
  });

  permaCharacters.forEach(char => {
    permaSlider.appendChild(createCharacterCard(char, config));
  });
});
