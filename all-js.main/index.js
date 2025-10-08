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

  const isMobile = window.innerWidth <= 480;

  let countdownInterval = null;
  let phaseInterval = null;

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

  const popup = document.createElement('div');
  popup.id = 'char-popup';
  popup.classList.add('responsive-popup');
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

  const imageContainer = document.createElement('div');
  Object.assign(imageContainer.style, {
    position: 'relative',
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    borderRadius: '20px',
  });

  function cleanupPopup() {
    popup.remove();
    backdrop.remove();
    clearInterval(countdownInterval);
    clearInterval(phaseInterval);
    window.removeEventListener('keydown', onKeyDown);
    document.body.style.overflow = '';
  }

  function onKeyDown(event) {
    if (event.key === 'Escape') cleanupPopup();
  }
  window.addEventListener('keydown', onKeyDown);

  const sprite = document.createElement('img');
  sprite.src = getSpritePath(char);
  sprite.alt = char.name;
  Object.assign(sprite.style, {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    objectPosition: 'center top',
    WebkitMaskImage: `
      linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
      linear-gradient(to bottom, black 85%, transparent 100%)
    `,
    maskImage: `
      linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
      linear-gradient(to bottom, black 85%, transparent 100%)
    `,
    WebkitMaskComposite: 'destination-in',
    maskComposite: 'intersect',
  });

  sprite.onerror = () => {
    sprite.style.display = 'none';
    const fallback = document.createElement('div');
    Object.assign(fallback.style, {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontSize: '14px',
      height: '200px',
      width: '150px',
      margin: '0 auto',
      backgroundColor: '#333',
      borderRadius: '20px',
    });
    ['Nothing here yet', '(－ω－)｡｡｡ zᶻᶻ'].forEach(text => {
      const line = document.createElement('div');
      line.textContent = text;
      line.style.margin = '2px 0';
      fallback.appendChild(line);
    });
    imageContainer.style.height = isMobile ? '150px' : '200px';
    fallback.style.width = isMobile ? '120px' : '150px';
    fallback.style.height = isMobile ? '150px' : '200px';
    imageContainer.appendChild(fallback);
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
  closeButton.addEventListener('click', cleanupPopup);
  backdrop.addEventListener('click', cleanupPopup);

  imageContainer.appendChild(sprite);
  imageContainer.appendChild(closeButton);
  popup.appendChild(imageContainer);

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

  // === Phase with dynamic status ===
  const phaseEl = document.createElement('div');
  phaseEl.style.marginTop = '4px';
  phaseEl.style.opacity = '0.9';
  phaseEl.style.fontSize = '14px';
  phaseEl.style.color = '#b4b4b4ff';
  const phaseText = document.createElement('span');
  phaseText.textContent = `Phase ${char.p}`;
  const phaseStatus = document.createElement('span');
  phaseStatus.style.marginLeft = '4px';
  phaseStatus.style.opacity = '0.85';
 if (char.p) {
  phaseEl.appendChild(phaseText);
  phaseEl.appendChild(phaseStatus);
  popup.appendChild(phaseEl);
}

  function parseDate(s) {
    if (!s) return null;
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  }
  function firstNonEmptyDate(...vals) {
    for (const v of vals) {
      const d = parseDate(v);
      if (d) return d;
    }
    return null;
  }

  function findPhaseWindow(version, pNum) {
    const gv = window.GAME_VERSIONS || {};
    for (const g of Object.values(gv)) {
      if (g.version === version) {
        const start = parseDate(g[`p${pNum}`]);
        const end = pNum === 1 ? parseDate(g.p2) || firstNonEmptyDate(g.date1, g.date2) : firstNonEmptyDate(g.date1, g.date2);
        return { start, end };
      }
      if (g.date1vs === version) {
        const start = parseDate(g[`date1p${pNum}`]);
        const end = pNum === 1 ? parseDate(g.date1p2) || parseDate(g.date2) : parseDate(g.date2);
        return { start, end };
      }
      if (g.date2vs === version) {
        const start = parseDate(g[`date2p${pNum}`]);
        const end = pNum === 1 ? parseDate(g.date2p2) || parseDate(g.date2) : parseDate(g.date2);
        return { start, end };
      }
    }
    return { start: null, end: null };
  }

  function formatCountdown(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    const d = Math.floor(h / 24);
    if (d > 0) return `(${d}d)`;
    if (h > 0) return `(${h % 24}h)`;
    if (m > 0) return `(${m % 60}m)`;
    return `(~${s % 60}s)`;
  }

  const { start: phaseStart, end: phaseEnd } = findPhaseWindow(char.version, char.p);

  if (char.p) {
  phaseText.textContent = `Phase ${char.p}`;
} else {
  phaseText.textContent = '';
}

  function updatePhaseStatus() {
  if (!phaseStart || !char.p) {
    phaseStatus.textContent = '';
    return;
  }

  // Only show countdown if this is the "current" version (not date1vs/date2vs)
  const gv = window.GAME_VERSIONS || {};
  let isCurrentVersion = false;
  for (const g of Object.values(gv)) {
    if (g.version === char.version) {
      isCurrentVersion = true;
      break;
    }
  }

  if (!isCurrentVersion) {
    phaseStatus.textContent = ''; // no countdown for future versions
    return;
  }

  const now = new Date();
  if (!phaseEnd) {
    phaseStatus.textContent = formatCountdown(phaseStart - now);
  } else if (now < phaseStart) {
    phaseStatus.textContent = formatCountdown(phaseStart - now);
  } else if (now >= phaseEnd) {
    phaseStatus.textContent = '(ended)';
  } else {
    phaseStatus.textContent = '(active)';
  }
}
  updatePhaseStatus();
  phaseInterval = setInterval(updatePhaseStatus, 1000);

  const rarityEl = document.createElement('p');
  rarityEl.textContent = `Rarity: ${char.rarity || 'N/A'} ★`;
  rarityEl.style.margin = '2px 0 4px';

  popup.appendChild(nameEl);
  popup.appendChild(versionLine);
  popup.appendChild(phaseEl);
  popup.appendChild(rarityEl);

  if (isMobile) {
    nameEl.style.margin = '6px 0 2px';
    nameEl.style.fontSize = '18px';
    popup.style.padding = '12px';
    popup.style.width = '280px';
    popup.style.minWidth = '180px';
    imageContainer.style.height = 'auto';
    imageContainer.style.aspectRatio = '3 / 4';
  }

  document.body.appendChild(backdrop);
  document.body.appendChild(popup);
  document.body.style.overflow = 'hidden';

  // === Countdown for version (special case for dateXp2) ===
  function findVersionCountdown(version, phaseNum) {
    for (const [, g] of Object.entries(window.GAME_VERSIONS)) {
      if (g.date1vs === version && g.date1p2 && phaseNum === 2) return new Date(g.date1p2);
      if (g.date2vs === version && g.date2p2 && phaseNum === 2) return new Date(g.date2p2);
      if (g.date1vs === version && g.date1 && !(phaseNum === 2 && g.date1p2)) return new Date(g.date1);
      if (g.date2vs === version && g.date2 && !(phaseNum === 2 && g.date2p2)) return new Date(g.date2);
    }
    return null;
  }

  const versionCountdownDate = findVersionCountdown(char.version, char.p);

  function updateVersionCountdown() {
    if (!versionCountdownDate) return (countdownEl.textContent = '');
    const now = new Date();
    const diff = versionCountdownDate - now;
    if (diff <= 0) return (countdownEl.textContent = ' (Released)');
    const s = Math.floor(diff / 1000);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    const d = Math.floor(h / 24);
    let label = '';
    if (d > 0) label = `in ${d}d`;
    else if (h > 0) label = `in ${h % 24}h`;
    else if (m > 0) label = `in ${m % 60}m`;
    else label = `in ${s % 60}s`;
    countdownEl.textContent = ` (${label})`;
  }

  if (versionCountdownDate) {
    updateVersionCountdown();
    countdownInterval = setInterval(updateVersionCountdown, 1000);
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