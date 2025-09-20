const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');
const genderToggleBtn = document.getElementById('genderToggleBtn'); // Reference to gender toggle
const genderLabel = document.getElementById('genderLabel'); // Gender label text

let selectedFilters;
let selectedGender = 'f'; // Default to female gender

const filterDefaults = {
  have: null,
  newStatus: {
    new: false,
    soon: false,
  },
  element: null,
  rarity: null,
  region: null,
  gender: null, // This will now be controlled by the gender toggle
  group: null,
  world: null,
  spec: null,
};

function initializeFilters() {
  selectedFilters = JSON.parse(JSON.stringify(filterDefaults));
  selectedFilters.gender = selectedGender; // Set default gender filter
}

window.CHARA_CONFIG = window.CHARA_CONFIG || {};
const characters = window.CHARA_CONFIG.characters || [];

// Check if any character has a part tag & Default to P2
const hasPartInfo = characters.some(c => typeof c.part !== 'undefined');
let selectedPart = '2';

// ===== Rarity Gradient Helper =====
function getRarityGradient(rarity) {
  const gradients = {
    5: 'linear-gradient(100deg, #7c4600ff, #ffa632cc)', // Gold (5★)
    4: 'linear-gradient(135deg, #805292ff, #d9c3f3cc)', // Purple (4★)
    3: 'linear-gradient(135deg, #498ee7ff, #c3f3e7cc)', // Blue (3★)
  };
  return gradients[rarity] || 'linear-gradient(135deg, #444, #999)'; // Fallback
}

function renderList() {
  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  const filteredChars = characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchTerm);

      // Gender filter check
      if (selectedFilters.gender && c.gender !== selectedFilters.gender) return false;
      
      // Part filter applied only if part info exists
      if (hasPartInfo) {
        if (!(selectedPart === 'all' || c.part === selectedPart || (selectedPart === 'collab' && c.collab))) {
          return false;
        }
      }

      // Other filters (e.g., have, status, element, etc.) go here...
      return matchesSearch;
    });

  filteredChars.forEach(c => {
    const card = document.createElement('div');
    card.className = 'char-card';
    card.title = `(${c.element}, ${c.rarity}★)`;

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
    elementIcon.style.backgroundImage = `url('path_to_icons/${c.element.toLowerCase()}.png')`;
    elementIcon.title = c.element;
    iconWrapper.appendChild(elementIcon);

        if (typeof CHARA_CONFIG.createImageElement === 'function') {
      const imageBlock = CHARA_CONFIG.createImageElement(c);
      if (imageBlock) {
        iconWrapper.appendChild(imageBlock);
      }
    }

    const label = document.createElement('div');
    label.textContent;

    card.appendChild(iconWrapper);
    card.appendChild(label);
    charListEl.appendChild(card);
  });

  updateCharCount();
}

// ===== Gender Toggle =====
genderToggleBtn.addEventListener('change', () => {
  selectedGender = genderToggleBtn.checked ? 'm' : 'f';
  selectedFilters.gender = selectedGender;
  genderLabel.textContent = selectedGender === 'f' ? '' : ''; // Update label text
  renderList(); 
});

// ===== Filter Setups =====
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

setupToggleableRadio("have", "have");
setupToggleableRadio("element", "element");
setupToggleableRadio("rarity", "rarity");
setupToggleableRadio("gender", "gender");
setupToggleableRadio("region", "region");
setupToggleableRadio("world", "world");
setupToggleableRadio("group", "group");
setupToggleableRadio("spec", "spec");

document.querySelectorAll('input[name="newStatus"]').forEach(input => {
  input.addEventListener('change', e => {
    const isChecked = e.target.checked;
    selectedFilters.newStatus.new = isChecked;
    selectedFilters.newStatus.soon = isChecked;
    renderList();
  });
});

filterBtn.addEventListener('click', () => {
  filterPopup.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) {
    filterPopup.classList.add('hidden');
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

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('spritePopup').style.display = 'none';
});

const popup = document.getElementById('spritePopup');
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// ===== Search =====
searchInput.addEventListener('input', () => {
  renderList();
});

// ===== Part Buttons =====
document.querySelectorAll('.part-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const newPart = btn.dataset.part;

    if (newPart !== selectedPart) {
      initializeFilters(); 
      selectedPart = newPart;
      renderList();
    }
  });
});

// ===== Initial Render =====
function updateCharCount() {
  const count = document.querySelectorAll('.char-card').length;
  const countText = `Total: ${count} character${count !== 1 ? 's' : ''}`;
  document.getElementById('charCount').textContent = countText;
}

initializeFilters();
renderList();