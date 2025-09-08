const selectedFilters = {
  have: false,
  want: false,
  new: false,
};

function renderList() {
  const charListEl = document.getElementById('charList');
  const searchInput = document.getElementById('searchInput');

  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  const characters = gameConfig.characters;

  const filteredCharacters = characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchTerm);

      const matchesHave = selectedFilters.have ? c.have === true : true;
      const matchesWant = selectedFilters.want ? c.have === false : true;
      const matchesStatus = selectedFilters.new ? c.status === 'new' : true;

      console.log(`Character ${c.name}:`);
      console.log(`  Matches Search: ${matchesSearch}`);
      console.log(`  Matches Have: ${matchesHave}`);
      console.log(`  Matches Want: ${matchesWant}`);
      console.log(`  Matches Status: ${matchesStatus}`);
      
      return matchesSearch && matchesHave && matchesWant && matchesStatus;
    });

  filteredCharacters.forEach(c => {
    const card = document.createElement('div');
    card.className = 'char-card';
    card.title = `${c.name} (${c.rarity}★)`;

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'icon-wrapper';
    iconWrapper.style.background = c.rarity === 5
      ? 'linear-gradient(100deg, #7c4600ff, #ffa632cc)'
      : 'linear-gradient(135deg, #805292ff, #d9c3f3cc)';

    if (c.status === 'new') {
      const label = document.createElement('div');
      label.textContent = 'NEW';
      label.className = 'soon-label';
      iconWrapper.appendChild(label);
    }

    const img = document.createElement('img');
    img.className = 'char-icon';
    const imgPath = gameConfig.getImgPath(c.imgName);
    img.src = imgPath;
    img.alt = c.name;

    iconWrapper.appendChild(img);

    const label = document.createElement('div');
    label.textContent = c.name;

    card.appendChild(iconWrapper);
    card.appendChild(label);
    charListEl.appendChild(card);

    card.addEventListener('click', () => {
      const spritePath = gameConfig.getSpritePath(c.imgName2);
      showPopup(spritePath, c.name);
    });
  });
}

document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', e => {
    const type = e.target.dataset.filter;

    if (e.target.checked) {
      selectedFilters.have = false;
      selectedFilters.want = false;
      selectedFilters.new = false;

      selectedFilters[type] = true;
    } else {
      selectedFilters[type] = false;
    }

    document.querySelectorAll('.filter-checkbox').forEach(box => {
      const filterType = box.dataset.filter;
      box.checked = selectedFilters[filterType];
    });

    renderList();
  });
});

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', renderList);

function showPopup(imgPath, altText) {
  const popup = document.getElementById('spritePopup');
  const popupImg = document.getElementById('spritePopupImg');

  popupImg.src = imgPath;
  popupImg.alt = altText;
  popup.style.display = 'flex';
}

// Close popup on click outside or ✕
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('spritePopup').style.display = 'none';
});
document.getElementById('spritePopup').addEventListener('click', e => {
  if (e.target.id === 'spritePopup') {
    e.target.style.display = 'none';
  }
});

// Filter button logic
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');

filterBtn.addEventListener('click', () => {
  filterPopup.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) {
    filterPopup.classList.add('hidden');
  }
});

renderList();
