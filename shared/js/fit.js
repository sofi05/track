// ===================================================
//                  🔧 EDIT ZONE (⭐)
// ===================================================

// ⭐ FILTER STATE
let selectedFilters = {
  have: false,
  want: false,
  new: false,
  part: null,
};

// GLOBAL FLAGS
let allowSwipe = false;

// ===================================================


// ===== DOM REFERENCES =====
const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');


// ===== ⭐ UTILITIES =====
function showNoResultsMessage(container, message = "Nothing new here ∑( ⚆ᗝ⚆)") {
  const msg = document.createElement('div');
  msg.className = 'no-results-message';
  msg.textContent = message;
  container.appendChild(msg);
}

function updateCharCount() {
  const count = document.querySelectorAll('.char-card').length;
  document.getElementById('charCount').textContent =
    `Total: ${count} character${count !== 1 ? 's' : ''}`;
}

function getRarityGradient(rarity) {
  const gradients = {
    5: 'linear-gradient(100deg, #7c4600ff, #ffa632cc)',
    4: 'linear-gradient(135deg, #805292ff, #d9c3f3cc)',
    3: 'linear-gradient(135deg, #498ee7ff, #c3f3e7cc)',
  };
  return gradients[rarity] || 'linear-gradient(135deg, #444, #999)';
}

// ===== ⭐ FILTER LOGIC =====
function passesFilters(c, searchTerm) {
  const matchesSearch = c.name.toLowerCase().includes(searchTerm);

  const matchesHave = !selectedFilters.have || (
    selectedFilters.have === true &&
    (c.have === true || (Array.isArray(c.have) && c.have.includes(true)))
  );

  const matchesWant = !selectedFilters.want || (
    selectedFilters.want &&
    (c.have === false || (Array.isArray(c.have) && c.have.includes(false)))
  );

  const matchesStatus =
    !selectedFilters.new || (selectedFilters.new && c.status === 'new');

  let matchesPart = true;
  if (selectedFilters.part !== null) {
    matchesPart = c.part === selectedFilters.part;
    if (selectedFilters.part === 'none') {
      matchesPart = !('part' in c);
    }
  }

  return (
    matchesSearch &&
    matchesHave &&
    matchesWant &&
    matchesStatus &&
    matchesPart
  );
}

// ===== RENDERING =====
function renderList() {
  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();
  const characters = gameConfig.characters;
  const filteredCharacters = characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => passesFilters(c, searchTerm));

  if (filteredCharacters.length === 0) {
    showNoResultsMessage(charListEl);
    updateCharCount();
    return;
  }

  filteredCharacters.forEach(c => {
    if (!c.name) return;

    const card = document.createElement('div');
    card.className = 'char-card';
    card.title = `${c.name} (${c.rarity || ''}★)`;

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'icon-wrapper';
    iconWrapper.style.background = getRarityGradient(c.rarity);

    if (c.status === 'new' || c.status === 'soon') {
      const label = document.createElement('div');
      label.textContent = c.status.toUpperCase();
      label.className = 'soon-label';
      iconWrapper.appendChild(label);
    }

    const img = document.createElement('img');
    img.className = 'char-icon';
    img.alt = c.name;
    img.src =
      gameConfig.id === 'hi3'
        ? `../assets/charaid/Honkai/${c.folder}/${c.imgName}.png`
        : gameConfig.getImgPath(c);

    iconWrapper.appendChild(img);

    const nameLabel = document.createElement('div');
    nameLabel.textContent = c.name;

    card.appendChild(iconWrapper);
    card.appendChild(nameLabel);
    charListEl.appendChild(card);

    card.addEventListener('click', () => {
      if (gameConfig.id === 'hi3') {
        showPopup(
          `../assets/Sprite/HI3/Outfit/${c.spriteFolder}`,
          c.name,
          c.spriteImages || []
        );
      } else {
        showPopup(
          gameConfig.getSpritePath(c),
          c.name,
          [c.imgName2]
        );
      }
    });
  });

  updateCharCount();
}

