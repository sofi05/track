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

    const matchesHave = !selectedFilters.have || (
      (selectedFilters.have === true && (c.have === true || 
      (Array.isArray(c.have) && c.have.includes(true)))) 
    );

    const matchesWant = !selectedFilters.want || (
      selectedFilters.want && (c.have === false || (Array.isArray(c.have) && c.have.includes(false)))
    );

    const matchesStatus = !selectedFilters.new || (selectedFilters.new && c.status === 'new');

    let matchesPart = true;
    if (selectedFilters.part !== null) {
      matchesPart = c.part === selectedFilters.part;
      if (selectedFilters.part === 'none') {
        matchesPart = !('part' in c);
      }
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

    function getRarityGradient(rarity) {
    const gradients = {
      5: 'linear-gradient(100deg, #7c4600ff, #ffa632cc)', // Gold (5★)
      4: 'linear-gradient(135deg, #805292ff, #d9c3f3cc)', // Purple (4★)
      3: 'linear-gradient(135deg, #498ee7ff, #c3f3e7cc)', // Blue (3★)
    };
    return gradients[rarity] || 'linear-gradient(135deg, #444, #999)'; // Fallback
  }

    if (gameConfig.id === 'hi3') {
      iconWrapper.style.background = 'linear-gradient(135deg, #444, #999)';
    } else {
      iconWrapper.style.background = getRarityGradient(c.rarity);
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
      img.src = gameConfig.getImgPath(c);
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
        const spritePath = gameConfig.getSpritePath(c); 
        showPopup(spritePath, c.name, [c.imgName2]);  
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
      document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('input[name="part"]').forEach(cb => cb.checked = false);
    }

    renderList();
  });
});

document.querySelectorAll('.part-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    for (let key of ['have', 'want', 'new']) {
      selectedFilters[key] = false;
      const el = document.querySelector(`[data-filter="${key}"]`);
      if (el) el.checked = false;
    }

    document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    selectedFilters.part = btn.dataset.part;

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

      document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));

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
  const popupImg = document.getElementById('spritePopupImg');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const defaultExt = '.webp';

  if (popup._removeTouchEvents) {
    popup._removeTouchEvents();
    delete popup._removeTouchEvents;
  }

  document.onkeydown = null;

  popupImg.src = '';
  popupImg.alt = '';
  popupImg.style.visibility = 'hidden';

  let index = 0;

  const isArrayMode = Array.isArray(imgPath);
  const isFullPathSingle =
    typeof imgPath === 'string' &&
    (imgPath.endsWith('.png') || imgPath.endsWith('.webp')) &&
    spriteList.length <= 1;

  const allowSwipe = isArrayMode
    ? imgPath.length > 1
    : (!isFullPathSingle && spriteList.length > 1);

  function showImageAt(idx) {
  index = idx;
  let newSrc = '';
  let newAlt = '';

  if (isArrayMode) {
    newSrc = imgPath[index] || imgPath[0];
    newAlt = `${altText} - ${newSrc.split('/').pop().replace(/\.(png|webp)/, '')}`;
  } else if (isFullPathSingle) {
    newSrc = imgPath;
    newAlt = altText;
  } else if (typeof imgPath === 'string' && spriteList.length > 0) {
    let extension = '.png'; 
    newSrc = `${imgPath}/${spriteList[index]}${extension}`;
    newAlt = `${altText} - ${spriteList[index]}`;
  } else {
    newSrc = typeof imgPath === 'string' ? imgPath : '';
    newAlt = altText || 'No sprite';
  }

  popupImg.style.visibility = 'hidden';
  popupImg.src = '';
  popupImg.alt = '';

  setTimeout(() => {
    popupImg.src = newSrc;
    popupImg.alt = newAlt;
  }, 20);

  popupImg.onload = () => {
    popupImg.style.visibility = 'visible';
  };

  popupImg.onerror = (err) => {
    popupImg.style.visibility = 'hidden'; 
  };
  }

  function nextImage() {
    if (!allowSwipe) return;
    const total = isArrayMode ? imgPath.length : spriteList.length;
    index = (index + 1) % total;
    showImageAt(index);
  }

  function prevImage() {
    if (!allowSwipe) return;
    const total = isArrayMode ? imgPath.length : spriteList.length;
    index = (index - 1 + total) % total;
    showImageAt(index);
  }

  if (!allowSwipe) {
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

    let touchStartX = 0;
    const handleTouchStart = e => touchStartX = e.touches[0].clientX;
    const handleTouchEnd = e => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (diff > 50) prevImage();
      else if (diff < -50) nextImage();
    };

    popup.addEventListener('touchstart', handleTouchStart);
    popup.addEventListener('touchend', handleTouchEnd);

    popup._removeTouchEvents = () => {
      popup.removeEventListener('touchstart', handleTouchStart);
      popup.removeEventListener('touchend', handleTouchEnd);
    };
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

window.addEventListener('DOMContentLoaded', () => {
  const partButtons = document.querySelectorAll('.part-btn');
  if (partButtons.length > 0 && !selectedFilters.part) {
    partButtons.forEach(b => b.classList.remove('active'));
    partButtons[0].classList.add('active');
    selectedFilters.part = partButtons[0].dataset.part;
    renderList();
  }
});