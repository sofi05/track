document.addEventListener("DOMContentLoaded", () => {
  // Get the sliders for new characters and reruns
  const newCharSlider = document.getElementById('new-characters-slider');
  const rerunSlider = document.getElementById('reruns-slider');

  // Filter for new characters (status: 'new')
  const newCharacters = characters.filter(char => char.status === 'new' || char.status === 'soon');

  // Filter for rerun characters (have: false and status: 'available')
  const rerunCharacters = characters.filter(char => char.have === false && char.status === 'available');

  // Sort new characters by version (smallest to largest)
  newCharacters.sort((a, b) => a.version - b.version);  // Sorting in ascending order (smallest to largest)

  // Sort rerun characters by version (largest to smallest)
  rerunCharacters.sort((a, b) => b.version - a.version); // Sorting in descending order (largest to smallest)

  // Function to create a character card
  const createCharacterCard = (char) => {
    // Create a character box
    const charBox = document.createElement('div');
    charBox.classList.add('version-box');

    // Create character icon wrapper
    const iconWrapper = document.createElement('div');
    iconWrapper.classList.add('icon-wrapper');

    // Set background based on rarity
    if (char.rarity === 5) {
      iconWrapper.style.background = 'linear-gradient(100deg, #7c4600ff, #ffa632cc)';
    } else {
      iconWrapper.style.background = 'linear-gradient(135deg, #805292ff, #d9c3f3cc)';
    }

    const iconImg = document.createElement('img');

    // Check if char.imgName exists
    if (char.imgName) {
      iconImg.src = `../assets/charaid/Genshin/UI_AvatarIcon_${char.imgName}.png`; // Use the image path if imgName exists
    } else {
      iconImg.src = `../assets/charaid/Genshin/UI_AvatarIcon_${char.name}.png`; 
      // Use a placeholder image if imgName is not available, with the text as the fallback
    }

    iconImg.alt = char.name;
    iconImg.classList.add('char-icon');


    const elementIcon = document.createElement('img');
    elementIcon.src = `../assets/element/Genshin/${char.element}.png`; // Modify path as needed
    elementIcon.alt = char.element;
    elementIcon.classList.add('element-icon');

    iconWrapper.appendChild(iconImg);
    iconWrapper.appendChild(elementIcon);

    // Character info (name and version)
    const charInfo = document.createElement('div');
    charInfo.classList.add('char-info');

    const charName = document.createElement('h3');
    charName.textContent = char.name;

    const charVersion = document.createElement('div');
    charVersion.textContent = `Version: ${char.version || 'N/A'}`;

    // Append character name and version
    charInfo.appendChild(charName);
    charInfo.appendChild(charVersion);

    // Check if the name overflows into two lines
    if (charName.scrollHeight > charName.clientHeight) {
      charName.classList.add('long-name'); // Apply the 'long-name' class to shrink font size
    }

    // Append the icon and character info to the character box
    charBox.appendChild(iconWrapper);
    charBox.appendChild(charInfo);

    return charBox;
  };

  // Render new characters (sorted from smallest to largest version)
  newCharacters.forEach(char => {
    const charCard = createCharacterCard(char);
    newCharSlider.appendChild(charCard);
  });

  // Render rerun characters (sorted from largest to smallest version)
  rerunCharacters.forEach(char => {
    const charCard = createCharacterCard(char);
    rerunSlider.appendChild(charCard);
  });
});