// ===== ⭐ FILTER INPUTS =====
document.querySelectorAll('.filter-checkbox[data-filter]').forEach(cb => {
  cb.addEventListener('change', e => {
    const type = e.target.dataset.filter;
    const wasChecked = e.target.checked;

    ['have', 'want', 'new'].forEach(k => {
      selectedFilters[k] = false;
      const el = document.querySelector(`[data-filter="${k}"]`);
      if (el) el.checked = false;
    });

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

// ===== ⭐ PART FILTERS =====
document.querySelectorAll('.part-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    ['have', 'want', 'new'].forEach(k => {
      selectedFilters[k] = false;
      const el = document.querySelector(`[data-filter="${k}"]`);
      if (el) el.checked = false;
    });

    document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    selectedFilters.part = btn.dataset.part;
    renderList();
  });
});

document.querySelectorAll('input[name="part"]').forEach(cb => {
  cb.addEventListener('change', e => {
    if (e.target.checked) {
      ['have', 'want', 'new'].forEach(k => {
        selectedFilters[k] = false;
        const el = document.querySelector(`[data-filter="${k}"]`);
        if (el) el.checked = false;
      });

      document.querySelectorAll('input[name="part"]').forEach(x => {
        if (x !== e.target) x.checked = false;
      });

      document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
      selectedFilters.part = e.target.value;
    } else {
      selectedFilters.part = null;
    }

    renderList();
  });
});

// ===== SEARCH =====
searchInput.addEventListener('input', renderList);

// ===== FILTER POPUP =====
if (filterBtn && filterPopup) {
  filterBtn.addEventListener('click', () => {
    filterPopup.classList.toggle('hidden');
  });

  document.addEventListener('click', e => {
    if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) {
      filterPopup.classList.add('hidden');
    }
  });
}

// ===== SPRITE POPUP =====
function showPopup(imgPath, altText, spriteList = []) {
  const popup = document.getElementById('spritePopup');
  const popupImg = document.getElementById('spritePopupImg');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const thumbnailContainer = document.getElementById('thumbnailContainer');
  const stopTouchStart = e => e.stopPropagation();
  const stopTouchMove  = e => e.stopPropagation();
  const stopTouchEnd   = e => e.stopPropagation();
  const isArrayMode = Array.isArray(imgPath);
  const isFullPathSingle = (
    typeof imgPath === 'string' &&
    (imgPath.endsWith('.png') || imgPath.endsWith('.webp')) &&
    spriteList.length <= 1
  );

  if (!popup || !popupImg || !thumbnailContainer) {
    console.error('Required popup elements not found (spritePopup / spritePopupImg / thumbnailContainer).');
    return;
  }

  if (popup._removeTouchEvents) {
    popup._removeTouchEvents();
    delete popup._removeTouchEvents;
  }
  if (popup._removeKeydown) {
    popup._removeKeydown();
    delete popup._removeKeydown;
  }

  if (thumbnailContainer._removeDragListeners) {
    thumbnailContainer._removeDragListeners();
    delete thumbnailContainer._removeDragListeners;
  }

  let images;
  if (isArrayMode) {
    images = imgPath.slice();
  } else if (isFullPathSingle) {
    images = [imgPath];
  } else if (typeof imgPath === 'string' && spriteList.length > 0) {
    images = spriteList.map(s => `${imgPath}/${s}.png`);
  } else {
    images = spriteList.slice();
  }

  const totalImages = images.length;
  allowSwipe = totalImages > 1;

  thumbnailContainer.innerHTML = '';
  thumbnailContainer.addEventListener('touchstart', stopTouchStart, { passive: true });
  thumbnailContainer.addEventListener('touchmove', stopTouchMove, { passive: true });
  thumbnailContainer.addEventListener('touchend', stopTouchEnd, { passive: true });
  thumbnailContainer.addEventListener('mousedown', onMouseDown);
  thumbnailContainer.addEventListener('mousemove', onMouseMove);
  thumbnailContainer.addEventListener('mouseup', onMouseUp);
  thumbnailContainer.addEventListener('mouseleave', onMouseLeave);
  thumbnailContainer._removeDragListeners = () => {
    thumbnailContainer.removeEventListener('mousedown', onMouseDown);
    thumbnailContainer.removeEventListener('mousemove', onMouseMove);
    thumbnailContainer.removeEventListener('mouseup', onMouseUp);
    thumbnailContainer.removeEventListener('mouseleave', onMouseLeave);
    thumbnailContainer.removeEventListener('touchstart', stopTouchStart);
    thumbnailContainer.removeEventListener('touchmove', stopTouchMove);
    thumbnailContainer.removeEventListener('touchend', stopTouchEnd);
  };

  let isDragging = false;
  let startX = 0;
  let scrollLeftStart = 0;
  let loadedThumbs = 0;

  function onMouseDown(e) {
    isDragging = true;
    startX = e.pageX - thumbnailContainer.offsetLeft;
    scrollLeftStart = thumbnailContainer.scrollLeft;
    thumbnailContainer.classList.add('dragging');
  }
  function onMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - thumbnailContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    thumbnailContainer.scrollLeft = scrollLeftStart - walk;
  }
  function onMouseUp() {
    isDragging = false;
    thumbnailContainer.classList.remove('dragging');
  }
  function onMouseLeave() {
    isDragging = false;
    thumbnailContainer.classList.remove('dragging');
  }

  function updateThumbnailAlignment() {
  const thumbs = Array.from(thumbnailContainer.children);
  if (!thumbs.length) return;

  const gap = 5; 
  const totalThumbWidth = thumbs.reduce((sum, t) => sum + t.getBoundingClientRect().width + gap, 0);
  const containerWidth = thumbnailContainer.getBoundingClientRect().width;

  if (totalThumbWidth <= containerWidth) {
    thumbnailContainer.style.justifyContent = 'center'; 
  } else {
    thumbnailContainer.style.justifyContent = 'flex-start'; 
  }
}

