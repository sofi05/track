// ===================================================
//                  🔧 EDIT ZONE (⭐)
// ===================================================

// ⭐ ADD FILTER KEYS 
const FILTER_KEYS = [
  "have",
  "element",
  "rarity",
  "gender",
  "region",
  "world",
  "group",
  "spec",
];

// ⭐ EDIT STATUS TYPES 
const STATUS_TYPES = ["new", "soon"];

// ⭐ ADD / EDIT RARITY STYLES 
const RARITY_GRADIENTS = {
  6: 'linear-gradient(155deg, #e97171cc, rgb(148, 42, 42)',
  5: 'linear-gradient(100deg, #7c4600ff, #ffa632cc)',
  4: 'linear-gradient(135deg, #805292ff, #d9c3f3cc)',
  3: 'linear-gradient(135deg, #498ee7ff, #c3f3e7cc)',
};

// ===================================================

// ===== DOM REFERENCES =====
const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');

// ===== FILTER STATE =====
// ⭐ ADD FILTER DEFAULTS (must match FILTER_KEYS)
const filterDefaults = {
  have: null,
  element: null,
  rarity: null,
  gender: null,
  region: null,
  world: null,
  group: null,
  spec: null,

  // ⭐ STATUS CHECKBOXES 
  newStatus: {
    new: false,
    soon: false,
  },
};

let selectedFilters;

function initializeFilters() {
  selectedFilters = JSON.parse(JSON.stringify(filterDefaults));
}

// ===== CHARACTER DATA =====
window.CHARA_CONFIG = window.CHARA_CONFIG || {};
const characters = window.CHARA_CONFIG.characters || [];

// Part support
const hasPartInfo = characters.some(c => typeof c.part !== 'undefined');
let selectedPart = '2';

// ===== UTILITIES =====
function getRarityGradient(rarity) {
  // NO RARITY 
  return RARITY_GRADIENTS[rarity]
    || 'linear-gradient(135deg, #444, #999)';
}

// ===== FILTER LOGIC =====
// ⭐ WHEN ADDING A NEW FILTER:
// 1. Add default in [FILTER DEFAULTS]
// 2. Add UI input [FILTER_KEYS]
// 3. Add logic here
function passesFilters(c, searchTerm) {
  if (!c.name.toLowerCase().includes(searchTerm)) return false;

  if (hasPartInfo) {
    if (!(
      selectedPart === 'all' ||
      c.part === selectedPart ||
      (selectedPart === 'collab' && c.collab) ||
      (selectedPart === 'apho' && c.apho)
    )) return false;
  }

  if (selectedFilters.have !== null && c.have !== selectedFilters.have)
    return false;

  const { new: wantsNew, soon: wantsSoon } = selectedFilters.newStatus;
  if (wantsNew || wantsSoon) {
    if (
      (wantsNew && c.status === 'new') ||
      (wantsSoon && c.status === 'soon')
    ) {
    } else return false;
  }

  if (selectedFilters.element &&
      c.element !== selectedFilters.element &&
      c.filterElement !== selectedFilters.element)
    return false;

  if (selectedFilters.rarity &&
      c.rarity.toString() !== selectedFilters.rarity)
    return false;

  if (selectedFilters.region?.length &&
      !c.region.some(r => selectedFilters.region.includes(r)))
    return false;

  if (selectedFilters.gender && c.gender !== selectedFilters.gender)
    return false;

  if (selectedFilters.group && !c.group.includes(selectedFilters.group))
    return false;

  if (selectedFilters.world && !c.world.includes(selectedFilters.world))
    return false;

  if (selectedFilters.spec && !c.spec.includes(selectedFilters.spec))
    return false;

  return true;
}

// ===== RENDERING =====
function renderList() {
  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  const filteredChars = characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => passesFilters(c, searchTerm));

  if (filteredChars.length === 0) {
    showNoResultsMessage(charListEl);
    updateCharCount();
    return;
  }

  filteredChars.forEach(c => {
    const card = document.createElement('div');
    card.className = 'char-card';
    card.title = `${c.name} (${c.element}, ${c.rarity}★)`;

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'icon-wrapper';
    iconWrapper.style.background = getRarityGradient(c.rarity);

    if (c.status === 'new' || c.status === 'soon') {
      const label = document.createElement('div');
      label.textContent = c.status.toUpperCase();
      label.className = 'soon-label';
      iconWrapper.appendChild(label);
    }

    const elementIcon = document.createElement('div');
    elementIcon.className = 'element-icon';
    elementIcon.style.backgroundImage =
      `url('path_to_icons/${c.element.toLowerCase()}.png')`;
    elementIcon.title = c.element;
    iconWrapper.appendChild(elementIcon);

    if (typeof CHARA_CONFIG.createImageElement === 'function') {
      const imageBlock = CHARA_CONFIG.createImageElement(c);
      if (imageBlock) iconWrapper.appendChild(imageBlock);
    }

    const label = document.createElement('div');
    label.textContent = c.name;

    card.appendChild(iconWrapper);
    card.appendChild(label);
    charListEl.appendChild(card);
  });

  updateCharCount();
}

