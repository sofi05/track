// Global filter state (to make it accessible across the code)
const selectedFilters = {
  have: false,
  want: false,
  new: false,
};

function renderList() {
  const charListEl = document.getElementById('charList');
  const searchInput = document.getElementById('searchInput');

  // Log current filter state to debug
  console.log('Selected filters:', selectedFilters);

  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  const characters = gameConfig.characters;

  // Log characters to see the data structure
  console.log('Characters:', characters);

  const filteredCharacters = characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => {
      // Check if the name matches the search term
      const matchesSearch = c.name.toLowerCase().includes(searchTerm);

      // Debug each character filtering process
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

  // Log filtered characters to see the final result after applying filters
  console.log('Filtered characters:', filteredCharacters);

  // Now render the filtered characters
  filteredCharacters.forEach(c => {
    const card = document.createElement('div');
    card.className = 'char-card';
    card.title = `${c.name} (${c.rarity}★)`;

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'icon-wrapper';
    iconWrapper.style.background = c.rarity === 5
      ? 'linear-gradient(100deg, #7c4600ff, #ffa632cc)'
      : 'linear-gradient(135deg, #805292ff, #d9c3f3cc)';

    // Display "NEW" label if the character's status is 'new'
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

    // Show sprite popup on card click
    card.addEventListener('click', () => {
      const spritePath = gameConfig.getSpritePath(c.imgName2);
      showPopup(spritePath, c.name);
    });
  });
}

// Unified single-select checkbox logic
document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', e => {
    const type = e.target.dataset.filter;

    // If the checkbox was checked, reset all filters and only select the clicked one
    if (e.target.checked) {
      // Deselect all checkboxes by setting them to false
      selectedFilters.have = false;
      selectedFilters.want = false;
      selectedFilters.new = false;

      // Set the current filter to true
      selectedFilters[type] = true;
    } else {
      // If unchecked, set the corresponding filter to false
      selectedFilters[type] = false;
    }

    // Update the checkboxes in the UI to match the `selectedFilters`
    document.querySelectorAll('.filter-checkbox').forEach(box => {
      const filterType = box.dataset.filter;
      box.checked = selectedFilters[filterType];
    });

    // Log updated filter state to ensure it's correct
    console.log('Updated selected filters:', selectedFilters);

    // Re-render the list based on the new filters
    renderList();
  });
});

// Search typing
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', renderList);

// Show popup
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

// Initialize rendering
renderList();
