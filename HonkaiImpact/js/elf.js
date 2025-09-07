const characters = [
  //PART 1 - ELFS
  { name: 'Jingwei\'s Wings', imgName: 'Jingweis_Wings', folder:'All_Elfs', have: true, rarity: '4', element: 'Fire_DMG', part:'1'},
  { name: 'Blood Embrace', imgName: 'Blood_Embrace', folder:'All_Elfs', have: false, rarity: '4', element: 'Physical', part:'1' },
  { name: 'Selune\'s Elegy', imgName: 'Selunes_Elegy', folder:'All_Elfs', have: false, rarity: '5', element: 'Ice_DMG', part:'1' },
  { name: 'Book of Fuxi', imgName: 'Book_of_Fuxi', folder:'All_Elfs', have: false, rarity: '5', element: 'Fire_DMG', part:'1' },
  { name: 'Bella', imgName: 'Bella_ELF', folder:'All_Elfs', have: false, rarity: '5', element: 'Lightning_DMG', part:'1' },
  { name: 'Sirin', imgName: 'Sirin_ELF', folder:'All_Elfs', have: false, rarity: '5', element: 'Fire_DMG', part:'1'},
  { name: 'Klein', imgName: 'Klein_ELF', folder:'All_Elfs', have: false, rarity: '5', element: 'Lightning_DMG', part:'1'},
  { name: 'Blade Durandal', imgName: 'Blade_Durandal_ELF', folder:'All_Elfs', have: false, rarity: '5', element: 'Physical', part:'1'},
  { name: 'Elf Elysia', imgName: 'Elf_Elysia', folder:'All_Elfs', have: false, rarity: '5', element: 'Ice_DMG', part:'1'},
  { name: 'Kiana Kaslana', imgName: 'Kiana_Kaslana_ELF', folder:'All_Elfs', have: false, rarity: '5', element: 'Fire_DMG', part:'1'},
  { name: 'Tesla ZERO', imgName: 'Tesla_ZERO', folder:'All_Elfs', have: false, rarity: '5', element: 'Physical', part:'1'},
  { name: 'Water\'s Edge', imgName: 'Waters_Edge', folder:'All_Elfs', have: false, rarity: '5', element: 'Ice_DMG', part:'1'},
  { name: 'Project Bunny', imgName: 'Project_Bunny', folder:'All_Elfs', have: false, rarity: '5', element: 'Physical', part:'1'},
  
  //PART 2 - ASTRAL OP
  { name: 'Chenxue', imgName: 'Chenxue', folder:'All_AstralOp', have: false, rarity: '5', element: 'Fire_DMG', part:'2'},
  { name: 'Dreamseeker', imgName: 'Dreamseeker', folder:'All_AstralOp', have: true, rarity: '5', element: 'Lightning_DMG', part:'2'},
  { name: 'Serapeum', imgName: 'Serapeum', folder:'All_AstralOp', have: false, rarity: '5', element: 'Physical', part:'2'},
  { name: 'Songque', imgName: 'Songque_AstralOp', folder:'All_AstralOp', have: false, rarity: '5', element: 'Lightning_DMG', part:'2'},
  { name: 'Theresa', imgName: 'Theresa_Apocalypse_AstralOp', folder:'All_AstralOp', have: false, rarity: '5', element: 'Lightning_DMG', part:'2'},
  // Add more characters here
];
let selectedPart = '2'; // Default to Part 2

const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');

let selectedFilters = {
  have: null,
  rarity: null,
  element: null,
};

// Toggle dropdown sections
document.querySelectorAll('.filter-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const allButtons = document.querySelectorAll('.filter-toggle');
    const allOptions = document.querySelectorAll('.filter-options');

    allButtons.forEach(btn => {
      if (btn !== button) btn.classList.remove('active');
    });

    allOptions.forEach(opt => {
      if (opt !== button.nextElementSibling) opt.classList.remove('visible');
    });

    // Toggle current one
    button.classList.toggle('active');
    const options = button.nextElementSibling;
    if (options) options.classList.toggle('visible');
  });
});

function renderList() {
  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchTerm);
      const matchesPart = selectedPart === 'all' || c.part === selectedPart || (selectedPart === 'collab' && c.collab);

      // Filter by 'have'
      if (selectedFilters.have !== null) {
        if (selectedFilters.have && !c.have) return false;
        if (!selectedFilters.have && c.have) return false;
      }

      // Filter by rarity (string comparison)
      if (selectedFilters.rarity && c.rarity.toString() !== selectedFilters.rarity) return false;

      // Filter by element
      if (selectedFilters.element && c.element !== selectedFilters.element) return false;

      return matchesSearch && matchesPart;
    })
    .forEach(c => {
      const card = document.createElement('div');
      card.className = 'char-card';
      card.title = `${c.name} (${c.element}, ${c.rarity})`;

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'icon-wrapper';
      const rarityGradients = {
        5: 'linear-gradient(100deg, #7c4600ff, #ffa632cc)',
        4: 'linear-gradient(135deg, #805292ff, #d9c3f3cc)',
      };

      iconWrapper.style.background = rarityGradients[c.rarity] || 'linear-gradient(135deg, #444, #999)';

      const img = document.createElement('img');
      img.className = 'char-icon';

      // Use the new Honkai-based path
      const imgSrcName = c.imgName || c.name;
      img.src = `../assets/charaid/Honkai/${c.folder}/${imgSrcName}.png`;
      img.alt = c.name;

      iconWrapper.appendChild(img);

      const label = document.createElement('div');
      label.textContent = c.name;

      card.appendChild(iconWrapper);
      card.appendChild(label);
      charListEl.appendChild(card);

      // SPRITES - Change this
      card.addEventListener('click', () => {
        const imgName = c.imgName || c.name;
        const imgPath = `../assets/Sprite/HI3/${c.folder}/${imgSrcName}.png`;
        showPopup(imgPath, c.name);
      });
    });
}

// ===== Filter Listeners with "toggle to unselect" support =====

// Utility: Toggle radio as deselectable
function setupToggleableRadio(groupName, filterKey) {
  const inputs = document.querySelectorAll(`input[name="${groupName}"]`);
  inputs.forEach(input => {
    input.addEventListener('click', e => {
      const value = e.target.value;

      // Special handling for "have" radio buttons (convert to boolean)
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

// 1) Have
setupToggleableRadio("have", "have");

// 3) Rarity
setupToggleableRadio("rarity", "rarity");

// 2) Element
setupToggleableRadio("element", "element");

// ============ Filter popup toggle ============
filterBtn.addEventListener('click', () => {
  filterPopup.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) {
    filterPopup.classList.add('hidden');
  }
});

// ============ Sprite popup ============
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

// ============ Search input ============
searchInput.addEventListener('input', () => {
  renderList();
});

document.querySelectorAll('.part-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active state from all buttons
    document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));

    // Add active state to the clicked button
    btn.classList.add('active');

    // Update selectedPart and re-render
    selectedPart = btn.dataset.part === 'collab' ? 'collab' : btn.dataset.part;
    renderList();
  });
});

renderList();
