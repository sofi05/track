const characters = [
{ name: '', imgName: '', have: true, element: '', rarity: 5,  status: 'available' },

{ name: '', imgName: '', have: false, element: '', rarity: 5,  status: 'soon', version: '3.6' },
{ name: '', imgName: '', have: false, element: '', rarity: 5,  status: 'soon', version: '3.6' },

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
      img.src = `../assets/charaid/StarRail/${imgSrcName}.png`;
      img.alt = c.name;

      const elementImg = document.createElement('img');
      elementImg.className = 'element-icon';
      elementImg.src = `../assets/element/HSR/${c.element}.png`;
      elementImg.alt = c.element;

      iconWrapper.appendChild(img);
      iconWrapper.appendChild(elementImg);

      const label = document.createElement('div');
      label.textContent = c.name;

      card.appendChild(iconWrapper);
      card.appendChild(label);
      charListEl.appendChild(card);
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
