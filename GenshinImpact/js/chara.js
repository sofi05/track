const characters = [
  { name: 'Amber', imgName: 'Ambor', have: true, element: 'Pyro', rarity: 4, region:['mond'], gender:'f',  status: 'available' },
  { name: 'Xiao', have: true, element: 'Anemo', rarity: 5, region:['liy'], gender:'m',  status: 'available' },
  { name: 'Mona', have: true, element: 'Hydro', rarity: 5, region:['mond'], gender:'f',  status: 'available' },
  { name: 'Lisa', have: true, element: 'Electro', rarity: 4, region:['mond'], gender:'f',  status: 'available' },
  { name: 'Diluc', have: true, element: 'Pyro', rarity: 5, region:['mond'], gender:'m',  status: 'available' },
  { name: 'Albedo', have: false, element: 'Geo', rarity: 5, region:['mond', 'unk'], gender:'m',  status: 'available', version: '4.5' },
  { name: 'Alhaitham', imgName: 'Alhatham', have: true, element: 'Dendro', rarity: 5, region:['sum'], gender:'m',  status: 'available' },
  { name: 'Arlecchino', have: false, element: 'Pyro', rarity: 5, region:['font', 'unk'], gender:'f',  status: 'available', version: '5.3' },
  { name: 'Ayaka', have: true, element: 'Cryo', rarity: 5, region:['ina'], gender:'f',  status: 'available' },
  { name: 'Ayato', have: false, element: 'Hydro', rarity: 5, region:['ina'], gender:'m',  status: 'available', version: '5.6' },
  { name: 'Baizhu', imgName: 'Baizhuer', have: false, element: 'Dendro', rarity: 5, region:['liy'], gender:'m',  status: 'available', version: '5.3' },
  { name: 'Barbara', have: true, element: 'Hydro', rarity: 4, region:['mond'], gender:'f',  status: 'available' },
  { name: 'Beidou', have: true, element: 'Electro', rarity: 4, region:['liy'], gender:'f',  status: 'available' },
  { name: 'Bennett', have: true, element: 'Pyro', rarity: 4, region:['mond','nat'], gender:'m',  status: 'available' },
  { name: 'Candace', have: true, element: 'Hydro', rarity: 4, region:['sum'], gender:'f',  status: 'available' },
  { name: 'Charlotte', have: true, element: 'Cryo', rarity: 4, region:['font'], gender:'f',  status: 'available' },
  { name: 'Chasca', have: true, element: 'Anemo', rarity: 5, region:['nat'], gender:'f',  status: 'available' },
  { name: 'Chevreuse', have: true, element: 'Pyro', rarity: 4, region:['font'], gender:'f',  status: 'available' },
  { name: 'Chiori', have: false, element: 'Geo', rarity: 5,  region:['ina','font'], gender:'f', status: 'available', version: '5.6' },
  { name: 'Citlali', have: false, element: 'Cryo', rarity: 5,  region:['nat'], gender:'f', status: 'available', version: '5.8' },
  { name: 'Dahlia', have: false, element: 'Hydro', rarity: 4, region:['mond'], gender:'m',  status: 'available', version: '5.7' },
  { name: 'Yelan', have: false, element: 'Hydro', rarity: 5, region:['liy'], gender:'f',  status: 'available', version: '4.8' },
  { name: 'Itto', have: false, element: 'Geo', rarity: 5, region:['ina'], gender:'m',  status: 'available', version: '5.6' },
  { name: 'Sigewinne', have: false, element: 'Hydro', rarity: 5, region:['font'], gender:'f',  status: 'available', version: '5.4' },
  { name: 'Nilou', have: false, element: 'Hydro', rarity: 5, region:['sum'], gender:'f',  status: 'available', version: '4.8' },
  { name: 'Mavuika', have: false, element: 'Pyro', rarity: 5, region:['nat'], gender:'f',  status: 'available', version: '5.7' },
  { name: 'Varesa', have: false, element: 'Electro', rarity: 5, region:['nat'], gender:'f',  status: 'available', version: '5.5' },
  { name: 'Emilie', have: false, element: 'Dendro', rarity: 5, region:['font'], gender:'f',  status: 'available', version: '5.7' },
  { name: 'Escoffier', have: false, element: 'Cryo', rarity: 5, region:['font'], gender:'f',  status: 'available', version: '5.6' },
  { name: 'Eula', have: false, element: 'Cryo', rarity: 5, region:['mond'], gender:'f',  status: 'available', version: '4.5' },
  { name: 'Ineffa', have: false, element: 'Electro', rarity: 5, region:['nat','snez'], gender:'f',  status: 'new', version: '5.8' },
  { name: 'Shenhe', have: false, element: 'Cryo', rarity: 5, region:['liy'], gender:'f',  status: 'available', version: '5.7' },
  { name: 'Wriothesley', have: false, element: 'Cryo', rarity: 5, region:['font'], gender:'m',  status: 'available', version: '5.4' },
  { name: 'Yun Jin', imgName: 'Yunjin', have: true, element: 'Geo', rarity: 4, region:['liy'], gender:'f',  status: 'available' },
  { name: 'Kirara', imgName: 'Momoka', have: true, element: 'Dendro', rarity: 4, region:['ina'], gender:'f',  status: 'available' },
  { name: 'Yanfei', imgName: 'Feiyan', have: true, element: 'Pyro', rarity: 4, region:['liy'], gender:'f',  status: 'available' },
  { name: 'Heizou', imgName: 'Heizo', have: true, element: 'Anemo', rarity: 4, region:['ina'], gender:'m',  status: 'available' },
  { name: 'Lynette', imgName: 'Linette', have: true, element: 'Anemo', rarity: 4, region:['font'], gender:'f',  status: 'available' },
  { name: 'Lyney', imgName: 'Liney', have: true, element: 'Pyro', rarity: 5, region:['font'], gender:'m',  status: 'available' },
  { name: 'Xianyun', imgName: 'Liuyun', have: true, element: 'Anemo', rarity: 5, region:['liy'], gender:'f',  status: 'available' },
  { name: 'Thoma', imgName: 'Tohma', have: true, element: 'Anemo', rarity: 5, region:['mond','ina'], gender:'m',  status: 'available' },
  { name: 'Chongyun', have: true, element: 'Cryo', rarity: 4, region:['liy'], gender:'m',  status: 'available' },
  { name: 'Clorinde', have: true, element: 'Electro', rarity: 5, region:['font'], gender:'f',  status: 'available' },
  { name: 'Collei', have: true, element: 'Dendro', rarity: 4, region:['sum'], gender:'f',  status: 'available' },
  { name: 'Cyno', have: true, element: 'Electro', rarity: 5, region:['sum'], gender:'m',  status: 'available' },
  { name: 'Dehya', have: true, element: 'Pyro', rarity: 5, region:['sum'], gender:'f',  status: 'available' },
  { name: 'Diona', have: true, element: 'Cryo', rarity: 4, region:['mond'], gender:'f',  status: 'available' },
  { name: 'Dori', have: true, element: 'Electro', rarity: 4, region:['sum'], gender:'f',  status: 'available' },
  { name: 'Faruzan', have: true, element: 'Anemo', rarity: 4, region:['sum'], gender:'f',  status: 'available' },
  { name: 'Fischl', have: true, element: 'Electro', rarity: 4, region:['mond'], gender:'f',  status: 'available' },
  { name: 'Freminet', have: true, element: 'Cryo', rarity: 4, region:['font'], gender:'m',  status: 'available' },
  { name: 'Furina', have: true, element: 'Hydro', rarity: 5, region:['font'], gender:'f',  status: 'available' },
  { name: 'Gaming', have: true, element: 'Pyro', rarity: 4, region:['liy'], gender:'m',  status: 'available' },
  { name: 'Ganyu', have: true, element: 'Cryo', rarity: 5, region:['liy'], gender:'f',  status: 'available' },
  { name: 'Gorou', have: true, element: 'Geo', rarity: 4, region:['ina'], gender:'m',  status: 'available' },
  { name: 'Iansan', have: true, element: 'Electro', rarity: 4, region:['nat'], gender:'f',  status: 'available' },
  { name: 'Kachina', have: true, element: 'Geo', rarity: 4, region:['nat'], gender:'f',  status: 'available' },
  { name: 'Kaeya', have: true, element: 'Cryo', rarity: 4, region:['mond','khae'], gender:'m',  status: 'available' },
  { name: 'Kaveh', have: true, element: 'Dendro', rarity: 4, region:['sum'], gender:'m',  status: 'available' },
  { name: 'Kazuha', have: true, element: 'Anemo', rarity: 5, region:['ina'], gender:'m',  status: 'available' },
  { name: 'Keqing', have: true, element: 'Electro', rarity: 5, region:['liy'], gender:'f',  status: 'available' },
  { name: 'Kinich', have: true, element: 'Dendro', rarity: 5, region:['nat'], gender:'m',  status: 'available' },
  { name: 'Ifa', have: true, element: 'Anemo', rarity: 4, region:['nat'], gender:'m',  status: 'available' },
  { name: 'Klee', have: false, element: 'Pyro', rarity: 5, region:['mond'], gender:'f',  status: 'available', version: '4.5' },
  { name: 'Kokomi', have: true, element: 'Hydro', rarity: 5, region:['ina'], gender:'f',  status: 'available' },
  { name: 'Layla', have: true, element: 'Hydro', rarity: 4, region:['sum'], gender:'f',  status: 'available' },
  { name: 'Mika', have: true, element: 'Cryo', rarity: 4, region:['mond'], gender:'m',  status: 'available' },
  { name: 'Mualani', have: true, element: 'Hydro', rarity: 5, region:['nat'], gender:'f',  status: 'available' },
  { name: 'Nahida', have: true, element: 'Dendro', rarity: 5, region:['sum'], gender:'f',  status: 'available' },
  { name: 'Navia', have: true, element: 'Geo', rarity: 5, region:['font'], gender:'f',  status: 'available' },
  { name: 'Neuvillette', have: true, element: 'Hydro', rarity: 5, region:['font'], gender:'m',  status: 'available' },
  { name: 'Ningguang', have: true, element: 'Geo', rarity: 4, region:['liy'], gender:'f',  status: 'available' },
  { name: 'Qiqi', have: true, element: 'Cryo', rarity: 5, region:['liy'], gender:'f',  status: 'available' },
  { name: 'Rosaria', have: true, element: 'Cryo', rarity: 4, region:['mond'], gender:'f',  status: 'available' },
  { name: 'Sethos', have: true, element: 'Electro', rarity: 4, region:['sum'], gender:'m',  status: 'available' },
  { name: 'Wanderer', have: true, element: 'Anemo', rarity: 5, region:['ina','sum'], gender:'m',  status: 'available' },
  { name: 'Hu Tao', imgName: 'Hutao', have: true, element: 'Pyro', rarity: 5, region:['liy'], gender:'f',  status: 'available' },
  { name: 'Noelle', imgName: 'Noel', have: true, element: 'Geo', rarity: 4, region:['mond'], gender:'f',  status: 'available' },
  { name: 'Ororon', imgName: 'Olorun', have: true, element: 'Electro', rarity: 4, region:['nat'], gender:'m',  status: 'available' },
  { name: 'Raiden Shogun', imgName: 'Shougun', have: true, element: 'Electro', rarity: 5, region:['ina'], gender:'f',  status: 'available' },
  { name: 'Jean', imgName: 'Qin', have: true, element: 'Anemo', rarity: 5, region:['mond'], gender:'f',  status: 'available' },
  { name: 'Skirk', imgName: 'SkirkNew', have: false, element: 'Cryo', rarity: 5, region:['unk'], gender:'f',  status: 'available', version: '5.7' },
  { name: 'Yae Miko', imgName: 'Yae', have: false, element: 'Electro', rarity: 5, region:['ina'], gender:'f',  status: 'available', version: '5.6' },
  { name: 'Lan Yan', imgName: 'Lanyan', have: true, element: 'Anemo', rarity: 4, region:['liy'], gender:'f',  status: 'available',},
  { name: 'Mizuki', have: false, element: 'Anemo', rarity: 5, region:['ina'], gender:'f',  status: 'available', version: '5.4' },
  { name: 'Razor', have: true, element: 'Electro', rarity: 4, region:['mond'], gender:'m',  status: 'available' },
  { name: 'Sara', have: true, element: 'Electro', rarity: 4, region:['ina'], gender:'f',  status: 'available' },
  { name: 'Sayu', have: true, element: 'Anemo', rarity: 4, region:['ina'], gender:'f',  status: 'available' },
  { name: 'Zhongli', have: true, element: 'Geo', rarity: 5, region:['liy'], gender:'m',  status: 'available' },
  { name: 'Xiangling', have: true, element: 'Pyro', rarity: 4, region:['liy'], gender:'f',  status: 'available' },
  { name: 'Xingqiu', have: true, element: 'Hydro', rarity: 4, region:['liy'], gender:'m',  status: 'available' },
  { name: 'Xinyan', have: true, element: 'Pyro', rarity: 4, region:['liy'], gender:'f',  status: 'available' },
  { name: 'Yaoyao', have: true, element: 'Dendro', rarity: 4, region:['liy'], gender:'f',  status: 'available' },
  { name: 'Yoimiya', have: true, element: 'Pyro', rarity: 5, region:['ina'], gender:'f',  status: 'available' },
  { name: 'Tartaglia', have: true, element: 'Hydro', rarity: 5, region:['snez'], gender:'m',  status: 'available' },
  { name: 'Xilonen', have: true, element: 'Geo', rarity: 5, region:['nat'], gender:'f',  status: 'available' },
  { name: 'Venti', have: true, element: 'Anemo', rarity: 5, region:['mond'], gender:'m',  status: 'available' },
  { name: 'Tighnari', have: true, element: 'Dendro', rarity: 5, region:['sum'], gender:'m',  status: 'available' },
  { name: 'Shinobu', have: true, element: 'Electro', rarity: 4, region:['ina'], gender:'f',  status: 'available' },
  { name: 'Sucrose', have: true, element: 'Anemo', rarity: 4, region:['mond'], gender:'f',  status: 'available' },
  
  { name: 'Aino', have: false, element: 'Hydro', rarity: 4, region:['snez'], gender:'f',  status: 'soon', version: '6.0' },
  { name: 'Flins', have: false, element: 'Electro', rarity: 5, region:['snez'], gender:'m',  status: 'soon', version: '6.0' },
  { name: 'Lauma', have: false, element: 'Dendro', rarity: 5, region:['snez'], gender:'f',  status: 'soon', version: '6.0' },
  
  
  // Add more characters here
];