function showNoResultsMessage(container, message = "Nothing new here ∑( ⚆ᗝ⚆)") {
  const msg = document.createElement('div');
  msg.className = 'no-results-message';
  msg.textContent = message;
  container.appendChild(msg);
}

// ===== FILTER SETUP =====
function setupToggleableRadio(groupName, filterKey) {
  document.querySelectorAll(`input[name="${groupName}"]`)
    .forEach(input => {
      input.addEventListener('click', e => {
        const value = e.target.value;
        const parsedValue =
          filterKey === "have" ? (value === "true") : value;

        if (selectedFilters[filterKey] === parsedValue) {
          selectedFilters[filterKey] = null;
          input.checked = false;
        } else {
          selectedFilters[filterKey] = parsedValue;
        }

        renderList();
      });
    });
}

// ⭐ ADD NEW FILTER KEY TO FILTER_KEYS
FILTER_KEYS.forEach(key => setupToggleableRadio(key, key));

document.querySelectorAll('input[name="newStatus"]').forEach(input => {
  input.addEventListener('change', e => {
    const checked = e.target.checked;
    selectedFilters.newStatus.new = checked;
    selectedFilters.newStatus.soon = checked;
    renderList();
  });
});

// ===== FILTER POPUP =====
filterBtn.addEventListener('click', () => {
  filterPopup.classList.toggle('hidden');
});

document.addEventListener('click', e => {
  if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) {
    filterPopup.classList.add('hidden');
  }
});

// ===== SEARCH =====
searchInput.addEventListener('input', renderList);

// ===== FILTER TOGGLES =====
document.querySelectorAll('.filter-toggle').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-toggle').forEach(b => {
      if (b !== button) {
        b.classList.remove('active');
        b.nextElementSibling?.classList.remove('visible');
      }
    });

    button.classList.toggle('active');
    button.nextElementSibling?.classList.toggle('visible');
  });
});

// ===== PART BUTTONS =====
document.querySelectorAll('.part-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.part-btn')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');
    const newPart = btn.dataset.part;

    if (newPart !== selectedPart) {
      initializeFilters();
      selectedPart = newPart;
      renderList();
    }
  });
});

// ===== SPRITE POPUP =====
function showPopup(imgPath, altText) {
  const popup = document.getElementById('spritePopup');
  const popupImg = document.getElementById('spritePopupImg');

  popupImg.src = imgPath;
  popupImg.alt = altText;

  const maxW = window.innerWidth * 0.95;
  const maxH = window.innerHeight * 0.95;

  popupImg.onload = () => {
    const ratio = Math.min(
      maxW / popupImg.naturalWidth,
      maxH / popupImg.naturalHeight,
      1
    );
    popupImg.style.width = popupImg.naturalWidth * ratio + 'px';
    popupImg.style.height = popupImg.naturalHeight * ratio + 'px';
  };

  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

document.querySelector('.close-btn').addEventListener('click', closePopup);
document.getElementById('spritePopup').addEventListener('click', e => {
  if (e.target.id === 'spritePopup') closePopup();
});

function closePopup() {
  const popup = document.getElementById('spritePopup');
  popup.style.display = 'none';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePopup();
});

// ===== CHARACTER COUNT =====
function updateCharCount() {
  const count = document.querySelectorAll('.char-card').length;
  document.getElementById('charCount').textContent =
    `Total: ${count} character${count !== 1 ? 's' : ''}`;
}

// ===== IMAGE FALLBACK =====
(function () {
  const fallbackSrc = "../assets/others/page-loading.png";

  function addFallback(img) {
    if (!img.dataset.fallbackAdded && img.closest('.sprite-popup')) {
      img.dataset.fallbackAdded = true;
      img.onerror = () => {
        if (img.src !== fallbackSrc) img.src = fallbackSrc;
      };
    }
  }

  document.querySelectorAll(".sprite-popup img").forEach(addFallback);

  new MutationObserver(muts => {
    muts.forEach(m =>
      m.addedNodes.forEach(n => {
        if (n.tagName === "IMG") addFallback(n);
        n.querySelectorAll?.(".sprite-popup img").forEach(addFallback);
      })
    );
  }).observe(document.body, { childList: true, subtree: true });
})();

// ===== INITIAL LOAD =====
initializeFilters();
renderList();