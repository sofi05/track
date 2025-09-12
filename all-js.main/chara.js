const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');

let selectedFilters = {
  have: null,
  newStatus: {
    new: false,
    soon: false,
  },
  element: null,
  rarity: null,
  region: null,
  gender: null,
  group: null,
  world: null,
};

// Load characters from CHARA_CONFIG
window.CHARA_CONFIG = window.CHARA_CONFIG || {};
const characters = window.CHARA_CONFIG.characters || [];

// Check if any character has a part tag
const hasPartInfo = characters.some(c => typeof c.part !== 'undefined');

// Default to Part 2 (only meaningful if hasPartInfo is true)
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

// ===== Render List =====
function renderList() {
  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchTerm);

      // Part filter applied only if part info exists
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

      // Filter: Element
      if (selectedFilters.element) {
        if (c.element !== selectedFilters.element && c.filterElement !== selectedFilters.element) return false;
      }

      // Filter: Rarity
      if (selectedFilters.rarity && c.rarity.toString() !== selectedFilters.rarity) return false;

      // Filter: Region
      if (selectedFilters.region && selectedFilters.region.length > 0) {
        if (!c.region.some(region => selectedFilters.region.includes(region))) return false;
      }

      // Filter: Gender
      if (selectedFilters.gender && c.gender !== selectedFilters.gender) return false;

      // Filter: Group
      if (selectedFilters.group && c.group !== selectedFilters.group) return false;

      // Filter: World
      if (selectedFilters.world && !c.world.includes(selectedFilters.world)) return false;

      return matchesSearch;
    })
    .forEach(c => {
      const card = document.createElement('div');
      card.className = 'char-card';
      card.title = `${c.name} (${c.element}, ${c.rarity}★)`;

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'icon-wrapper';
      iconWrapper.style.background = getRarityGradient(c.rarity);

      // NEW / SOON Tags
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

      // Element Icon
      const elementIcon = document.createElement('div');
      elementIcon.className = 'element-icon';
      elementIcon.style.backgroundImage = `url('path_to_icons/${c.element.toLowerCase()}.png')`;
      elementIcon.title = c.element;
      iconWrapper.appendChild(elementIcon);

      // Game-specific image block
      if (typeof CHARA_CONFIG.createImageElement === 'function') {
        const imageBlock = CHARA_CONFIG.createImageElement(c);
        if (imageBlock) {
          iconWrapper.appendChild(imageBlock);
        }
      }

      // Character Name
      const label = document.createElement('div');
      label.textContent = c.name;

      card.appendChild(iconWrapper);
      card.appendChild(label);
      charListEl.appendChild(card);
    });

    updateCharCount();
}

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

document.querySelectorAll('input[name="newStatus"]').forEach(input => {
  input.addEventListener('change', e => {
    const isChecked = e.target.checked;
    selectedFilters.newStatus.new = isChecked;
    selectedFilters.newStatus.soon = isChecked;
    renderList();
  });
});

// ===== Filter Popup Toggle =====
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

// ===== Filter Section Toggles =====
document.querySelectorAll('.filter-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const allFilters = document.querySelectorAll('.filter-toggle');
    
    // Close all filters except the clicked one
    allFilters.forEach(filterBtn => {
      if (filterBtn !== button) {
        filterBtn.classList.remove('active');
        const options = filterBtn.nextElementSibling;
        if (options) options.classList.remove('visible');
      }
    });

    // Toggle the clicked filter
    button.classList.toggle('active');
    const options = button.nextElementSibling;
    if (options) options.classList.toggle('visible');
  });
});

// ===== Part Buttons =====
document.querySelectorAll('.part-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    selectedPart = btn.dataset.part;

    renderList();
  });
});

// ===== Initial Render =====
if (!characters || characters.length === 0) {
  console.warn("No characters loaded from CHARA_CONFIG.");
}

function updateCharCount() {
  const count = document.querySelectorAll('.char-card').length;
  const countText = `Total: ${count} character${count !== 1 ? 's' : ''}`;
  document.getElementById('charCount').textContent = countText;
}

renderList();