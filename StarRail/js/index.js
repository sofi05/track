document.addEventListener("DOMContentLoaded", () => {
  const newCharSlider = document.getElementById('new-characters-slider');
  const rerunSlider = document.getElementById('reruns-slider');

  const newCharacters = characters.filter(char => char.status === 'new' || char.status === 'soon');
  const rerunCharacters = characters.filter(char => char.have === false && char.status === 'available');

  newCharacters.sort((a, b) => a.version - b.version);
  rerunCharacters.sort((a, b) => b.version - a.version);

  const config = {
    iconPath: '../assets/charaid/StarRail',
    elementPath: '../assets/others/StarRail/Element',
    imagePrefix: '',
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