setTimeout(updateThumbnailAlignment, 50);
  function scrollToSelectedThumbnail(i) {
    const thumbnails = thumbnailContainer.querySelectorAll('.thumbnail-img');
    if (!thumbnails[i]) return;
    const thumb = thumbnails[i];
    const containerWidth = thumbnailContainer.clientWidth;
    const offsetLeft = thumb.offsetLeft;
    const thumbWidth = thumb.offsetWidth;
    const target = Math.min(Math.max(offsetLeft - (containerWidth / 2 - thumbWidth / 2), 0), Math.max(0, thumbnailContainer.scrollWidth - containerWidth));
    thumbnailContainer.scrollLeft = target;
  }

  for (let i = 0; i < totalImages; i++) {
    const thumb = document.createElement('img');
    thumb.className = 'thumbnail-img';
    thumb.alt = `${altText} - ${i + 1}`;
    thumb.style.width = '60px';
    thumb.style.height = '60px';
    thumb.style.objectFit = 'cover';
    thumb.style.flex = '0 0 auto';
    thumb.src = images[i];
    thumb.onload = () => {
      loadedThumbs++;
      if (loadedThumbs === totalImages) {
        updateThumbnailAlignment();
        setTimeout(() => {
          scrollToSelectedThumbnail(0);
          thumbnailContainer.scrollLeft = 0;
        }, 100); 
      }
    };

    let touchStartX = 0;
    let touchMoved = false;
    thumb.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
      touchMoved = false;
    }, { passive: true });

    thumb.addEventListener('touchmove', e => {
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
      if (deltaX > 10) touchMoved = true;
    }, { passive: true });

    thumb.addEventListener('touchend', e => {
      if (!touchMoved) {
        e.stopPropagation();
        showImageAt(i);
        Array.from(thumbnailContainer.children).forEach((t, idx) => {
          t.classList.toggle('selected', idx === i);
        });
        scrollToSelectedThumbnail(i);
      }
    });

    thumb.addEventListener('click', (e) => {
  e.stopPropagation();
  showImageAt(i);
  Array.from(thumbnailContainer.children).forEach((t, idx) => {
    t.classList.toggle('selected', idx === i);
  });

  // Option 1: Instant scroll only if needed
  const thumbLeft = thumb.offsetLeft;
  const thumbRight = thumbLeft + thumb.offsetWidth;
  const containerLeft = thumbnailContainer.scrollLeft;
  const containerRight = containerLeft + thumbnailContainer.clientWidth;

  if (thumbLeft < containerLeft) {
    thumbnailContainer.scrollLeft = thumbLeft; // scroll left instantly
  } else if (thumbRight > containerRight) {
    thumbnailContainer.scrollLeft = thumbRight - thumbnailContainer.clientWidth; // scroll right instantly
  }
});

    thumbnailContainer.appendChild(thumb);
  }

  if (totalImages <= 1) {
    thumbnailContainer.style.display = 'none';
  } else {
    thumbnailContainer.style.display = 'flex';
  }

let index = 0;

