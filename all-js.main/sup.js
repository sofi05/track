document.addEventListener('DOMContentLoaded', () => {
  // ====== Elements ======
  const charListEl = document.getElementById('charList');
  const searchInput = document.getElementById('searchInput');
  const filterBtn = document.getElementById('filterBtn');
  const filterPopup = document.getElementById('filterPopup');
  const newFilterCheckbox = document.getElementById('filterNew'); // ✅ NEW checkbox

  // ====== Global Variables ======
  window.selectedFilters = { have: null, rarity: null, element: null, isNew: false }; // ✅ isNew added

  // ====== Global Function to Sync Filters ======
  window.updateFiltersFromUI = function () {
    const newFilterCheckbox = document.getElementById('filterNew');
    window.selectedFilters.isNew = newFilterCheckbox ? newFilterCheckbox.checked : false;
  };

  // ====== Render function ======
  function renderList(characters, gameFolder, spriteFolder) {
    if (!charListEl) return;
    charListEl.innerHTML = '';
    const searchTerm = searchInput.value.toLowerCase();

    characters
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(searchTerm);

        const matchesPart = selectedPart === 'all' ||
                            (!c.part) ||
                            c.part === selectedPart ||
                            (selectedPart === 'collab' && c.collab);

        if (selectedFilters.have !== null) {
          if (selectedFilters.have && !c.have) return false;
          if (!selectedFilters.have && c.have) return false;
        }

        if (selectedFilters.rarity && c.rarity !== selectedFilters.rarity) return false;
        if (selectedFilters.element && c.element !== selectedFilters.element) return false;

        if (selectedFilters.isNew && c.status !== 'new') return false; // ✅ NEW logic

        return matchesSearch && matchesPart;
      })
      .forEach(c => {
        const card = document.createElement('div');
        card.className = 'char-card';
        card.title = `${c.name} (${c.element || 'Unknown'}, ${c.rarity}★)`;

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'icon-wrapper';
        const rarityGradients = {
          5: 'linear-gradient(100deg, #7c4600ff, #ffa632cc)',
          4: 'linear-gradient(135deg, #805292ff, #d9c3f3cc)',
        };
        iconWrapper.style.background = rarityGradients[c.rarity] || 'linear-gradient(135deg, #444, #999)';

        // NEW / SOON Tags
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
        const imgSrcName = c.imgName || c.name;
        const charFolder = c.folder || '';
        img.src = `${gameFolder}/${charFolder}/${imgSrcName}.png`;
        img.alt = c.name;
        iconWrapper.appendChild(img);

        const label = document.createElement('div');
        label.textContent = c.name;

        card.appendChild(iconWrapper);
        card.appendChild(label);
        charListEl.appendChild(card);

        card.addEventListener('click', () => {
          const imgPath = `${spriteFolder}/${charFolder}/${imgSrcName}.png`;
          showPopup(imgPath, c.name);
        });
      });

    updateCharCount();
  }

  // ====== Filter Listeners ======
  function setupToggleableRadio(groupName, filterKey, characters, gameFolder, spriteFolder) {
    const inputs = document.querySelectorAll(`input[name="${groupName}"]`);
    inputs.forEach(input => {
      input.addEventListener('click', e => {
        const value = e.target.value;
        const parsedValue = (filterKey === "have") ? (value === "true") : value;

        if (selectedFilters[filterKey] === parsedValue) {
          selectedFilters[filterKey] = null;
          input.checked = false;
        } else {
          selectedFilters[filterKey] = parsedValue;
        }

        updateFiltersFromUI(); // ✅ Sync 'new' checkbox state
        renderList(characters, gameFolder, spriteFolder);
      });
    });
  }

  // ====== Accordion for Filter Sections ======
  document.querySelectorAll('.filter-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const options = btn.nextElementSibling;
      document.querySelectorAll('.filter-options').forEach(opt => {
        if (opt !== options) opt.classList.remove('visible');
      });
      document.querySelectorAll('.filter-toggle').forEach(b => {
        if (b !== btn) b.classList.remove('active');
      });
      btn.classList.toggle('active');
      if (options) options.classList.toggle('visible');
    });
  });

  // ====== Popup ======
  function showPopup(imgPath, altText) {
    const popup = document.getElementById('spritePopup');
    const popupImg = document.getElementById('spritePopupImg');
    popupImg.src = imgPath;
    popupImg.alt = altText;
    popup.style.display = 'flex';
  }

  filterBtn.addEventListener('click', () => filterPopup.classList.toggle('hidden'));
  document.addEventListener('click', e => {
    if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) filterPopup.classList.add('hidden');
  });
  document.querySelector('.close-btn').addEventListener('click', () => document.getElementById('spritePopup').style.display = 'none');
  document.getElementById('spritePopup').addEventListener('click', e => {
    if (e.target === e.currentTarget) e.currentTarget.style.display = 'none';
  });

  // ====== Search ======
  searchInput.addEventListener('input', () => {
    if (window.currentCharacters && window.gameFolder && window.spriteFolder)
      renderList(window.currentCharacters, window.gameFolder, window.spriteFolder);
  });

  // ====== Part Buttons ======
  let selectedPart = '2';
  document.querySelectorAll('.part-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedPart = btn.dataset.part === 'collab' ? 'collab' : btn.dataset.part;

      if (window.currentCharacters && window.gameFolder && window.spriteFolder)
        renderList(window.currentCharacters, window.gameFolder, window.spriteFolder);
    });
  });

  // ====== NEW Checkbox Filter Listener ======
  if (newFilterCheckbox) {
    newFilterCheckbox.addEventListener('change', () => {
      updateFiltersFromUI();
      if (window.currentCharacters && window.gameFolder && window.spriteFolder)
        renderList(window.currentCharacters, window.gameFolder, window.spriteFolder);
    });
  }

  // ====== Expose functions to window ======
  window.renderGlobalList = renderList;
  window.setupGlobalFilters = setupToggleableRadio;
});

function updateCharCount() {
  const count = document.querySelectorAll('.char-card').length;
  const countText = `Total: ${count} character${count !== 1 ? 's' : ''}`;
  document.getElementById('charCount').textContent = countText;
}