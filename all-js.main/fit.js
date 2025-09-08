const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');

let selectedFilters = {
  have: false,
  want: false,
  new: false,
};

function renderList() {
  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  const characters = gameConfig.characters;

  const filteredCharacters = characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchTerm);
      const matchesHave = !selectedFilters.have || (selectedFilters.have && c.have);
      const matchesWant = !selectedFilters.want || (selectedFilters.want && !c.have);
      const matchesStatus = !selectedFilters.new || (selectedFilters.new && c.status === 'new');
      return matchesSearch && matchesHave && matchesWant && matchesStatus;
    });

  filteredCharacters.forEach(c => {
    if (!c.name) return; // Skip empty entries

    const card = document.createElement('div');
    card.className = 'char-card';
    card.title = `${c.name} (${c.rarity || ''}★)`;

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'icon-wrapper';

    // Background colors
    if (gameConfig.id === 'hi3') {
      iconWrapper.style.background = 'linear-gradient(135deg, #444, #999)'; // HI3 gray
    } else {
      iconWrapper.style.background = c.rarity === 5
        ? 'linear-gradient(100deg, #7c4600ff, #ffa632cc)' // 5★ gold
        : 'linear-gradient(135deg, #805292ff, #d9c3f3cc)'; // others purple
    }

    // "NEW" label
    if (c.status === 'new') {
      const label = document.createElement('div');
      label.textContent = 'NEW';
      label.className = 'soon-label';
      iconWrapper.appendChild(label);
    }

    const img = document.createElement('img');
    img.className = 'char-icon';

    if (gameConfig.id === 'hi3') {
      img.src = `../assets/charaid/Honkai/${c.folder}/${c.imgName}.png`;
    } else {
      img.src = gameConfig.getImgPath(c.imgName);
    }
    img.alt = c.name;
    iconWrapper.appendChild(img);

    const label = document.createElement('div');
    label.textContent = c.name;

    card.appendChild(iconWrapper);
    card.appendChild(label);
    charListEl.appendChild(card);

    // Click to open popup
    card.addEventListener('click', () => {
      if (gameConfig.id === 'hi3') {
        const folderPath = `../assets/Sprite/HI3/Outfit/${c.spriteFolder}`;
        showPopup(folderPath, c.name, c.spriteImages || []);
      } else {
        showPopup(gameConfig.getSpritePath(c.imgName2), c.name);
      }
    });
  });
}

// Checkbox filters
document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', e => {
    const type = e.target.dataset.filter;
    const wasChecked = e.target.checked;

    for (let key in selectedFilters) {
      selectedFilters[key] = false;
      document.querySelector(`[data-filter="${key}"]`).checked = false;
    }

    if (wasChecked) {
      selectedFilters[type] = true;
      e.target.checked = true;
    }

    renderList();
  });
});

// Search input
searchInput.addEventListener('input', renderList);

// Popup
function showPopup(imgPath, altText, spriteList = []) {
  const popup = document.getElementById('spritePopup');
  const popupImg = document.getElementById('spritePopupImg');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!spriteList.length) {
    popupImg.src = typeof imgPath === 'string' ? imgPath : '';
    popupImg.alt = altText || 'No sprites found';
    popup.style.display = 'flex';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    return;
  }

  let index = 0;
  function showImageAt(idx) {
    index = idx;
    popupImg.src = `${imgPath}/${spriteList[index]}.png`;
    popupImg.alt = `${altText} - ${spriteList[index]}`;
  }

  function nextImage() {
    index = (index + 1) % spriteList.length;
    showImageAt(index);
  }

  function prevImage() {
    index = (index - 1 + spriteList.length) % spriteList.length;
    showImageAt(index);
  }

  if (spriteList.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    prevBtn.onclick = prevImage;
    nextBtn.onclick = nextImage;

    document.onkeydown = e => {
      if (popup.style.display !== 'flex') return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    // Mobile swipe
    let touchStartX = 0;
    popup.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
    popup.addEventListener('touchend', e => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (diff > 50) prevImage();
      else if (diff < -50) nextImage();
    });
  }

  showImageAt(0);
  popup.style.display = 'flex';
}

// Close popup
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('spritePopup').style.display = 'none';
});
document.getElementById('spritePopup').addEventListener('click', e => {
  if (e.target.id === 'spritePopup') e.target.style.display = 'none';
});

// Filter popup toggle
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');
filterBtn.addEventListener('click', () => filterPopup.classList.toggle('hidden'));
document.addEventListener('click', e => {
  if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) filterPopup.classList.add('hidden');
});

// Initial render
renderList();