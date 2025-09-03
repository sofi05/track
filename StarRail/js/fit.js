const characters = [
  { name: 'March 7th', imgName: 'Item_Nascent_Spring', imgName2:'1100101', have: true, rarity: 4, status: 'available' },
  { name: 'Firefly', imgName: 'Item_Spring_Missive', imgName2:'1131001', have: false, rarity: 5, status: 'new' }
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

      const matchesHave = !hasHave || (hasHave && c.have);
      const matchesWant = !hasWant || (hasWant && !c.have);
      const matchesStatus = (!hasNew) || (hasNew && c.status === 'new');

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
        const soonLabel = document.createElement('div');
        soonLabel.textContent = 'New';
        soonLabel.className = 'soon-label';
        iconWrapper.appendChild(soonLabel);
      }

      const img = document.createElement('img');
      img.className = 'char-icon';
      const imgSrcName = c.imgName ? c.imgName : c.name;
      img.src = `../assets/outfit/StarRail/${imgSrcName}.webp`;
      img.alt = c.name;

      iconWrapper.appendChild(img);

      const label = document.createElement('div');
      label.textContent = c.name;

      card.appendChild(iconWrapper);
      card.appendChild(label);
      charListEl.appendChild(card);

      card.addEventListener('click', () => {
        const imgPath = `../assets/Sprite/StarRail/Outfit/${c.imgName2}.png`;
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

// ✅ SINGLE unified logic to allow only ONE active filter at a time
document.querySelectorAll('.filter-checkbox').forEach(option => {
  option.addEventListener('change', (e) => {
    const type = e.target.dataset.filter;
    const wasChecked = e.target.checked;

    // Uncheck all and reset filters
    for (let key in selectedFilters) {
      selectedFilters[key] = false;
      document.querySelector(`[data-filter="${key}"]`).checked = false;
    }

    // Only re-check if user had just checked it
    if (wasChecked) {
      selectedFilters[type] = true;
      e.target.checked = true;
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
