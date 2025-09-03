const characters = [
  { name: 'Amber', imgName: 'Ambor', have: true, element: 'Pyro', rarity: 4, status: 'available' },
  { name: 'Xiao', have: true, element: 'Anemo', rarity: 5, status: 'available' },
  { name: 'Mona', have: true, element: 'Hydro', rarity: 5, status: 'available' },
  { name: 'Lisa', have: true, element: 'Electro', rarity: 4, status: 'available' },
  { name: 'Diluc', have: true, element: 'Pyro', rarity: 5, status: 'available' },
  { name: 'Albedo', have: false, element: 'Geo', rarity: 5, status: 'available', version: '4.5' },
  { name: 'Alhaitham', imgName: 'Alhatham', have: true, element: 'Dendro', rarity: 5, status: 'available' },
  { name: 'Arlecchino', have: false, element: 'Pyro', rarity: 5, status: 'available', version: '5.3' },
  { name: 'Ayaka', have: true, element: 'Cryo', rarity: 5, status: 'available' },
  { name: 'Ayato', have: false, element: 'Hydro', rarity: 5, status: 'available', version: '5.6' },
  { name: 'Baizhu', imgName: 'Baizhuer', have: false, element: 'Dendro', rarity: 5, status: 'available', version: '5.3' },
  { name: 'Barbara', have: true, element: 'Hydro', rarity: 4, status: 'available' },
  { name: 'Beidou', have: true, element: 'Electro', rarity: 4, status: 'available' },
  { name: 'Bennett', have: true, element: 'Pyro', rarity: 4, status: 'available' },
  { name: 'Candace', have: true, element: 'Hydro', rarity: 4, status: 'available' },
  { name: 'Charlotte', have: true, element: 'Cryo', rarity: 4, status: 'available' },
  { name: 'Chasca', have: true, element: 'Anemo', rarity: 5, status: 'available' },
  { name: 'Chevreuse', have: true, element: 'Pyro', rarity: 4, status: 'available' },
  { name: 'Chiori', have: false, element: 'Geo', rarity: 5, status: 'available', version: '5.6' },
  { name: 'Citlali', have: false, element: 'Cryo', rarity: 5, status: 'available', version: '5.8' },
  { name: 'Dahlia', have: false, element: 'Hydro', rarity: 4, status: 'available', version: '5.7' },
  { name: 'Yelan', have: false, element: 'Hydro', rarity: 5, status: 'available', version: '4.8' },
  { name: 'Itto', have: false, element: 'Geo', rarity: 5, status: 'available', version: '5.6' },
  { name: 'Sigewinne', have: false, element: 'Hydro', rarity: 5, status: 'available', version: '5.4' },
  { name: 'Nilou', have: false, element: 'Hydro', rarity: 5, status: 'available', version: '4.8' },
  { name: 'Mavuika', have: false, element: 'Pyro', rarity: 5, status: 'available', version: '5.7' },
  { name: 'Varesa', have: false, element: 'Electro', rarity: 5, status: 'available', version: '5.5' },
  { name: 'Emilie', have: false, element: 'Dendro', rarity: 5, status: 'available', version: '5.7' },
  { name: 'Escoffier', have: false, element: 'Cryo', rarity: 5, status: 'available', version: '5.6' },
  { name: 'Eula', have: false, element: 'Cryo', rarity: 5, status: 'available', version: '4.5' },
  { name: 'Ineffa', have: false, element: 'Electro', rarity: 5, status: 'new', version: '5.8' },
  { name: 'Shenhe', have: false, element: 'Cryo', rarity: 5, status: 'available', version: '5.7' },
  { name: 'Wriothesley', have: false, element: 'Cryo', rarity: 5, status: 'available', version: '5.4' },
  { name: 'Yun Jin', imgName: 'Yunjin', have: true, element: 'Geo', rarity: 4, status: 'available' },
  { name: 'Kirara', imgName: 'Momoka', have: true, element: 'Dendro', rarity: 4, status: 'available' },
  { name: 'Yanfei', imgName: 'Feiyan', have: true, element: 'Pyro', rarity: 4, status: 'available' },
  { name: 'Heizou', imgName: 'Heizo', have: true, element: 'Anemo', rarity: 4, status: 'available' },
  { name: 'Lynette', imgName: 'Linette', have: true, element: 'Anemo', rarity: 4, status: 'available' },
  { name: 'Lyney', imgName: 'Liney', have: true, element: 'Pyro', rarity: 5, status: 'available' },
  { name: 'Xianyun', imgName: 'Liuyun', have: true, element: 'Anemo', rarity: 5, status: 'available' },
  { name: 'Thoma', imgName: 'Tohma', have: true, element: 'Anemo', rarity: 5, status: 'available' },
  { name: 'Chongyun', have: true, element: 'Cryo', rarity: 4, status: 'available' },
  { name: 'Clorinde', have: true, element: 'Electro', rarity: 5, status: 'available' },
  { name: 'Collei', have: true, element: 'Dendro', rarity: 4, status: 'available' },
  { name: 'Cyno', have: true, element: 'Electro', rarity: 5, status: 'available' },
  { name: 'Dehya', have: true, element: 'Pyro', rarity: 5, status: 'available' },
  { name: 'Diona', have: true, element: 'Cryo', rarity: 4, status: 'available' },
  { name: 'Dori', have: true, element: 'Electro', rarity: 4, status: 'available' },
  { name: 'Faruzan', have: true, element: 'Anemo', rarity: 4, status: 'available' },
  { name: 'Fischl', have: true, element: 'Electro', rarity: 4, status: 'available' },
  { name: 'Freminet', have: true, element: 'Cryo', rarity: 4, status: 'available' },
  { name: 'Furina', have: true, element: 'Hydro', rarity: 5, status: 'available' },
  { name: 'Gaming', have: true, element: 'Pyro', rarity: 4, status: 'available' },
  { name: 'Ganyu', have: true, element: 'Cryo', rarity: 5, status: 'available' },
  { name: 'Gorou', have: true, element: 'Geo', rarity: 4, status: 'available' },
  { name: 'Iansan', have: true, element: 'Electro', rarity: 4, status: 'available' },
  { name: 'Kachina', have: true, element: 'Geo', rarity: 4, status: 'available' },
  { name: 'Kaeya', have: true, element: 'Cryo', rarity: 4, status: 'available' },
  { name: 'Kaveh', have: true, element: 'Dendro', rarity: 4, status: 'available' },
  { name: 'Kazuha', have: true, element: 'Anemo', rarity: 5, status: 'available' },
  { name: 'Keqing', have: true, element: 'Electro', rarity: 5, status: 'available' },
  { name: 'Kinich', have: true, element: 'Dendro', rarity: 5, status: 'available' },
  { name: 'Ifa', have: true, element: 'Anemo', rarity: 4, status: 'available' },
  { name: 'Klee', have: false, element: 'Pyro', rarity: 5, status: 'available', version: '4.5' },
  { name: 'Kokomi', have: true, element: 'Hydro', rarity: 5, status: 'available' },
  { name: 'Layla', have: true, element: 'Hydro', rarity: 4, status: 'available' },
  { name: 'Mika', have: true, element: 'Cryo', rarity: 4, status: 'available' },
  { name: 'Mualani', have: true, element: 'Hydro', rarity: 5, status: 'available' },
  { name: 'Nahida', have: true, element: 'Dendro', rarity: 5, status: 'available' },
  { name: 'Navia', have: true, element: 'Geo', rarity: 5, status: 'available' },
  { name: 'Neuvillette', have: true, element: 'Hydro', rarity: 5, status: 'available' },
  { name: 'Ningguang', have: true, element: 'Geo', rarity: 4, status: 'available' },
  { name: 'Qiqi', have: true, element: 'Cryo', rarity: 5, status: 'available' },
  { name: 'Rosaria', have: true, element: 'Cryo', rarity: 4, status: 'available' },
  { name: 'Sethos', have: true, element: 'Electro', rarity: 4, status: 'available' },
  { name: 'Wanderer', have: true, element: 'Anemo', rarity: 5, status: 'available' },
  { name: 'Hu Tao', imgName: 'Hutao', have: true, element: 'Pyro', rarity: 5, status: 'available' },
  { name: 'Noelle', imgName: 'Noel', have: true, element: 'Geo', rarity: 4, status: 'available' },
  { name: 'Ororon', imgName: 'Olorun', have: true, element: 'Electro', rarity: 4, status: 'available' },
  { name: 'Raiden Shogun', imgName: 'Shougun', have: true, element: 'Electro', rarity: 5, status: 'available' },
  { name: 'Jean', imgName: 'Qin', have: true, element: 'Anemo', rarity: 5, status: 'available' },
  { name: 'Skirk', imgName: 'SkirkNew', have: false, element: 'Cryo', rarity: 5, status: 'available', version: '5.7' },
  { name: 'Yae Miko', imgName: 'Yae', have: false, element: 'Electro', rarity: 5, status: 'available', version: '5.6' },
  { name: 'Lan Yan', imgName: 'Lanyan', have: true, element: 'Anemo', rarity: 4, status: 'available',},
  { name: 'Mizuki', have: false, element: 'Anemo', rarity: 5, status: 'available', version: '5.4' },
  { name: 'Razor', have: true, element: 'Electro', rarity: 4, status: 'available' },
  { name: 'Sara', have: true, element: 'Electro', rarity: 4, status: 'available' },
  { name: 'Sayu', have: true, element: 'Anemo', rarity: 4, status: 'available' },
  { name: 'Zhongli', have: true, element: 'Geo', rarity: 5, status: 'available' },
  { name: 'Xiangling', have: true, element: 'Pyro', rarity: 4, status: 'available' },
  { name: 'Xingqiu', have: true, element: 'Hydro', rarity: 4, status: 'available' },
  { name: 'Xinyan', have: true, element: 'Pyro', rarity: 4, status: 'available' },
  { name: 'Yaoyao', have: true, element: 'Dendro', rarity: 4, status: 'available' },
  { name: 'Yoimiya', have: true, element: 'Pyro', rarity: 5, status: 'available' },
  { name: 'Tartaglia', have: true, element: 'Hydro', rarity: 5, status: 'available' },
  { name: 'Xilonen', have: true, element: 'Geo', rarity: 5, status: 'available' },
  { name: 'Venti', have: true, element: 'Anemo', rarity: 5, status: 'available' },
  { name: 'Tighnari', have: true, element: 'Dendro', rarity: 5, status: 'available' },
  { name: 'Shinobu', have: true, element: 'Electro', rarity: 4, status: 'available' },
  { name: 'Sucrose', have: true, element: 'Anemo', rarity: 4, status: 'available' },
  
  { name: 'Aino', have: false, element: 'Hydro', rarity: 4, status: 'soon', version: '6.0' },
  { name: 'Flins', have: false, element: 'Electro', rarity: 5, status: 'soon', version: '6.0' },
  { name: 'Lauma', have: false, element: 'Dendro', rarity: 5, status: 'soon', version: '6.0' },
  
  
  // Add more characters here
];