const charListEl = document.getElementById('charList');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');

let selectedFilters = {
  have: null,
  newStatus: {
    new: false,
    soon: false,
  },
  element: null,
  rarity: null,
  region: null, // ⬅️ Changed from Set() to single value
  gender: null,
  group: null,
};

// Toggle dropdown sections
document.querySelectorAll('.filter-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const allButtons = document.querySelectorAll('.filter-toggle');
    const allOptions = document.querySelectorAll('.filter-options');

    allButtons.forEach(btn => {
      if (btn !== button) btn.classList.remove('active');
    });

    allOptions.forEach(opt => {
      if (opt !== button.nextElementSibling) opt.classList.remove('visible');
    });

    // Toggle current one
    button.classList.toggle('active');
    const options = button.nextElementSibling;
    if (options) options.classList.toggle('visible');
  });
});


function renderList() {
  charListEl.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();

  characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchTerm);

      // Filter by 'have'
      if (selectedFilters.have !== null) {
        if (selectedFilters.have && !c.have) return false;
        if (!selectedFilters.have && c.have) return false;
      }

      // Filter by newStatus (new or soon)
      const wantsNew = selectedFilters.newStatus.new;
      const wantsSoon = selectedFilters.newStatus.soon;

      if (wantsNew || wantsSoon) {
        if (wantsNew && wantsSoon) {
          if (!(c.status === 'new' || c.status === 'soon')) return false;
        } else if (wantsNew && c.status !== 'new') {
          return false;
        } else if (wantsSoon && c.status !== 'soon') {
          return false;
        }
      }

      // Filter by element
      if (selectedFilters.element && c.element !== selectedFilters.element) return false;

      // Filter by rarity (string comparison)
      if (selectedFilters.rarity && c.rarity.toString() !== selectedFilters.rarity) return false;

      // ✅ Filter by region (single select)
      if (selectedFilters.region) {
        if (!Array.isArray(c.region)) return false;
        if (!c.region.includes(selectedFilters.region)) return false;
      }

      // Filter by gender
      if (selectedFilters.gender && c.gender !== selectedFilters.gender) return false;

      // Filter by group
      if (selectedFilters.group && c.group !== selectedFilters.group) return false;

      return matchesSearch;
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

