window.filterAndSortCharacters = function (characters, isHI3 = false) {
  const newCharacters = characters.filter(char => 
    char.have === false &&
    char.status === 'new' || char.status === 'soon');

  const permaCharacters = characters.filter(char => char.perma === true);
  const permaIds = new Set(permaCharacters.map(char => char.id || char.name)); 

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

window.createCharacterCard = function (char, config, customImgPathFn, customFallbackPathFn) {
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

  const rarityGradients = {
    5: 'linear-gradient(100deg, #7c4600ff, #ffa632cc)',  // Rarity 5
    4: 'linear-gradient(135deg, #805292ff, #d9c3f3cc)',  // Rarity 4
    3: 'linear-gradient(135deg, #498ee7ff, #c3f3e7cc)',  // Rarity 3
  };

  // Use char.rarity or fallback to null if invalid, then apply the gradient or fallback to gray
  const charRarity = [3, 4, 5].includes(char.rarity) ? char.rarity : null;

  iconWrapper.style.background = rarityGradients[charRarity] || 'linear-gradient(135deg, #444, #999)';

  const iconImg = document.createElement('img');
  const imgName = useImgName ? char.imgName || char.name : char.name;

  const iconSrc = customImgPathFn ? customImgPathFn(char, imgName, config)
    : `${iconPath}/${imagePrefix}${imgName}${imageSuffix}.png`;

  iconImg.src = iconSrc;
  iconImg.alt = char.name;
  iconImg.classList.add('char-icon');

  const fallbackImg = customFallbackPathFn ? customFallbackPathFn(char) : null;

  iconImg.onerror = function () {
    if (fallbackImg && iconImg.src !== fallbackImg) {
      iconImg.src = fallbackImg;
    }
  };

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

  charBox.style.cursor = 'pointer';
  charBox.addEventListener('click', () => {
    const spritePath = window.CHARA_CONFIG.getSpritePath(char);  
    showCharacterPopup(char.gameFolder || 'ZenlessZone', char.id || char.name, spritePath);  
  });

  return charBox;
};

// === Utility: Dynamically load external script ===
function loadScript(url) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${url}"]`)) {
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

async function loadCharaJs(gameFolder) {
  const scriptPath = `./js/chara.js`;
  await loadScript(scriptPath);

  const maxWaitTime = 2000; 
  const intervalTime = 50; 
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
  document.getElementById('char-popup')?.remove();
  document.getElementById('popup-backdrop')?.remove();

  const backdrop = document.createElement('div');
  backdrop.id = 'popup-backdrop';
  Object.assign(backdrop.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 9999,
  });

  backdrop.addEventListener('click', () => {
    popup.remove();
    backdrop.remove();
    clearInterval(countdownInterval);
  });

  // === POPUP BOX ===
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
    borderRadius: '28px',
    boxShadow: '0 0 10px rgba(0,0,0,0.7)',
    zIndex: 10000,
    minWidth: '220px',
    textAlign: 'center',
    width: '360px',
    maxWidth: '95vw',
  });

  // === IMAGE CONTAINER ===
  const imageContainer = document.createElement('div');
  Object.assign(imageContainer.style, {
    position: 'relative',
    width: '100%',
    height: '400px', // fixed height so popup size doesn’t change
    overflow: 'hidden',
    borderRadius: '20px',
  });

  const sprite = document.createElement('img');
sprite.src = getSpritePath(char);
sprite.alt = char.name;
sprite.style.width = '100%';
sprite.style.height = '100%';
sprite.style.display = 'block';
sprite.style.objectFit = 'cover';
sprite.style.objectPosition = 'center top';

// Apply fading masks inline
sprite.style.WebkitMaskImage = `
  linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
  linear-gradient(to bottom, black 85%, transparent 100%)
`;
sprite.style.maskImage = `
  linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
  linear-gradient(to bottom, black 85%, transparent 100%)
`;
sprite.style.WebkitMaskComposite = 'destination-in';
sprite.style.maskComposite = 'intersect';

sprite.onerror = () => {
  sprite.style.display = 'none';
};

// Once the image loads, adjust based on aspect ratio
sprite.onload = () => {
  const aspectRatio = sprite.naturalWidth / sprite.naturalHeight;

  if (aspectRatio < 0.65) {
    // Portrait → show more head/upper body
    sprite.style.objectFit = 'contain';
    sprite.style.objectPosition = 'center top';
    sprite.style.transform = 'scale(1.15)'; // Slight zoom-in for better crop
  } else {
    // Wide → normal crop
    sprite.style.objectFit = 'cover';
    sprite.style.objectPosition = 'center top';
    sprite.style.transform = '';
  }
};


  sprite.onerror = () => {
    sprite.style.display = 'none';
  };

  const closeButton = document.createElement('button');
  closeButton.textContent = '✕';
  Object.assign(closeButton.style, {
    position: 'absolute',
    top: '4px',
    right: '4px',
    background: 'rgba(0, 0, 0, 0)',
    border: 'none',
    color: '#fff',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '50%',
    padding: '2px 6px',
    zIndex: 10,
  });

  closeButton.addEventListener('click', () => {
    popup.remove();
    backdrop.remove();
    clearInterval(countdownInterval);
  });

  imageContainer.appendChild(sprite);
  imageContainer.appendChild(closeButton);
  popup.appendChild(imageContainer);

  // === INFO BELOW IMAGE ===
  const nameEl = document.createElement('h2');
  nameEl.textContent = char.name;
  nameEl.style.margin = '10px 0 5px';

  const versionLine = document.createElement('div');
  Object.assign(versionLine.style, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const versionEl = document.createElement('span');
  versionEl.textContent = `Version: ${char.version || 'N/A'}`;

  const countdownEl = document.createElement('span');
  countdownEl.classList.add('inline-countdown');
  countdownEl.textContent = '';

  versionLine.appendChild(versionEl);
  versionLine.appendChild(countdownEl);

  const rarityEl = document.createElement('p');
  rarityEl.textContent = `Rarity: ${char.rarity || 'N/A'} ★`;
  rarityEl.style.margin = '2px 0 4px';

  popup.appendChild(nameEl);
  popup.appendChild(versionLine);
  popup.appendChild(rarityEl);

  document.body.appendChild(backdrop);
  document.body.appendChild(popup);

  // === COUNTDOWN LOGIC ===
  function findMatchingVersionDates(charVersion) {
    for (const [gameKey, gameData] of Object.entries(window.GAME_VERSIONS)) {
      if (gameData.date1vs === charVersion && gameData.date1) {
        return { targetDate: new Date(gameData.date1), versionLabel: gameData.date1vs };
      }
      if (gameData.date2vs === charVersion && gameData.date2) {
        return { targetDate: new Date(gameData.date2), versionLabel: gameData.date2vs };
      }
    }
    return null;
  }

  const match = findMatchingVersionDates(char.version);

  function updateCountdown() {
    if (!match) {
      countdownEl.textContent = '';
      return;
    }
    const now = new Date();
    const diff = match.targetDate - now;
    if (diff <= 0) {
      countdownEl.textContent = ' (Released)';
      return;
    }
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let label = '';
    if (days > 0) label = `in ${days}d`;
    else if (hours > 0) label = `in ${hours % 24}h`;
    else if (minutes > 0) label = `in ${minutes % 60}m`;
    else label = `in ${seconds % 60}s`;

    countdownEl.textContent = ` (${label})`;
  }

  let countdownInterval = null;
  if (match) {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
  }
}


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
    showErrorPopup('Failed to load character data or popup');
  }
}

iconImg.onerror = () => {
  if (fallbackImg) {
    iconImg.src = fallbackImg;
  }
};