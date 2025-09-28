document.addEventListener("DOMContentLoaded", async () => {
  const GAME_ID = 'NexusAnima';

  if (!window.GAME_VERSIONS) {
    await loadScript('../all-js.main/vs.js');
  }

  const versionData = window.GAME_VERSIONS?.[GAME_ID];
  const actualVersion = versionData?.version;

  if (typeof initializeCountdown === 'function') {
    initializeCountdown(GAME_ID, 'countdown-newchars');
  } 

  const newCharSlider = document.getElementById('new-characters-slider');
  const rerunSlider = document.getElementById('reruns-slider');
  const permaSlider = document.getElementById('perma-slider');
  const permaSection = document.getElementById('perma');

  // Filter characters as usual
  const { newCharacters, rerunCharacters, permaCharacters } = filterAndSortCharacters(characters); 

    // === Add character count to top right corner ===
  const totalCount = newCharacters.length + rerunCharacters.length + permaCharacters.length;

  const charCountBox = document.createElement('div');
  charCountBox.textContent = `Total: ${totalCount} Characters`;
  Object.assign(charCountBox.style, {
    position: 'fixed',
    top: '6px',
    right: '8px',
    fontSize: '12px',
    color: '#fff',
    background: '#0008',
    padding: '4px 8px',
    borderRadius: '6px',
    zIndex: '9999',
    fontFamily: 'monospace',
    pointerEvents: 'none'
  });

  document.body.appendChild(charCountBox);

  // Sort characters by version (newest first) and then alphabetically (A-Z)
  const sortByVersionAndName = (a, b) => {
    // Compare by version first (descending)
    const versionDiff = (b.version || '0.0') - (a.version || '0.0');
    if (versionDiff !== 0) return versionDiff;

    // If versions are equal, sort alphabetically by name (A-Z)
    return a.name.localeCompare(b.name);
  };

  const sortedNewCharacters = [...newCharacters].sort(sortByVersionAndName);
  const sortedRerunCharacters = [...rerunCharacters].sort(sortByVersionAndName);
  const sortedPermaCharacters = [...permaCharacters].sort(sortByVersionAndName);

  const config = {
    iconPath: '../assets/charaid/NexusAnima/TempIcons',
    elementPath: '',
    imagePrefix: '',
    useImgName: true,
    dynamicGradient: false,
  };

  const appendChar = (container, charList) => {
    charList.forEach(char => {
      const card = createCharacterCard(char, config, getIconPath, window.CHARA_CONFIG.getFallbackPath);

      if (char.version && actualVersion && char.version === actualVersion) {
        card.classList.add('version-match');
      }

      container.appendChild(card);
    });
  };

  appendChar(newCharSlider, sortedNewCharacters);
  appendChar(rerunSlider, sortedRerunCharacters);
  appendChar(permaSlider, sortedPermaCharacters);

  if (sortedPermaCharacters.length === 0 && permaSection) {
    permaSection.style.display = 'none';
  }
});

// Icon source function (used for icons only)
function getIconPath(char, imgName, config) {
  return `${config.iconPath}/${config.imagePrefix}${imgName}.png`;  // This returns the icon path for the card
}