// ===== Filter Listeners with "toggle to unselect" support =====

// Utility: Toggle radio as deselectable
function setupToggleableRadio(groupName, filterKey) {
  const inputs = document.querySelectorAll(`input[name="${groupName}"]`);
  inputs.forEach(input => {
    input.addEventListener('click', e => {
      const value = e.target.value;

      // Special handling for "have" radio buttons (convert to boolean)
      const parsedValue = (filterKey === "have")
        ? (value === "true")
        : value;

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

// 1) Have
setupToggleableRadio("have", "have");

// 2) Element
setupToggleableRadio("element", "element");

// 3) Rarity
setupToggleableRadio("rarity", "rarity");

// 4) Gender
setupToggleableRadio("gender", "gender");

// ✅ 5) Region (now single-select)
setupToggleableRadio("region", "region");

// 6) NewStatus (checkbox - controls both 'new' and 'soon')
document.querySelectorAll('input[name="newStatus"]').forEach(input => {
  input.addEventListener('change', e => {
    const isChecked = e.target.checked;
    selectedFilters.newStatus.new = isChecked;
    selectedFilters.newStatus.soon = isChecked;
    renderList();
  });
});

// Group (if applicable)
setupToggleableRadio("group", "group");

// ============ Filter popup toggle ============
filterBtn.addEventListener('click', () => {
  filterPopup.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) {
    filterPopup.classList.add('hidden');
  }
});

// ============ Sprite popup ============
function showPopup(imgPath, altText) {
  const popup = document.getElementById('spritePopup');
  const popupImg = document.getElementById('spritePopupImg');

  popupImg.src = imgPath;
  popupImg.alt = altText;
  popup.style.display = 'flex';
}

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('spritePopup').style.display = 'none';
});

const popup = document.getElementById('spritePopup');
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// ============ Search input ============
searchInput.addEventListener('input', () => {
  renderList();
});

// ============ Initial render ============
renderList();