const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');

let selectedFilters = {
  have: false,
  want: false,
  new: false,
  soon: false,
};

function renderList() {
  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchTerm);

      const hasHave = selectedFilters.have;
      const hasWant = selectedFilters.want;
      const hasNew = selectedFilters.new;
      const hasSoon = selectedFilters.soon;

      const matchesHave = !hasHave || (hasHave && c.have);
      const matchesWant = !hasWant || (hasWant && !c.have);

      // Matches 'new' or 'soon' statuses when `new` is selected
      const matchesStatus = (!hasNew && !hasSoon) || 
                            (hasNew && (c.status === 'new' || c.status === 'soon')) || 
                            (hasSoon && c.status === 'soon');

      return matchesSearch && matchesHave && matchesWant && matchesStatus;
    })
    .forEach(c => {
      const card = document.createElement('div');
      card.className = 'char-card';
      card.title = `${c.name} (${c.element}, ${c.rarity}★)`;

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'icon-wrapper';
      if (c.rarity === 5) {
        iconWrapper.style.background = 'linear-gradient(100deg, #7c4600ff, #ffa632cc)';
      } else {
        iconWrapper.style.background = 'linear-gradient(135deg, #805292ff, #d9c3f3cc)';
      }

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
      const imgSrcName = c.imgName ? c.imgName : c.name;
      img.src = `../assets/charaid/Genshin/UI_AvatarIcon_${imgSrcName}.png`;
      img.alt = c.name;

      const elementImg = document.createElement('img');
      elementImg.className = 'element-icon';
      elementImg.src = `../assets/element/Genshin/${c.element}.png`;
      elementImg.alt = c.element;

      iconWrapper.appendChild(img);
      iconWrapper.appendChild(elementImg);

      const label = document.createElement('div');
      label.textContent = c.name;

      card.appendChild(iconWrapper);
      card.appendChild(label);
      charListEl.appendChild(card);

      card.addEventListener('click', () => {
        const imgName = c.imgName ? c.imgName : c.name;
        const imgPath = `../assets/Sprite/Genshin/UI_Gacha_AvatarImg_${imgName}.png`;
        showPopup(imgPath, c.name);
      });
    });
}

