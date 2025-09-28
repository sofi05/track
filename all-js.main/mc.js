const charListEl = document.getElementById('charList');
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');
const genderToggleBtn = document.getElementById('genderToggleBtn');
const characterName = document.getElementById('characterName');
const searchInput = document.getElementById('searchInput'); 

let selectedFilters;
let selectedGender = 'f';
let selectedGP = '1';     // new, for typeB
let selectedPart = '2';

const filterDefaults = {
  have: null,
  newStatus: {
    new: false,
    soon: false,
  },
  element: null,
  gender: null,
  group: null,
};

const isTypeB = (window.CHARA_CONFIG?.pageType === 'typeB');
const characters = window.CHARA_CONFIG?.characters || [];
const hasPartInfo = characters.some(c => typeof c.part !== 'undefined');

function initializeFilters() {
  selectedFilters = JSON.parse(JSON.stringify(filterDefaults));
  if (isTypeB) {
    selectedFilters.GP = selectedGP; 
  } else {
    selectedFilters.gender = selectedGender;
  }
  updateTitleBasedOnToggle();
}

// ===== Rarity Gradient Helper =====
function getRarityGradient(rarity) {
  const gradients = {
    5: 'linear-gradient(100deg, #7c4600ff, #ffa632cc)',
    4: 'linear-gradient(135deg, #805292ff, #d9c3f3cc)',
    3: 'linear-gradient(135deg, #498ee7ff, #c3f3e7cc)',
  };
  return gradients[rarity] || 'linear-gradient(135deg, #444, #999)';
}

// ===== Type B: Merge Characters by Name + Gender =====
function groupTypeBCharacters(characters) {
  const map = new Map();

  characters.forEach(char => {
    const key = `${char.name}_${char.gender}`;
    const elementsArray = Array.isArray(char.element)
    ? char.element.filter(el => el != null)
    : (char.element != null ? [char.element] : []);

    if (!map.has(key)) {
      map.set(key, {
        ...char,
        elements: elementsArray,
        imgNames: [char.imgName],
        allVersions: [char],
      });
    } else {
      const entry = map.get(key);
      entry.elements.push(...elementsArray);
      entry.imgNames.push(char.imgName);
      entry.allVersions.push(char);
    }
  });

  return Array.from(map.values()).map(c => ({
    ...c,
    elements: [...new Set(c.elements)],
  }));
}

function renderList() {
  charListEl.innerHTML = '';
  const searchTerm = searchInput?.value?.toLowerCase() || '';

  // Filter characters based on current filters BEFORE grouping for Type B
  let filteredChars = characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => {
      if (isTypeB && selectedFilters.GP && c.GP != selectedFilters.GP) return false;
      if (!isTypeB && selectedFilters.gender && c.gender !== selectedFilters.gender) return false;

      if (selectedFilters.element && c.element !== selectedFilters.element) return false;
      if (selectedFilters.group && c.group !== selectedFilters.group) return false;

      if (hasPartInfo) {
        if (!(selectedPart === 'all' || c.part === selectedPart || (selectedPart === 'collab' && c.collab))) {
          return false;
        }
      }
      // Filter: Have
      if (selectedFilters.have !== null) {
        if (selectedFilters.have && !c.have) return false;
        if (!selectedFilters.have && c.have) return false;
      }

      // Filter: Status (New / Soon)
      const wantsNew = selectedFilters.newStatus.new;
      const wantsSoon = selectedFilters.newStatus.soon;

      if (wantsNew || wantsSoon) {
        if (wantsNew && wantsSoon) {
          if (!(c.status === 'new' || c.status === 'soon')) return false;
        } else if (wantsNew && c.status !== 'new') {
          return false;
        } else if (wantsSoon && c.status !== 'soon') {
          return false;
        }
      }

      const charName = selectedGender === 'f' ? c.name : c.maleName || c.name;
      if (!charName.toLowerCase().includes(searchTerm)) return false;

      return true;
    });

  if (isTypeB) {
    filteredChars = groupTypeBCharacters(filteredChars);
  }

  const CURRENT_GAME = (window.CHARA_CONFIG?.game || 'Genshin').charAt(0).toUpperCase() + (window.CHARA_CONFIG?.game || 'Genshin').slice(1).toLowerCase();

  filteredChars.forEach(c => {
  const card = document.createElement('div');
  card.className = 'char-card';

  const elementText = 
    Array.isArray(c.elements) && c.elements.length > 0 ? c.elements.join(', ') :
    (typeof c.element === 'string' && c.element.trim() !== '' ? c.element : '');

  card.title = elementText 
    ? `(${elementText}, ${c.rarity}★)` 
    : `(${c.rarity}★)`;

  const iconWrapper = document.createElement('div');
  iconWrapper.className = 'icon-wrapper';
  iconWrapper.style.background = getRarityGradient(c.rarity);

  if (c.status === 'new') {
    const newLabel = document.createElement('div');
    newLabel.textContent = 'NEW';
    newLabel.className = 'soon-label';
    iconWrapper.appendChild(newLabel);
  }
  if (c.status === 'soon') {
    const soonLabel = document.createElement('div');
    soonLabel.textContent = 'SOON';
    soonLabel.className = 'soon-label';
    iconWrapper.appendChild(soonLabel);
  }

  // ONLY add element icon IF typeB AND has elements
  if (isTypeB && Array.isArray(c.elements) && c.elements.length > 0) {
    const elementIcon = document.createElement('div');
    elementIcon.className = 'element-icon';

    if (c.elements.length > 1) {
      let index = 0;
      const updateIcon = () => {
        const el = c.elements[index % c.elements.length];
        elementIcon.style.backgroundImage = `url('../assets/others/${CURRENT_GAME}/Element/${el}.png')`;
        elementIcon.title = el;
        index++;
      };
      updateIcon();
      setInterval(updateIcon, 1000);
    } else {
      const singleElement = c.elements[0];
      elementIcon.style.backgroundImage = `url('../assets/others/${CURRENT_GAME}/Element/${singleElement}.png')`;
      elementIcon.title = singleElement;
    }

    iconWrapper.appendChild(elementIcon);
  }

  if (typeof CHARA_CONFIG.createImageElement === 'function') {
    const imageBlock = CHARA_CONFIG.createImageElement(c);
    if (imageBlock) {
      iconWrapper.appendChild(imageBlock);
    }
  }

  card.appendChild(iconWrapper);

  if (isTypeB) {
    const label = document.createElement('div');
    label.className = 'char-label';
    label.textContent = selectedGender === 'f' ? c.name : c.maleName || c.name;
    card.appendChild(label);
  }

  charListEl.appendChild(card);
});


  updateCharCount(filteredChars.length);
}


