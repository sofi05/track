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

  // Prevent thumbnail swipe from affecting popup swipe
  thumbnailContainer.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
  thumbnailContainer.addEventListener('touchmove', e => e.stopPropagation(), { passive: true });
  thumbnailContainer.addEventListener('touchend', e => e.stopPropagation(), { passive: true });

  thumbnailContainer.addEventListener('click', e => e.stopPropagation());

  const defaultExt = '.webp';

  // Cleanup old swipe listeners
  if (popup._removeTouchEvents) {
    popup._removeTouchEvents();
    delete popup._removeTouchEvents;
  }

  let index = 0;

  const isArrayMode = Array.isArray(imgPath);
  const isFullPathSingle = (
    typeof imgPath === 'string' &&
    (imgPath.endsWith('.png') || imgPath.endsWith('.webp')) &&
    spriteList.length <= 1
  );

  allowSwipe = isArrayMode
    ? imgPath.length > 1
    : (!isFullPathSingle && spriteList.length > 1);

  const totalImages = isArrayMode ? imgPath.length : spriteList.length;

  // Clear previous thumbnails
  thumbnailContainer.innerHTML = '';

  // Enable drag-to-scroll on thumbnails
  let isDragging = false;
  let startX, scrollLeftStart;

  thumbnailContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - thumbnailContainer.offsetLeft;
    scrollLeftStart = thumbnailContainer.scrollLeft;
    thumbnailContainer.classList.add('dragging');
  });

  thumbnailContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    thumbnailContainer.classList.remove('dragging');
  });

  thumbnailContainer.addEventListener('mouseup', () => {
    isDragging = false;
    thumbnailContainer.classList.remove('dragging');
  });

  thumbnailContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - thumbnailContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    thumbnailContainer.scrollLeft = scrollLeftStart - walk;
  });

  // Show thumbnails
if (totalImages > 1) {
  thumbnailContainer.style.display = 'flex';

  let loadedThumbs = 0;

  function updateThumbnailAlignment() {
    const thumbsCount = thumbnailContainer.children.length;
    if (thumbsCount < 5) {
      thumbnailContainer.style.justifyContent = 'center';
    } else {
      thumbnailContainer.style.justifyContent = 'flex-start';
    }
  }

  function scrollToSelectedThumbnail(index) {
  const thumbnails = thumbnailContainer.querySelectorAll('.thumbnail-img');
  if (!thumbnails[index]) return;

  const thumb = thumbnails[index];
  const containerRect = thumbnailContainer.getBoundingClientRect();
  const thumbRect = thumb.getBoundingClientRect();

  const offsetLeft = thumb.offsetLeft;
  const containerWidth = thumbnailContainer.clientWidth;
  const thumbWidth = thumb.offsetWidth;

  // If thumbnail is left of visible area, scroll left
  if (thumbRect.left < containerRect.left) {
    thumbnailContainer.scrollLeft = offsetLeft;
  } 
  // If thumbnail is right of visible area, scroll right but don't over-scroll
  else if (thumbRect.right > containerRect.right) {
    thumbnailContainer.scrollLeft = Math.min(
      offsetLeft - containerWidth + thumbWidth,
      thumbnailContainer.scrollWidth - containerWidth
    );
  }
  // else, thumbnail is fully visible, do nothing
}

  function updateThumbnailAlignment() {
  const thumbsCount = thumbnailContainer.children.length;
  if (thumbsCount < 5) {
    thumbnailContainer.style.justifyContent = 'center';
  } else {
    thumbnailContainer.style.justifyContent = 'flex-start';
  }
}


  for (let i = 0; i < totalImages; i++) {
    const thumb = document.createElement('img');
    thumb.className = 'thumbnail-img';

    if (isArrayMode) {
      thumb.src = imgPath[i];
      thumb.alt = `${altText} - ${i + 1}`;
    } else {
      thumb.src = `${imgPath}/${spriteList[i]}.png`;
      thumb.alt = `${altText} - ${spriteList[i]}`;
    }

    thumb.onload = () => {
      loadedThumbs++;
      thumbnailContainer.scrollLeft = 0;
      if (loadedThumbs === totalImages) {
        updateThumbnailAlignment();
        scrollToSelectedThumbnail(0);
      }
    };

    let touchStartX = 0;
    let touchMoved = false;

    thumb.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
      touchMoved = false;
    });

    thumb.addEventListener('touchmove', e => {
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
      if (deltaX > 10) touchMoved = true;
    });

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
      scrollToSelectedThumbnail(i);
    });

    thumbnailContainer.appendChild(thumb);
  }
} else {
  thumbnailContainer.style.display = 'none';
}

  thumbnailContainer.scrollTo({ left: 0, behavior: 'instant' }); // if needed

  function updateThumbnailAlignment() {
    const thumbsCount = thumbnailContainer.children.length;
    if (thumbsCount < 5) {
      thumbnailContainer.style.justifyContent = 'center';
    } else {
      thumbnailContainer.style.justifyContent = 'flex-start';
    }
  }

  updateThumbnailAlignment();

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
      newSrc = `${imgPath}/${spriteList[index]}.png`;
      newAlt = `${altText} - ${spriteList[index]}`;
    } else {
      newSrc = typeof imgPath === 'string' ? imgPath : '';
      newAlt = altText || 'No sprite';
    }

    popupImg.style.visibility = 'hidden';
    popupImg.src = newSrc;
    popupImg.alt = newAlt;

    // Show immediately if already loaded
    if (popupImg.complete && popupImg.naturalWidth !== 0) {
      popupImg.style.visibility = 'visible';
    } else {
      popupImg.onload = () => {
        popupImg.style.visibility = 'visible';
      };
    }

    popupImg.onerror = () => {
      popupImg.style.visibility = 'hidden';
    };

    // Highlight selected thumb
    Array.from(thumbnailContainer.querySelectorAll('.thumbnail-img')).forEach((img, i) => {
      img.classList.toggle('selected', i === idx);
    });
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

  // Arrow key and swipe support
  if (!allowSwipe) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';

    prevBtn.onclick = prevImage;
    nextBtn.onclick = nextImage;

    document.addEventListener('keydown', function (event) {
      if (popup.style.display !== 'flex') return;
      if (event.key === 'Escape') {
        popup.style.display = 'none';
        return;
      }
      if (!allowSwipe) return;

      switch (event.key) {
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
      }
    });

    let touchStartX = 0;
    const handleTouchStart = e => (touchStartX = e.touches[0].clientX);
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
  setTimeout(() => {
    showImageAt(0); // ensure it's called *after* DOM reflow
  }, 10);

  popup.offsetHeight; // trigger reflow
  popup.style.display = 'flex';
  showImageAt(0);

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