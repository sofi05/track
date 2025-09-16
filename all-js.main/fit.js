const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');

let selectedFilters = {
  have: false,
  want: false,
  new: false,
  part: null,
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

      let matchesPart = true;
      if (selectedFilters.part !== null) {
        matchesPart = c.part === selectedFilters.part;
      }

      return matchesSearch && matchesHave && matchesWant && matchesStatus && matchesPart;
    });

  filteredCharacters.forEach(c => {
    if (!c.name) return;

    const card = document.createElement('div');
    card.className = 'char-card';
    card.title = `${c.name} (${c.rarity || ''}★)`;

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'icon-wrapper';

    if (gameConfig.id === 'hi3') {
      iconWrapper.style.background = 'linear-gradient(135deg, #444, #999)';
    } else {
      iconWrapper.style.background = c.rarity === 5
        ? 'linear-gradient(100deg, #7c4600ff, #ffa632cc)'
        : 'linear-gradient(135deg, #805292ff, #d9c3f3cc)';
    }

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

    card.addEventListener('click', () => {
      if (gameConfig.id === 'hi3') {
        const folderPath = `../assets/Sprite/HI3/Outfit/${c.spriteFolder}`;
        showPopup(folderPath, c.name, c.spriteImages || []);
      } else {
        showPopup(gameConfig.getSpritePath(c.imgName2), c.name);
      }
    });
  });
  updateCharCount();
}

document.querySelectorAll('.filter-checkbox[data-filter]').forEach(checkbox => {
  checkbox.addEventListener('change', e => {
    const type = e.target.dataset.filter;
    const wasChecked = e.target.checked;

    for (let key of ['have', 'want', 'new']) {
      selectedFilters[key] = false;
      const el = document.querySelector(`[data-filter="${key}"]`);
      if (el) el.checked = false;
    }

    if (wasChecked) {
      selectedFilters[type] = true;
      e.target.checked = true;

      selectedFilters.part = null;
      document.querySelectorAll('input[name="part"]').forEach(cb => cb.checked = false);
    }

    renderList();
  });
});

document.querySelectorAll('input[name="part"]').forEach(partCheckbox => {
  partCheckbox.addEventListener('change', e => {
    if (e.target.checked) {
      for (let key of ['have', 'want', 'new']) {
        selectedFilters[key] = false;
        const el = document.querySelector(`[data-filter="${key}"]`);
        if (el) el.checked = false;
      }

      document.querySelectorAll('input[name="part"]').forEach(cb => {
        if (cb !== e.target) cb.checked = false;
      });

      selectedFilters.part = e.target.value;
    } else {
      selectedFilters.part = null;
    }

    renderList();
  });
});

searchInput.addEventListener('input', renderList);

function showPopup(imgPath, altText, spriteList = []) {
  const popup = document.getElementById('spritePopup');

  if (popup._removeTouchEvents) {
    popup._removeTouchEvents();
    delete popup._removeTouchEvents;
  }

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
  popupImg.src = ''; // Clear old image to avoid flashing

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

    if (spriteList.length > 1) {
    let touchStartX = 0;

    const handleTouchStart = e => touchStartX = e.touches[0].clientX;
    const handleTouchEnd = e => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (diff > 50) prevImage();
      else if (diff < -50) nextImage();
    };

    popup.addEventListener('touchstart', handleTouchStart);
    popup.addEventListener('touchend', handleTouchEnd);

    // Cleanup (optional but safer if reusing the popup)
    popup._removeTouchEvents = () => {
      popup.removeEventListener('touchstart', handleTouchStart);
      popup.removeEventListener('touchend', handleTouchEnd);
    };
  }
}

  showImageAt(0);
  popup.style.display = 'flex';
}

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('spritePopup').style.display = 'none';
});
document.getElementById('spritePopup').addEventListener('click', e => {
  if (e.target.id === 'spritePopup') e.target.style.display = 'none';
});

const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');
filterBtn.addEventListener('click', () => filterPopup.classList.toggle('hidden'));
document.addEventListener('click', e => {
  if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) filterPopup.classList.add('hidden');
});

function updateCharCount() {
  const count = document.querySelectorAll('.char-card').length;
  const countText = `Total: ${count} character${count !== 1 ? 's' : ''}`;
  document.getElementById('charCount').textContent = countText;
}

renderList();