genderToggleBtn?.addEventListener('change', () => {
  if (isTypeB) {
    selectedGP = genderToggleBtn.checked ? '2' : '1';  
    selectedFilters.GP = selectedGP;
  } else {
    selectedGender = genderToggleBtn.checked ? 'm' : 'f';
    selectedFilters.gender = selectedGender;
  }
  updateTitleBasedOnToggle();
  renderList();
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const popup = document.getElementById('spritePopup');
    if (popup.style.display === 'flex') { // or !== 'none'
      popup.style.display = 'none';
    }
  }
});

// ===== Filter Setup =====
function setupToggleableRadio(groupName, filterKey) {
  const inputs = document.querySelectorAll(`input[name="${groupName}"]`);
  inputs.forEach(input => {
    input.addEventListener('click', e => {
      const value = e.target.value;

      const parsedValue = (filterKey === "have")
        ? (value === "true")
        : value;

      if (selectedFilters[filterKey] === parsedValue) {
        selectedFilters[filterKey] = null;
        input.checked = false;
      } else {
        selectedFilters[filterKey] = parsedValue;
      }

      renderList();
    });
  });
}

setupToggleableRadio("element", "element");
setupToggleableRadio("gender", "gender");
setupToggleableRadio("group", "group");
setupToggleableRadio("have", "have");

document.querySelectorAll('input[name="newStatus"]').forEach(input => {
  input.addEventListener('change', e => {
    const value = e.target.value;   // "new" or "soon"
    const isChecked = e.target.checked;

    if (value === 'new') {
      selectedFilters.newStatus.new = isChecked;
    } else if (value === 'soon') {
      selectedFilters.newStatus.soon = isChecked;
    }

    renderList();
  });
});


filterBtn?.addEventListener('click', () => {
  filterPopup?.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!filterBtn?.contains(e.target) && !filterPopup?.contains(e.target)) {
    filterPopup?.classList.add('hidden');
  }
});

// ===== Sprite Popup =====
function showPopup(imgPath, altText) {
  const popup = document.getElementById('spritePopup');
  const popupImg = document.getElementById('spritePopupImg');

  popupImg.src = imgPath;
  popupImg.alt = altText;
  popup.style.display = 'flex';
}

document.querySelector('.close-btn')?.addEventListener('click', () => {
  document.getElementById('spritePopup').style.display = 'none';
});

const popup = document.getElementById('spritePopup');
popup?.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// ===== Independent Filter/Search Toggles =====
document.querySelectorAll('.filter-toggle')?.forEach(button => {
  button.addEventListener('click', () => {
    const allFilters = document.querySelectorAll('.filter-toggle');

    allFilters.forEach(filterBtn => {
      if (filterBtn !== button) {
        filterBtn.classList.remove('active');
        const options = filterBtn.nextElementSibling;
        if (options) options.classList.remove('visible');
      }
    });

    button.classList.toggle('active');
    const options = button.nextElementSibling;
    if (options) options.classList.toggle('visible');
  });
});

function updateTitleBasedOnToggle() {
  if (isTypeB) {
    const charsWithGP = characters.filter(c => c.GP == selectedGP);

    if (charsWithGP.length > 0) {
      const someChar = charsWithGP[0];
      characterName.textContent = selectedGP === '1' ? someChar.name2 : someChar.name2;
    }
  } else {
    const charsWithGender = characters.filter(c => c.gender === selectedGender);
    if (charsWithGender.length > 0) {
      characterName.textContent = charsWithGender[0].name;
    }
  }
}

function updateCharCount(count) {
  const countEl = document.getElementById('charCount');
  if (countEl) countEl.textContent = `Total: ${count} characters`;
}

initializeFilters();
renderList();

(function() {
  const fallbackSrc = "../assets/others/mimo-sleep.b230350.png";

  function addFallback(img) {
    // Only if it's a sprite and has no data-fallback attribute
    if (!img.dataset.fallbackAdded && img.closest('.sprite-popup')) {
      img.dataset.fallbackAdded = true;
      img.onerror = function() {
        if (img.src !== fallbackSrc) {
          img.src = fallbackSrc;
          applyFallbackStyles(img);
        }
      };
    }
  }

  // Apply to all existing sprites
  document.querySelectorAll(".sprite-popup img").forEach(addFallback);

  // Observe dynamically added sprites
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.tagName === "IMG" && node.closest('.sprite-popup')) addFallback(node);
        else if (node.querySelectorAll) {
          node.querySelectorAll(".sprite-popup img").forEach(addFallback);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();