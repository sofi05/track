const characters = [
{ name: 'Anby', imgName: '01', have: true, element: 'IconElectric', rarity: 4, status: 'available' },
{ name: 'Soldier 11', imgName: '05', have: true, element: 'IconFire', rarity: 5, status: 'available' },
{ name: 'Corin', imgName: '09', have: true, element: 'IconPhysical', rarity: 4, status: 'available' },
{ name: 'Billy', imgName: '10', have: true, element: 'IconPhysical', rarity: 4, status: 'available' },
{ name: 'Nekomata', imgName: '11', have: false, element: 'IconPhysical', rarity: 5, status: 'available', version: '2.0' },
{ name: 'Nicole', imgName: '12', have: true, element: 'IconEther', rarity: 4, status: 'available' },
{ name: 'Miyabi', imgName: '13', have: true, element: 'IconFrost', rarity: 5, status: 'available' },
{ name: 'Koleda', imgName: '14', have: true, element: 'IconFire', rarity: 5, status: 'available' },
{ name: 'Anton', imgName: '15', have: true, element: 'IconElectric', rarity: 4, status: 'available' },
{ name: 'Ben', imgName: '16', have: true, element: 'IconFire', rarity: 4, status: 'available' },
{ name: 'Soukaku', imgName: '17', have: true, element: 'IconIce', rarity: 4, status: 'available' },
{ name: 'Lycaon', imgName: '18', have: true, element: 'IconIce', rarity: 5, status: 'available' },
{ name: 'Grace', imgName: '20', have: true, element: 'IconElectric', rarity: 5, status: 'available' },
{ name: 'Ellen', imgName: '21', have: false, element: 'IconIce', rarity: 5, status: 'available', version: '1.5' },
{ name: 'Rina', imgName: '22', have: true, element: 'IconElectric', rarity: 5, status: 'available' },
{ name: 'Zhu Yuan', imgName: '23', have: false, element: 'IconEther', rarity: 5, status: 'available', version: '1.6' },
{ name: 'Jane Doe', imgName: '24', have: false, element: 'IconPhysical', rarity: 5, status: 'available', version: '1.7' },
{ name: 'Caesar', imgName: '25', have: false, element: 'IconPhysical', rarity: 5, status: 'available', version: '2.0' },
{ name: 'Lighter', imgName: '26', have: false, element: 'IconFire', rarity: 5, status: 'available', version: '1.7' },
{ name: 'Lucy', imgName: '27', have: false, element: 'IconFire', rarity: 4, status: 'available', version: '1.6' },
{ name: 'Piper', imgName: '28', have: true, element: 'IconPhysical', rarity: 4, status: 'available' },
{ name: 'Qingyi', imgName: '29', have: false, element: 'IconElectric', rarity: 5, status: 'available', version: '1.5' },
{ name: 'Seth', imgName: '30', have: true, element: 'IconElectric', rarity: 4, status: 'available' },
{ name: 'Yanagi', imgName: '31', have: false, element: 'IconElectric', rarity: 5, status: 'available', version: '2.1' },
{ name: 'Burnice', imgName: '32', have: false, element: 'IconFire', rarity: 5, status: 'available', version: '1.6' },
{ name: 'Harumasa', imgName: '35', have: true, element: 'IconElectric', rarity: 5, status: 'available' },
{ name: 'Astra Yao', imgName: '36', have: false, element: 'IconEther', rarity: 5, status: 'available', version: '2.0' },
{ name: 'Evelyn', imgName: '37', have: false, element: 'IconFire', rarity: 5, status: 'available', version: '2.2' },
{ name: 'Pulchra', imgName: '38', have: true, element: 'IconPhysical', rarity: 4, status: 'available' },
{ name: 'Trigger', imgName: '39', have: false, element: 'IconElectric', rarity: 5, status: 'available', version: '2.2' },
{ name: 'Anby Soldier 0', imgName: '40', have: true, element: 'IconElectric', rarity: 5, status: 'available' },
{ name: 'Vivian', imgName: '41', have: false, element: 'IconEther', rarity: 5, status: 'available', version: '1.7' },
{ name: 'Hugo', imgName: '42', have: false, element: 'IconIce', rarity: 5, status: 'available', version: '1.7' },
{ name: 'Ju Fufu', imgName: '43', have: false, element: 'IconFire', rarity: 5, status: 'available', version: '2.0' },
{ name: 'Yixuan', imgName: '44', have: false, element: 'IconAuricInk', rarity: 5, status: 'available', version: '2.0' },
{ name: 'Pan Yinhu', imgName: '45', have: true, element: 'IconPhysical', rarity: 4, status: 'available' },
{ name: 'Alice', imgName: '46', have: false, element: 'IconPhysical', rarity: 5, status: 'new', version: '2.1' },
{ name: 'Yuzuha', imgName: '47', have: false, element: 'IconPhysical', rarity: 5, status: 'new', version: '2.1' },

{ name: 'Seed', imgName: '48', have: false, element: 'IconElectric', rarity: 5, status: 'soon', version: '2.2' },
{ name: 'Orphie & Magus', imgName: '49', have: false, element: 'IconFire', rarity: 5, status: 'soon', version: '2.2' },
{ name: 'Lucia', imgName: '50', have: false, element: 'IconEther', rarity: 5, status: 'soon', version: '2.3' },
{ name: 'Manato', imgName: '51', have: false, element: 'IconFire', rarity: 4, status: 'soon', version: '2.3' },
{ name: 'Yidhari', imgName: '52', have: false, element: 'IconIce', rarity: 5, status: 'soon', version: '2.3' }
  // Add more characters here
];