function showImageAt(idx) {
  index = idx;
  let newSrc = images[index] || images[0] || '';
  let newAlt = `${altText} - ${newSrc.split('/').pop().replace(/\.(png|webp)/, '')}`;

  popupImg.style.width = '';
  popupImg.style.height = '';
  popupImg.style.objectFit = 'contain';
  popupImg.style.visibility = 'hidden';
  popupImg.src = newSrc;
  popupImg.alt = newAlt;
  popupImg.onload = () => {
    const maxWidth = window.innerWidth * 0.95;
    const maxHeight = window.innerHeight * 0.95;

    let width = popupImg.naturalWidth;
    let height = popupImg.naturalHeight;

    const widthRatio = maxWidth / width;
    const heightRatio = maxHeight / height;
    const ratio = Math.min(widthRatio, heightRatio, 1); // don't upscale small images

    width *= ratio;
    height *= ratio;

    popupImg.style.width = width + 'px';
    popupImg.style.height = height + 'px';
    popupImg.style.visibility = 'visible';
  };

  popupImg.onerror = () => {
    popupImg.style.visibility = 'hidden';
  };

  Array.from(thumbnailContainer.querySelectorAll('.thumbnail-img')).forEach((img, i) => {
    img.classList.toggle('selected', i === idx);
  });
}

  function nextImage() {
    if (!allowSwipe) return;
    index = (index + 1) % totalImages;
    showImageAt(index);
    scrollToSelectedThumbnail(index);
  }

  function prevImage() {
    if (!allowSwipe) return;
    index = (index - 1 + totalImages) % totalImages;
    showImageAt(index);
    scrollToSelectedThumbnail(index);
  }

  if (!prevBtn || !nextBtn) {
    console.warn('prevBtn or nextBtn missing.');
  } else {
    if (!allowSwipe) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
      nextBtn.style.display = 'block';
      prevBtn.onclick = (e) => { e.stopPropagation(); prevImage(); };
      nextBtn.onclick = (e) => { e.stopPropagation(); nextImage(); };
    }
  }

  const keyHandler = function (event) {
    if (popup.style.display !== 'flex') return;
    if (event.key === 'Escape') {
      popup.style.display = 'none';
      return;
    }
    if (!allowSwipe) return;
    if (event.key === 'ArrowRight') nextImage();
    if (event.key === 'ArrowLeft') prevImage();
  };
  document.addEventListener('keydown', keyHandler);
  popup._removeKeydown = () => document.removeEventListener('keydown', keyHandler);

  let touchStartXMain = 0;
  const handleTouchStart = e => (touchStartXMain = e.touches[0].clientX);
  const handleTouchEnd = e => {
    const diff = e.changedTouches[0].clientX - touchStartXMain;
    if (Math.abs(diff) < 10) return;
    if (diff > 50) prevImage();
    else if (diff < -50) nextImage();
  };

  popup.addEventListener('touchstart', handleTouchStart, { passive: true });
  popup.addEventListener('touchend', handleTouchEnd, { passive: true });
  popup._removeTouchEvents = () => {
    popup.removeEventListener('touchstart', handleTouchStart);
    popup.removeEventListener('touchend', handleTouchEnd);
    if (popup._removeKeydown) popup._removeKeydown();
  };

  showImageAt(0);
  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    updateThumbnailAlignment();
    scrollToSelectedThumbnail(0);
    thumbnailContainer.scrollLeft = 0;
  }, 20);

  popup.onclick = (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';

      if (thumbnailContainer._removeDragListeners) {
        thumbnailContainer._removeDragListeners();
        delete thumbnailContainer._removeDragListeners;
      }
      if (popup._removeTouchEvents) {
        popup._removeTouchEvents();
        delete popup._removeTouchEvents;
      }
    }
  };
  thumbnailContainer.addEventListener('click', e => e.stopPropagation());
}

// ===== GLOBAL EVENTS =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const popup = document.getElementById('spritePopup');
    if (popup?.style.display === 'flex') popup.style.display = 'none';
  }
});

window.addEventListener('resize', () => {
  const popup = document.querySelector('.sprite-popup');
  if (popup) popup.style.height = window.innerHeight + 'px';
});

// ===== INITIAL LOAD =====
renderList();

window.addEventListener('DOMContentLoaded', () => {
  const partButtons = document.querySelectorAll('.part-btn');
  if (partButtons.length && !selectedFilters.part) {
    partButtons.forEach(b => b.classList.remove('active'));
    partButtons[0].classList.add('active');
    selectedFilters.part = partButtons[0].dataset.part;
    renderList();
  }
});