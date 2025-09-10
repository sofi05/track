// === Filter and sort characters ===
window.filterAndSortCharacters = function (characters, isHI3 = false) {
  const newCharacters = characters.filter(char => char.status === 'new' || char.status === 'soon');

  const permaCharacters = characters.filter(char => char.perma === true);
  const permaIds = new Set(permaCharacters.map(char => char.id || char.name)); // fallback to name if no id

  let rerunCharacters = characters.filter(char =>
    char.have === false &&
    char.status === 'available' &&
    !permaIds.has(char.id || char.name)
  );

  if (isHI3) {
    rerunCharacters = rerunCharacters.filter(char => char.version);
  }

  newCharacters.sort((a, b) => a.version - b.version);
  rerunCharacters.sort((a, b) => b.version - a.version);
  permaCharacters.sort((a, b) => b.version - a.version);

  return { newCharacters, rerunCharacters, permaCharacters };
};

// === Create character card for display ===
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

  // Add click event to open popup for this character
  charBox.style.cursor = 'pointer';
  charBox.addEventListener('click', () => {
    // Use gameFolder property or fallback to window.currentGameFolder or default
    const gameFolder = char.gameFolder || window.currentGameFolder || 'ZenlessZone';
    showCharacterPopup(gameFolder, char.id || char.name);
  });

  return charBox;
};

// === Utility: Dynamically load external script ===
function loadScript(url) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${url}"]`)) {
      // Already loaded
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
    document.head.appendChild(script);
  });
}

// === Load chara.js and wait until CHARA_CONFIG and getSpritePath are ready ===
async function loadCharaJs(gameFolder) {
  // Load from js/chara.js relative to current page (which is already inside the gameFolder)
  const scriptPath = `./js/chara.js`;

  await loadScript(scriptPath);

  const maxWaitTime = 2000; // ms
  const intervalTime = 50; // ms
  let waited = 0;

  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (window.CHARA_CONFIG && window.CHARA_CONFIG.characters && typeof window.CHARA_CONFIG.getSpritePath === 'function') {
        clearInterval(interval);
        resolve({
          characters: window.CHARA_CONFIG.characters,
          getSpritePath: window.CHARA_CONFIG.getSpritePath,
        });
      } else {
        waited += intervalTime;
        if (waited >= maxWaitTime) {
          clearInterval(interval);
          reject(new Error('CHARA_CONFIG or required properties not found after loading chara.js'));
        }
      }
    }, intervalTime);
  });
}

// === Create and show character info popup ===
function createCharacterPopup(char, getSpritePath) {
  // Remove any existing popup
  const existingPopup = document.getElementById('char-popup');
  if (existingPopup) existingPopup.remove();

  const popup = document.createElement('div');
  popup.id = 'char-popup';
  Object.assign(popup.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#222',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.7)',
    zIndex: 10000,
    minWidth: '220px',
    textAlign: 'center',
  });

  // Sprite image with path from getSpritePath
  const sprite = document.createElement('img');
  sprite.src = getSpritePath(char);
  sprite.alt = char.name;
  sprite.style.width = '328px';
  sprite.style.height = '328px';
  sprite.style.objectFit = 'contain';
  sprite.onerror = () => {
    sprite.style.display = 'none';
  };

  // Name
  const nameEl = document.createElement('h2');
  nameEl.textContent = char.name;
  nameEl.style.margin = '10px 0 5px';

  // Version
  const versionEl = document.createElement('p');
  versionEl.textContent = `Version: ${char.version || 'N/A'}`;
  versionEl.style.margin = '14px 0 2px';
  
  // Rarity
  const rarityEl = document.createElement('p');
  rarityEl.textContent = `Rarity: ${char.rarity || 'N/A'} ★`;
  rarityEl.style.margin = '2px 0 4px';

  popup.appendChild(sprite);
  popup.appendChild(nameEl);
  popup.appendChild(versionEl);
  popup.appendChild(rarityEl);

  // Close popup when clicking outside
  function onClickOutside(event) {
    if (!popup.contains(event.target)) {
      popup.remove();
      document.removeEventListener('click', onClickOutside);
    }
  }

  // Delay attaching listener to avoid immediate close
  setTimeout(() => {
    document.addEventListener('click', onClickOutside);
  }, 0);

  document.body.appendChild(popup);
}

// === Show character popup by loading chara.js and finding character ===
async function showCharacterPopup(gameFolder, charIdOrName) {
  try {
    const { characters, getSpritePath } = await loadCharaJs(gameFolder);
    const char = characters.find(c => c.id === charIdOrName || c.name === charIdOrName);

    if (!char) {
      showErrorPopup('Character not found!');
      return;
    }

    createCharacterPopup(char, getSpritePath);
  } catch (error) {
    console.error(error);
    showErrorPopup('Failed to load character data or popup');
  }
}
