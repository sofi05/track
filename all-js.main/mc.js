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
    if (!map.has(key)) {
      map.set(key, {
        ...char,
        elements: [char.element],
        imgNames: [char.imgName],
        allVersions: [char],
      });
    } else {
      const entry = map.get(key);
      entry.elements.push(char.element);
      entry.imgNames.push(char.imgName);
      entry.allVersions.push(char);
    }
  });

  return Array.from(map.values());
}

function renderList() {
  charListEl.innerHTML = '';
  const searchTerm = searchInput?.value?.toLowerCase() || '';

  let listToRender = isTypeB ? groupTypeBCharacters(characters) : characters;

  const filteredChars = listToRender
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name))
  .filter(c => {
    if (isTypeB && selectedFilters.GP && c.GP != selectedFilters.GP) return false;
    if (!isTypeB && selectedFilters.gender && c.gender !== selectedFilters.gender) return false;

      const charName = selectedGender === 'f' ? c.name : c.maleName || c.name;
      const matchesSearch = charName.toLowerCase().includes(searchTerm);

      if (selectedFilters.gender && c.gender !== selectedFilters.gender) return false;
      if (hasPartInfo) {
        if (!(selectedPart === 'all' || c.part === selectedPart || (selectedPart === 'collab' && c.collab))) {
          return false;
        }
      }
      if (selectedFilters.element && !c.elements?.includes(selectedFilters.element) && c.element !== selectedFilters.element) return false;
      if (selectedFilters.group && c.group !== selectedFilters.group) return false;

      return matchesSearch;
    });

  filteredChars.forEach(c => {
    const card = document.createElement('div');
    card.className = 'char-card';
    card.title = `(${c.elements?.join(', ') || c.element}, ${c.rarity}★)`;

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

    const elementIcon = document.createElement('div');
    elementIcon.className = 'element-icon';

    if (isTypeB && c.elements.length > 1) {
      let index = 0;
      const updateIcon = () => {
        const el = c.elements[index % c.elements.length];
        elementIcon.style.backgroundImage = `url('path_to_icons/${el.toLowerCase()}.png')`;
        elementIcon.title = el;
        index++;
      };
      updateIcon();
      setInterval(updateIcon, 2000);
    } else {
      elementIcon.style.backgroundImage = `url('path_to_icons/${c.element.toLowerCase()}.png')`;
      elementIcon.title = c.element;
    }
    iconWrapper.appendChild(elementIcon);

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

document.querySelectorAll('input[name="newStatus"]').forEach(input => {
  input.addEventListener('change', e => {
    const isChecked = e.target.checked;
    selectedFilters.newStatus.new = isChecked;
    selectedFilters.newStatus.soon = isChecked;
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

      characterName.textContent = charsWithGP[0].name2 || `${selectedGP}`;
    } else {
      characterName.textContent = `${selectedGP}`;
    }
  } else {
    const firstChar = characters.find(c => c.gender === selectedGender);
    if (firstChar) {
      characterName.textContent = firstChar.name;
    } else {
      characterName.textContent = selectedGender === 'f' ? 'Female Characters' : 'Male Characters';
    }
  }
}

// ===== Part Buttons =====
document.querySelectorAll('.part-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedPart = btn.dataset.part;
    document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderList();
  });
});

// ===== Count Display (Optional) =====
function updateCharCount(displayedCount = null) {
  const count = document.getElementById('charCount');
  if (!count) return;

  const displayed = displayedCount !== null
    ? displayedCount
    : charListEl.querySelectorAll('.char-card').length;

  count.textContent = `Total: ${displayed} characters`;
}

initializeFilters();
renderList();