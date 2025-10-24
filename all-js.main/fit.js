const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');

let allowSwipe = false; // Track current swipe state globally

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

  if (filteredCharacters.length === 0) {
    showNoResultsMessage(charListEl);
    updateCharCount();
    return;
  } else {
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

      if (c.status === 'soon') {
        const label = document.createElement('div');
        label.textContent = 'SOON';
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
  }

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
  const thumbnailContainer = document.getElementById('thumbnailContainer');

  if (!popup || !popupImg || !thumbnailContainer) {
    console.error('Required popup elements not found (spritePopup / spritePopupImg / thumbnailContainer).');
    return;
  }

  // Cleanup previously attached popup touch/keyboard handlers if present
  if (popup._removeTouchEvents) {
    popup._removeTouchEvents();
    delete popup._removeTouchEvents;
  }
  if (popup._removeKeydown) {
    popup._removeKeydown();
    delete popup._removeKeydown;
  }

  // Cleanup previously attached thumbnail drag listeners, if any
  if (thumbnailContainer._removeDragListeners) {
    thumbnailContainer._removeDragListeners();
    delete thumbnailContainer._removeDragListeners;
  }

  // Determine image list (preserve your original behaviour)
  const isArrayMode = Array.isArray(imgPath);
  const isFullPathSingle = (
    typeof imgPath === 'string' &&
    (imgPath.endsWith('.png') || imgPath.endsWith('.webp')) &&
    spriteList.length <= 1
  );

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

  // Clear previous thumbs
  thumbnailContainer.innerHTML = '';

  // Add passive stopPropagation for thumbnail area so touch dragging thumbnails won't bubble
  const stopTouchStart = e => e.stopPropagation();
  const stopTouchMove  = e => e.stopPropagation();
  const stopTouchEnd   = e => e.stopPropagation();
  thumbnailContainer.addEventListener('touchstart', stopTouchStart, { passive: true });
  thumbnailContainer.addEventListener('touchmove', stopTouchMove, { passive: true });
  thumbnailContainer.addEventListener('touchend', stopTouchEnd, { passive: true });

  // Drag-to-scroll support (mouse)
  let isDragging = false;
  let startX = 0;
  let scrollLeftStart = 0;

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

  thumbnailContainer.addEventListener('mousedown', onMouseDown);
  thumbnailContainer.addEventListener('mousemove', onMouseMove);
  thumbnailContainer.addEventListener('mouseup', onMouseUp);
  thumbnailContainer.addEventListener('mouseleave', onMouseLeave);

  // save remover so subsequent opens won't add duplicate listeners
  thumbnailContainer._removeDragListeners = () => {
    thumbnailContainer.removeEventListener('mousedown', onMouseDown);
    thumbnailContainer.removeEventListener('mousemove', onMouseMove);
    thumbnailContainer.removeEventListener('mouseup', onMouseUp);
    thumbnailContainer.removeEventListener('mouseleave', onMouseLeave);
    thumbnailContainer.removeEventListener('touchstart', stopTouchStart);
    thumbnailContainer.removeEventListener('touchmove', stopTouchMove);
    thumbnailContainer.removeEventListener('touchend', stopTouchEnd);
  };

  // Build thumbnails (uniform size to avoid accidental misses)
  let loadedThumbs = 0;

  function updateThumbnailAlignment() {
  const thumbs = Array.from(thumbnailContainer.children);
  if (!thumbs.length) return;

  // get computed widths including margin/gap
  const gap = 5; // match your CSS gap
  const totalThumbWidth = thumbs.reduce((sum, t) => sum + t.getBoundingClientRect().width + gap, 0);
  const containerWidth = thumbnailContainer.getBoundingClientRect().width;

  if (totalThumbWidth <= containerWidth) {
    thumbnailContainer.style.justifyContent = 'center'; // center if fits
  } else {
    thumbnailContainer.style.justifyContent = 'flex-start'; // left-align if scrollable
  }
}

// call it after a small delay to allow mobile layout to settle
setTimeout(updateThumbnailAlignment, 50);

  function scrollToSelectedThumbnail(i) {
    const thumbnails = thumbnailContainer.querySelectorAll('.thumbnail-img');
    if (!thumbnails[i]) return;
    const thumb = thumbnails[i];
    const containerWidth = thumbnailContainer.clientWidth;
    const offsetLeft = thumb.offsetLeft;
    const thumbWidth = thumb.offsetWidth;

    // center the selected thumb when possible, clamp to scrollable area
    const target = Math.min(Math.max(offsetLeft - (containerWidth / 2 - thumbWidth / 2), 0), Math.max(0, thumbnailContainer.scrollWidth - containerWidth));
    thumbnailContainer.scrollLeft = target;
  }

  for (let i = 0; i < totalImages; i++) {
    const thumb = document.createElement('img');
    thumb.className = 'thumbnail-img';
    thumb.alt = `${altText} - ${i + 1}`;

    // Ensure uniform thumbnail size (inline style as a fallback)
    thumb.style.width = '60px';
    thumb.style.height = '60px';
    thumb.style.objectFit = 'cover';
    thumb.style.flex = '0 0 auto';

    thumb.src = images[i];

    thumb.onload = () => {
      loadedThumbs++;
      // only align/scroll after all thumbs loaded to avoid visual jump
      if (loadedThumbs === totalImages) {
        updateThumbnailAlignment();
        // small timeout to allow layout reflow across browsers
        setTimeout(() => {
          scrollToSelectedThumbnail(0);
          thumbnailContainer.scrollLeft = 0;
        }, 100); 
      }
    };

    // touch handlers to distinguish tap vs pan
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

  // If only 1 image, hide the thumbs bar
  if (totalImages <= 1) {
    thumbnailContainer.style.display = 'none';
  } else {
    thumbnailContainer.style.display = 'flex';
  }

  // Main image display logic
  // ===== Main image display logic with auto-resize =====
let index = 0;

function showImageAt(idx) {
  index = idx;
  let newSrc = images[index] || images[0] || '';
  let newAlt = `${altText} - ${newSrc.split('/').pop().replace(/\.(png|webp)/, '')}`;

  // Reset sizing
  popupImg.style.width = '';
  popupImg.style.height = '';
  popupImg.style.objectFit = 'contain';
  popupImg.style.visibility = 'hidden';
  popupImg.src = newSrc;
  popupImg.alt = newAlt;

  // Resize dynamically on load
  popupImg.onload = () => {
    const maxWidth = window.innerWidth * 0.95;
    const maxHeight = window.innerHeight * 0.95;

    let width = popupImg.naturalWidth;
    let height = popupImg.naturalHeight;

    // scale down if bigger than popup
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

  // highlight selected thumb
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

  // Prev/next button wiring and visibility
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

  // Keyboard arrows & ESC (register and keep a remover)
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

  // Touch swipe for popup image
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

  // Start at first image (and make sure layout has time to settle)
  showImageAt(0);
  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    updateThumbnailAlignment();
    scrollToSelectedThumbnail(0);
    thumbnailContainer.scrollLeft = 0;
  }, 20);

  // clicking outside children closes the popup — keep that behaviour
  popup.onclick = (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';

      // cleanup drag + touch listeners we attached
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

  // Prevent thumbnail clicks from bubbling and closing the popup
  thumbnailContainer.addEventListener('click', e => e.stopPropagation());
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const popup = document.getElementById('spritePopup');
    if (popup.style.display === 'flex') { // or !== 'none'
      popup.style.display = 'none';
    }
  }
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('spritePopup').style.display = 'none';
});
document.getElementById('spritePopup').addEventListener('click', e => {
  const popup = e.currentTarget;
  const thumbnailContainer = document.getElementById('thumbnailContainer');

  // Don't close if clicking inside popup children (like thumbnails, image, buttons)
  if (
    thumbnailContainer.contains(e.target) ||
    document.getElementById('spritePopupImg').contains(e.target) ||
    document.getElementById('prevBtn').contains(e.target) ||
    document.getElementById('nextBtn').contains(e.target) ||
    document.querySelector('.close-btn').contains(e.target)
  ) {
    return;
  }

  // Close only when truly clicking the background (overlay) area
  if (e.target === popup) {
    popup.style.display = 'none';
    document.body.style.overflow = '';
  }
});

const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');

if (filterBtn && filterPopup) {
  filterBtn.addEventListener('click', () => {
    filterPopup.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) {
      filterPopup.classList.add('hidden');
    }
  });
}

function updateCharCount() {
  const count = document.querySelectorAll('.char-card').length;
  const countText = `Total: ${count} character${count !== 1 ? 's' : ''}`;
  document.getElementById('charCount').textContent = countText;
}

function showNoResultsMessage(container, message = "Nothing new here ∑( ⚆ᗝ⚆)") {
  const msg = document.createElement('div');
  msg.className = 'no-results-message';
  msg.textContent = message;
  container.appendChild(msg);
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

window.addEventListener('resize', () => {
  const popup = document.querySelector('.sprite-popup');
  if (popup) {
    popup.style.height = window.innerHeight + 'px';
  }
});

document.getElementById('thumbnailContainer').addEventListener('click', e => {
  e.stopPropagation(); // Prevent clicks from bubbling to the popup background
});