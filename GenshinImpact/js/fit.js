const characters = [
  { name: 'Lisa', imgName: 'A_Sobriquet_Under_Shade_Icon', imgName2:'LisaCostumeStudentin', have: true, rarity: 4, status: 'available' },
  { name: 'Diluc', imgName: 'Red_Dead_of_Night_Icon',imgName2:'DilucCostumeFlamme', have: false, rarity: 5, status: 'available' },
  { name: 'Ayaka', imgName: 'Springbloom_Missive_Icon',imgName2:'AyakaCostumeFruhling', have: false,  rarity: 5, status: 'available' },
  { name: 'Barbara', imgName: 'Summertime_Sparkle_Icon',imgName2:'BarbaraCostumeSummertime', have: false, rarity: 4, status: 'available' },
  { name: 'Bennett', imgName: 'Adventures_in_Blazing_Hue_Icon',imgName2:'BennettCostumeSummer', have: true, rarity: 4, status: 'new' },
  { name: 'Yelan', imgName: 'Tranquil_Banquet_Icon',imgName2:'YelanCostumeSummer', have: false, rarity: 5, status: 'new'},
  { name: 'Nilou', imgName: 'Breeze_of_Sabaa_Icon',imgName2:'NilouCostumeFairy', have: false, rarity: 5, status: 'available'},
  { name: 'Shenhe', imgName: 'Frostflower_Dew_Icon',imgName2:'ShenheCostumeDai', have: false, rarity: 5, status: 'available'},
  { name: 'Kirara', imgName: 'Phantom_in_Boots_Icon', imgName2:'MomokaCostumeErrantry',have: true, rarity: 4, status: 'available' },
  { name: 'Fischl', imgName: 'Ein_Immernachtstraum_Icon',imgName2:'FischlCostumeHighness', have: true, rarity: 4, status: 'available' },
  { name: 'Ganyu', imgName: 'Twilight_Blossom_Icon',imgName2:'GanyuCostumeYu', have: false, rarity: 5, status: 'available' },
  { name: 'Kaeya', imgName: 'Sailwind_Shadow_Icon',imgName2:'KaeyaCostumeDancer', have: true, rarity: 4, status: 'available' },
  { name: 'Keqing', imgName: 'Opulent_Splendor_Icon',imgName2:'KeqingCostumeFeather', have: false, rarity: 5, status: 'available' },
  { name: 'Klee', imgName: 'Blossoming_Starlight_Icon',imgName2:'KleeCostumeWitch', have: false, rarity: 5, status: 'available'},
  { name: 'Ningguang', imgName: 'Orchids_Evening_Gown_Icon',imgName2:'NingguangCostumeFloral', have: false, rarity: 4, status: 'available' },
  { name: 'Hu Tao', imgName: 'Cherries_Snow-Laden_Icon',imgName2:'HutaoCostumeWinter', have: false, rarity: 5, status: 'available' },
  { name: 'Jean', imgName: 'Sea_Breeze_Dandelion_Icon',imgName2:'QinCostumeSea', have: false, rarity: 5, status: 'available' },
  { name: 'Xiangling', imgName: 'New_Years_Cheer_Icon',imgName2:'XianglingCostumeWinter', have: true, rarity: 4, status: 'available' },
  { name: 'Xingqiu', imgName: 'Bamboo_Rain_Icon',imgName2:'XingqiuCostumeBamboo', have: true, rarity: 4, status: 'available' }
  // Add more characters here
];

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

  characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchTerm);

      const matchesHave = !selectedFilters.have || (selectedFilters.have && c.have);
      const matchesWant = !selectedFilters.want || (selectedFilters.want && !c.have);
      const matchesStatus = !selectedFilters.new || (selectedFilters.new && c.status === 'new');

      return matchesSearch && matchesHave && matchesWant && matchesStatus;
    })
    .forEach(c => {
      const card = document.createElement('div');
      card.className = 'char-card';
      card.title = `${c.name} (${c.element}, ${c.rarity}★)`;

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'icon-wrapper';
      iconWrapper.style.background = c.rarity === 5
        ? 'linear-gradient(100deg, #7c4600ff, #ffa632cc)'
        : 'linear-gradient(135deg, #805292ff, #d9c3f3cc)';

      if (c.status === 'new') {
        const label = document.createElement('div');
        label.textContent = 'NEW';
        label.className = 'soon-label';
        iconWrapper.appendChild(label);
      }

      const img = document.createElement('img');
      img.className = 'char-icon';
      const imgSrcName = c.imgName || c.name;
      img.src = `../assets/outfit/Genshin/${imgSrcName}.webp`;
      img.alt = c.name;

      iconWrapper.appendChild(img);

      const label = document.createElement('div');
      label.textContent = c.name;

      card.appendChild(iconWrapper);
      card.appendChild(label);
      charListEl.appendChild(card);

      card.addEventListener('click', () => {
        const imgPath = `../assets/Sprite/Genshin/Outfit/UI_Costume_${c.imgName2}.png`;
        showPopup(imgPath, c.name);
      });
    });
}

// Unified single-select checkbox logic
document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', e => {
    const type = e.target.dataset.filter;
    const wasChecked = e.target.checked;

    // Reset all filters
    for (let key in selectedFilters) {
      selectedFilters[key] = false;
      document.querySelector(`[data-filter="${key}"]`).checked = false;
    }

    // Re-check only the one just clicked
    if (wasChecked) {
      selectedFilters[type] = true;
      e.target.checked = true;
    }

    renderList();
  });
});

// Search typing
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

renderList();
