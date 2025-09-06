const characters = [
{ name: 'Anby', imgName: '01', have: true, element: 'IconElectric', group:'cunhar', gender:'f', rarity: 4, status: 'available' },
{ name: 'Soldier 11', imgName: '05', have: true, element: 'IconFire', group:'obol', gender:'f', rarity: 5, status: 'available' },
{ name: 'Corin', imgName: '09', have: true, element: 'IconPhysical', group:'vic', gender:'f', rarity: 4, status: 'available' },
{ name: 'Billy', imgName: '10', have: true, element: 'IconPhysical', group:'cunhar', gender:'m', rarity: 4, status: 'available' },
{ name: 'Nekomata', imgName: '11', have: false, element: 'IconPhysical', group:'cunhar', gender:'f', rarity: 5, status: 'available', version: '2.0' },
{ name: 'Nicole', imgName: '12', have: true, element: 'IconEther', group:'cunhar', gender:'f', rarity: 4, status: 'available' },
{ name: 'Miyabi', imgName: '13', have: true, element: 'IconFrost', group:'sec6', gender:'f', rarity: 5, status: 'available' },
{ name: 'Koleda', imgName: '14', have: true, element: 'IconFire', group:'belo', gender:'f', rarity: 5, status: 'available' },
{ name: 'Anton', imgName: '15', have: true, element: 'IconElectric', group:'belo', gender:'m', rarity: 4, status: 'available' },
{ name: 'Ben', imgName: '16', have: true, element: 'IconFire', group:'belo', gender:'m', rarity: 4, status: 'available' },
{ name: 'Soukaku', imgName: '17', have: true, element: 'IconIce', group:'sec6', gender:'f', rarity: 4, status: 'available' },
{ name: 'Lycaon', imgName: '18', have: true, element: 'IconIce', group:'vic', gender:'m', rarity: 5, status: 'available' },
{ name: 'Grace', imgName: '20', have: true, element: 'IconElectric', group:'belo', gender:'f', rarity: 5, status: 'available' },
{ name: 'Ellen', imgName: '21', have: false, element: 'IconIce', group:'vic', gender:'f', rarity: 5, status: 'available', version: '1.5' },
{ name: 'Rina', imgName: '22', have: true, element: 'IconElectric', group:'vic', gender:'f', rarity: 5, status: 'available' },
{ name: 'Zhu Yuan', imgName: '23', have: false, element: 'IconEther', group:'spec', gender:'f', rarity: 5, status: 'available', version: '1.6' },
{ name: 'Jane Doe', imgName: '24', have: false, element: 'IconPhysical', group:'spec', gender:'f', rarity: 5, status: 'available', version: '1.7' },
{ name: 'Caesar', imgName: '25', have: false, element: 'IconPhysical', group:'sons', gender:'f', rarity: 5, status: 'available', version: '2.0' },
{ name: 'Lighter', imgName: '26', have: false, element: 'IconFire', group:'sons', gender:'m', rarity: 5, status: 'available', version: '1.7' },
{ name: 'Lucy', imgName: '27', have: false, element: 'IconFire', group:'sons', gender:'f', rarity: 4, status: 'available', version: '1.6' },
{ name: 'Piper', imgName: '28', have: true, element: 'IconPhysical', group:'sons', gender:'f', rarity: 4, status: 'available' },
{ name: 'Qingyi', imgName: '29', have: false, element: 'IconElectric', group:'spec', gender:'f', rarity: 5, status: 'available', version: '1.5' },
{ name: 'Seth', imgName: '30', have: true, element: 'IconElectric', group:'spec', gender:'m', rarity: 4, status: 'available' },
{ name: 'Yanagi', imgName: '31', have: false, element: 'IconElectric', group:'sec6', gender:'f', rarity: 5, status: 'available', version: '2.1' },
{ name: 'Burnice', imgName: '32', have: false, element: 'IconFire', group:'sons', gender:'f', rarity: 5, status: 'available', version: '1.6' },
{ name: 'Harumasa', imgName: '35', have: true, element: 'IconElectric', group:'sec6', gender:'m', rarity: 5, status: 'available' },
{ name: 'Astra Yao', imgName: '36', have: false, element: 'IconEther', group:'star', gender:'f', rarity: 5, status: 'available', version: '2.0' },
{ name: 'Evelyn', imgName: '37', have: false, element: 'IconFire', group:'star', gender:'f', rarity: 5, status: 'available', version: '2.2' },
{ name: 'Pulchra', imgName: '38', have: true, element: 'IconPhysical', group:'sons', gender:'f', rarity: 4, status: 'available' },
{ name: 'Trigger', imgName: '39', have: false, element: 'IconElectric', group:'obol', gender:'f', rarity: 5, status: 'available', version: '2.2' },
{ name: 'Anby Soldier 0', imgName: '40', have: true, element: 'IconElectric', group:'cunhar', gender:'f', rarity: 5, status: 'available' },
{ name: 'Vivian', imgName: '41', have: false, element: 'IconEther', group:'mock', gender:'f', rarity: 5, status: 'available', version: '1.7' },
{ name: 'Hugo', imgName: '42', have: false, element: 'IconIce', group:'mock', gender:'m', rarity: 5, status: 'available', version: '1.7' },
{ name: 'Ju Fufu', imgName: '43', have: false, element: 'IconFire', group:'sum', gender:'f', rarity: 5, status: 'available', version: '2.0' },
{ name: 'Yixuan', imgName: '44', have: false, element: 'IconAuricInk', group:'sum', gender:'f', rarity: 5, status: 'available', version: '2.0' },
{ name: 'Pan Yinhu', imgName: '45', have: true, element: 'IconPhysical', group:'sum', gender:'m', rarity: 4, status: 'available' },
{ name: 'Alice', imgName: '46', have: false, element: 'IconPhysical', group:'spook', gender:'f', rarity: 5, status: 'new', version: '2.1' },
{ name: 'Yuzuha', imgName: '47', have: false, element: 'IconPhysical', group:'spook', gender:'f', rarity: 5, status: 'new', version: '2.1' },

{ name: 'Seed', imgName: '48', have: false, element: 'IconElectric', group:'obol', gender:'f', rarity: 5, status: 'soon', version: '2.2' },
{ name: 'Orphie & Magus', imgName: '49', have: false, element: 'IconFire', group:'obol', gender:'f', rarity: 5, status: 'soon', version: '2.2' },
{ name: 'Lucia', imgName: '50', have: false, element: 'IconEther', group:'spook', gender:'f', rarity: 5, status: 'soon', version: '2.3' },
{ name: 'Manato', imgName: '51', have: false, element: 'IconFire', group:'spook', gender:'m', rarity: 4, status: 'soon', version: '2.3' },
{ name: 'Yidhari', imgName: '52', have: false, element: 'IconIce', group:'spook', gender:'f', rarity: 5, status: 'soon', version: '2.3' }
  // Add more characters here
];