// Setup filter logic
searchInput.addEventListener('input', renderList);
filterBtn.addEventListener('click', () => {
  filterPopup.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) {
    filterPopup.classList.add('hidden');
  }
});

// ✅ SINGLE unified logic to allow only ONE active filter at a time
document.querySelectorAll('.filter-checkbox').forEach(option => {
  option.addEventListener('change', (e) => {
    const type = e.target.dataset.filter;
    const wasChecked = e.target.checked;

    // Allow `new` and `soon` to be independently checked.
    if (type === 'new' || type === 'soon') {
      selectedFilters[type] = wasChecked;
    } else {
      // Reset `have` and `want` filters to allow only one active at a time.
      for (let key in selectedFilters) {
        if (key !== 'new' && key !== 'soon') {
          selectedFilters[key] = false;
          document.querySelector(`[data-filter="${key}"]`).checked = false;
        }
      }

      if (wasChecked) {
        selectedFilters[type] = true;
        e.target.checked = true;
      }
    }

    filterPopup.classList.add('hidden');

    renderList();
  });
});

renderList();
// Function to show popup sprite
function showPopup(imgPath, altText) {
  const popup = document.getElementById('spritePopup');
  const popupImg = document.getElementById('spritePopupImg');

  popupImg.src = imgPath;
  popupImg.alt = altText;
  popup.style.display = 'flex';
}

// Close popup on clicking ✕
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('spritePopup').style.display = 'none';
});

// Close popup when clicking outside the image
const popup = document.getElementById('spritePopup');

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

