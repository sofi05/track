window.filterAndSortCharacters = function (characters, isHI3 = false) {
  const newCharacters = characters.filter(char => char.status === 'new' || char.status === 'soon');
  let rerunCharacters = characters.filter(char => char.have === false && char.status === 'available');

  if (isHI3) rerunCharacters = rerunCharacters.filter(char => char.version);

  newCharacters.sort((a, b) => a.version - b.version);
  rerunCharacters.sort((a, b) => b.version - a.version);

  return { newCharacters, rerunCharacters };
};

window.createCharacterCard = function (char, config, customImgPathFn) {
  const {
    iconPath,
    elementPath,
    imagePrefix = '',
    imageSuffix = '',
    useImgName = true,
    dynamicGradient = true,
  } = config;

  const charBox = document.createElement('div');
  charBox.classList.add('version-box');

  const iconWrapper = document.createElement('div');
  iconWrapper.classList.add('icon-wrapper');

  if (dynamicGradient) {
    const rarityGradients = {
      5: 'linear-gradient(100deg, #7c4600ff, #ffa632cc)',
      4: 'linear-gradient(135deg, #805292ff, #d9c3f3cc)',
      3: 'linear-gradient(135deg, #498ee7ff, #c3f3e7cc)',
    };
    iconWrapper.style.background = rarityGradients[char.rarity] || 'linear-gradient(135deg, #444, #999)';
  } else {
    iconWrapper.style.background = (char.rarity === 5)
      ? 'linear-gradient(100deg, #7c4600ff, #ffa632cc)'
      : 'linear-gradient(135deg, #805292ff, #d9c3f3cc)';
  }

  const iconImg = document.createElement('img');
  const imgName = useImgName ? char.imgName || char.name : char.name;

  // Use custom function if provided, otherwise default path build
  iconImg.src = customImgPathFn 
    ? customImgPathFn(char, imgName, config) 
    : `${iconPath}/${imagePrefix}${imgName}${imageSuffix}.png`;

  iconImg.alt = char.name;
  iconImg.classList.add('char-icon');

  const elementIcon = document.createElement('img');
  elementIcon.src = `${elementPath}/${char.element}.png`;
  elementIcon.alt = char.element;
  elementIcon.classList.add('element-icon');

  iconWrapper.appendChild(iconImg);
  iconWrapper.appendChild(elementIcon);

  const charInfo = document.createElement('div');
  charInfo.classList.add('char-info');

  const charName = document.createElement('h3');
  charName.textContent = char.name;

  const charVersion = document.createElement('div');
  charVersion.textContent = `Version: ${char.version || 'N/A'}`;

  charInfo.appendChild(charName);
  charInfo.appendChild(charVersion);

  if (charName.scrollHeight > charName.clientHeight) {
    charName.classList.add('long-name');
  }

  charBox.appendChild(iconWrapper);
  charBox.appendChild(charInfo);

  return charBox;
};