const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');

let selectedFilters = {
  have: false,
  want: false,
  new: false,
  soon: false,
};

function renderList() {
  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchTerm);

      const hasHave = selectedFilters.have;
      const hasWant = selectedFilters.want;
      const hasNew = selectedFilters.new;
      const hasSoon = selectedFilters.soon;

      const matchesHave = !hasHave || (hasHave && c.have);
      const matchesWant = !hasWant || (hasWant && !c.have);

      // Matches 'new' or 'soon' statuses when `new` is selected
      const matchesStatus = (!hasNew && !hasSoon) || 
                            (hasNew && (c.status === 'new' || c.status === 'soon')) || 
                            (hasSoon && c.status === 'soon');

      return matchesSearch && matchesHave && matchesWant && matchesStatus;
    })
    .forEach(c => {
      const card = document.createElement('div');
      card.className = 'char-card';
      card.title = `${c.name} (${c.element}, ${c.rarity}★)`;

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'icon-wrapper';
      if (c.rarity === 5) {
        iconWrapper.style.background = 'linear-gradient(100deg, #7c4600ff, #ffa632cc)';
      } else {
        iconWrapper.style.background = 'linear-gradient(135deg, #805292ff, #d9c3f3cc)';
      }

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

// Setup filter logic
searchInput.addEventListener('input', renderList);
filterBtn.addEventListener('click', () => {
  filterPopup.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) {
    filterPopup.classList.add('hidden');
  }
});

// ✅ Update unified logic for filters
document.querySelectorAll('.filter-checkbox').forEach(option => {
  option.addEventListener('change', (e) => {
    const type = e.target.dataset.filter;
    const wasChecked = e.target.checked;

    // Allow `new` and `soon` to be independently checked.
    if (type === 'new' || type === 'soon') {
      selectedFilters[type] = wasChecked;
    } else {
      // Reset `have` and `want` filters to allow only one active at a time.
      for (let key in selectedFilters) {
        if (key !== 'new' && key !== 'soon') {
          selectedFilters[key] = false;
          document.querySelector(`[data-filter="${key}"]`).checked = false;
        }
      }

      if (wasChecked) {
        selectedFilters[type] = true;
        e.target.checked = true;
      }
    }

    filterPopup.classList.add('hidden');

    renderList();
  });
});

renderList();
// Function to show popup sprite
function showPopup(imgPath, altText) {
  const popup = document.getElementById('spritePopup');
  const popupImg = document.getElementById('spritePopupImg');

  popupImg.src = imgPath;
  popupImg.alt = altText;
  popup.style.display = 'flex';
}

// Close popup on clicking ✕
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('spritePopup').style.display = 'none';
});