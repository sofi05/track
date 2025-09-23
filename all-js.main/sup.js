document.addEventListener('DOMContentLoaded', () => {
  const charListEl = document.getElementById('charList');
  const searchInput = document.getElementById('searchInput');
  const filterBtn = document.getElementById('filterBtn');
  const filterPopup = document.getElementById('filterPopup');
  const newFilterCheckbox = document.getElementById('filterNew'); 

  // ====== Global Variables ======
  window.selectedFilters = { have: null, rarity: null, element: null, isNew: false }; 
  let selectedPart = '2'; // Default part, change as needed

  window.updateFiltersFromUI = function () {
    const newFilterCheckbox = document.getElementById('filterNew');
    window.selectedFilters.isNew = newFilterCheckbox ? newFilterCheckbox.checked : false;
  };

  function renderList(characters, gameFolder, spriteFolder) {
  if (!charListEl) return;
  charListEl.innerHTML = '';

  const searchTerm = searchInput.value.toLowerCase();

  // Filter and sort characters
  const filteredCharacters = characters
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

      if (selectedFilters.isNew && c.status !== 'new') return false;

      return matchesSearch && matchesPart;
    });

  // If no characters match the filters, show the "Nothing new here" message
  if (filteredCharacters.length === 0) {
    showNoResultsMessage(charListEl);
    updateCharCount();
    return;
  } else {
    filteredCharacters.forEach(c => {
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
  }

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

        updateFiltersFromUI(); 
        renderList(characters, gameFolder, spriteFolder);
      });
    });
  }

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

  if (newFilterCheckbox) {
    newFilterCheckbox.addEventListener('change', () => {
      updateFiltersFromUI();
      if (window.currentCharacters && window.gameFolder && window.spriteFolder)
        renderList(window.currentCharacters, window.gameFolder, window.spriteFolder);
    });
  }

  // ====== Part Buttons and Reset Filters ======
  function resetFilters() {
    window.selectedFilters = { have: null, rarity: null, element: null, isNew: false };
    if (searchInput) searchInput.value = '';

    const radios = filterPopup.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
      radio.checked = false;
      radio.dispatchEvent(new Event('change'));
    });

    // Reset all checkboxes
    const checkboxes = filterPopup.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
      checkbox.dispatchEvent(new Event('change'));
    });

    if (filterPopup) filterPopup.classList.add('hidden');
  }

  document.querySelectorAll('.part-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      resetFilters();
      selectedPart = btn.dataset.part === 'collab' ? 'collab' : btn.dataset.part;

      if (window.currentCharacters && window.gameFolder && window.spriteFolder)
        renderList(window.currentCharacters, window.gameFolder, window.spriteFolder);
    });
  });

  window.renderGlobalList = renderList;
  window.setupGlobalFilters = setupToggleableRadio;
});

function showNoResultsMessage(container, message = "Nothing new here ∑( ⚆ᗝ⚆)") {
  const msg = document.createElement('div');
  msg.className = 'no-results-message';
  msg.textContent = message;
  container.appendChild(msg);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const popup = document.getElementById('spritePopup');
    if (popup.style.display === 'flex') { // or !== 'none'
      popup.style.display = 'none';
    }
  }
});
// ====== Update Character Count ======
function updateCharCount() {
  const count = document.querySelectorAll('.char-card').length;
  const countText = `Total: ${count} character${count !== 1 ? 's' : ''}`;
  document.getElementById('charCount').textContent = countText;
}