const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');

let selectedFilters = {
  have: null,
  newStatus: false, // single flag for both "new" and "soon"
  element: null,
  rarity: null,
  group: null,  
  gender: null,
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

      // Filter by 'have'
      if (selectedFilters.have !== null) {
        if (selectedFilters.have && !c.have) return false;
        if (!selectedFilters.have && c.have) return false;
      }

      // Filter by newStatus (new or soon)
      const wantsNewSoon = selectedFilters.newStatus;
      if (wantsNewSoon) {
        if (!(c.status === 'new' || c.status === 'soon')) return false;
      }

      // Filter by element
      if (selectedFilters.element && c.element !== selectedFilters.element) return false;

      // Filter by rarity (string comparison)
      if (selectedFilters.rarity && c.rarity.toString() !== selectedFilters.rarity) return false;

      // Filter by group (single-select)
      if (selectedFilters.group && c.group !== selectedFilters.group) return false;

      // Filter by gender
      if (selectedFilters.gender && c.gender !== selectedFilters.gender) return false;

      return matchesSearch;
    })
    .forEach(c => {
      const card = document.createElement('div');
      card.className = 'char-card';
      card.title = `${c.name} (${c.element}, ${c.rarity})`;

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'icon-wrapper';
      iconWrapper.style.background = c.rarity === 5
        ? 'linear-gradient(100deg, #7c4600ff, #ffa632cc)'
        : 'linear-gradient(135deg, #805292ff, #d9c3f3cc)';

      iconWrapper.style.background = c.rarity || 'linear-gradient(135deg, #444, #999)';

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

      const img = document.createElement('img');
      img.className = 'char-icon';
      const imgSrcName = c.imgName ? c.imgName : c.name;
      img.src = `../assets/charaid/Zenless/IconRoleCrop${imgSrcName}.png`;
      img.alt = c.name;

      const elementImg = document.createElement('img');
      elementImg.className = 'element-icon';
      elementImg.src = `../assets/element/ZZZ/${c.element}.png`;
      elementImg.alt = c.element;

      iconWrapper.appendChild(img);
      iconWrapper.appendChild(elementImg);

      const label = document.createElement('div');
      label.textContent = c.name;

      card.appendChild(iconWrapper);
      card.appendChild(label);
      charListEl.appendChild(card);

      card.addEventListener('click', () => {
        const imgName = c.imgName ? c.imgName : c.name;
        const imgPath = `../assets/Sprite/Zenless/IconRole${imgName}.png`;
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

// 2) Element
setupToggleableRadio("element", "element");

// 3) Rarity
setupToggleableRadio("rarity", "rarity");

// 4) Gender
setupToggleableRadio("gender", "gender");

// 5) Group (single-select radios, toggleable)
setupToggleableRadio("group", "group");

// 6) NewStatus (checkbox - controls both 'new' and 'soon')
document.querySelector('input[name="newStatus"]').addEventListener('change', e => {
  selectedFilters.newStatus = e.target.checked;
  renderList();
});

// ============ Filter popup toggle =============

filterBtn.addEventListener('click', () => {
  filterPopup.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) {
    filterPopup.classList.add('hidden');
  }
});

// ============ Sprite popup =============

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

// ============ Search input =============

searchInput.addEventListener('input', () => {
  renderList();
});

// ============ Initial render ============

renderList();
