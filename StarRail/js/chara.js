const characters = [
{ name: 'Cerydra', imgName: '1412', have: false, element: 'wind', group:'harm', gender:'f', world:['amp'], rarity: 5,  status: 'new', version: '3.5' },
{ name: 'Hysilens', imgName: '1410', have: false, element: 'physical', group:'nihi', gender:'f', world:['amp'], rarity: 5,  status: 'new', version: '3.5' },
{ name: 'Phainon', imgName: '1408', have: true, element: 'physical', group:'dest', gender:'m', world:['amp'], rarity: 5,  status: 'available' },
{ name: 'Cipher', imgName: '1406', have: false, element: 'quantum', group:'nihi', gender:'f', world:['amp'], rarity: 5,  status: 'available', version: '3.3' },
{ name: 'Hyacine', imgName: '1409', have: true, element: 'wind', group:'reme', gender:'f', world:['amp'], rarity: 5,  status: 'available' },
{ name: 'Anaxa', imgName: '1405', have: false, element: 'wind', group:'eru', gender:'m', world:['amp'], rarity: 5,  status: 'available', version: '3.2' },
{ name: 'Castorice', imgName: '1407', have: true, element: 'quantum', group:'reme', gender:'f', world:['amp'], rarity: 5,  status: 'available' },
{ name: 'Mydei', imgName: '1404', have: false, element: 'imaginary', group:'dest', gender:'m', world:['amp'], rarity: 5,  status: 'available', version: '3.1' },
{ name: 'Tribbie', imgName: '1403', have: false, element: 'quantum', group:'harm', gender:'f', world:['amp'], rarity: 5,  status: 'available', version: '3.4' },
{ name: 'Aglaea', imgName: '1402', have: false, element: 'thunder', group:'reme', gender:'f', world:['amp'], rarity: 5,  status: 'available', version: '3.3' },
{ name: 'The Herta', imgName: '1401', have: true, element: 'ice', group:'eru', gender:'f', world:['hss'], rarity: 5,  status: 'available' },
{ name: 'Fugue', imgName: '1225', have: false, element: 'fire', group:'nihi', gender:'f', world:['txl'], rarity: 5,  status: 'available', version: '3.2' },
{ name: 'Sunday', imgName: '1313', have: false, element: 'imaginary', group:'harm', gender:'m', world:['ae','pena'], rarity: 5,  status: 'available', version: '3.4' },
{ name: 'Rappa', imgName: '1317', have: false, element: 'imaginary', group:'eru', gender:'f', world:['ot'],rarity: 5,  status: 'available', version: '2.6' },
{ name: 'Lingsha', imgName: '1222', have: false, element: 'fire', group:'abun', gender:'f', world:['txl'], rarity: 5,  status: 'available', version: '3.0' },
{ name: 'Feixiao', imgName: '1220', have: false, element: 'wind', group:'hunt', gender:'f', world:['txl'], rarity: 5,  status: 'available', version: '3.0' },
{ name: 'Moze', imgName: '1223', have: true, element: 'thunder', group:'hunt', gender:'m', world:['txl'], rarity: 4,  status: 'available' },
{ name: 'Jiaoqiu', imgName: '1218', have: false, element: 'fire', group:'nihi', gender:'m', world:['txl'], rarity: 5,  status: 'available', version: '3.2' },
{ name: 'Yunli', imgName: '1221', have: false, element: 'physical', group:'dest', gender:'f', world:['txl'], rarity: 5,  status: 'available', version: '3.1' },
{ name: 'March 7th', imgName: '1224', have: false, element: 'imaginary', group:'hunt', gender:'f', world:['ae','txl'],rarity: 4, status: 'available', version: '2.1' },
{ name: 'Jade', imgName: '1314', have: false, element: 'quantum', group:'eru', gender:'f', world:['ot'],rarity: 5,  status: 'available', version: '3.0' },
{ name: 'Firefly', imgName: '1310', have: false, element: 'fire', group:'dest', gender:'f', world:['ot'],rarity: 5,  status: 'available', version: '3.4' },
{ name: 'Boothill', imgName: '1315', have: false, element: 'physical', group:'hunt', gender:'m', world:['ot'],rarity: 5,  status: 'available', version: '3.0' },
{ name: 'Robin', imgName: '1309', have: false, element: 'physical', group:'harm', gender:'f', world:['pena'],rarity: 5,  status: 'available', version: '3.0' },
{ name: 'Aventurine', imgName: '1304', have: true, element: 'imaginary', group:'prese', gender:'m', world:['ot'],rarity: 5,  status: 'available' },
{ name: 'Gallagher', imgName: '1301', have: true, element: 'fire', group:'abun', gender:'m', world:['pena'],rarity: 4,  status: 'available' },
{ name: 'Acheron', imgName: '1308', have: true, element: 'thunder', group:'nihi', gender:'f', world:['ot'],rarity: 5,  status: 'available' },
{ name: 'Misha', imgName: '1312', have: true, element: 'ice', group:'dest', gender:'m', world:['pena'],rarity: 4,  status: 'available' },
{ name: 'Sparkle', imgName: '1306', have: false, element: 'quantum', group:'harm', gender:'f', world:['ot'],rarity: 5,  status: 'available', version: '3.4' },
{ name: 'Black Swan', imgName: '1307', have: true, element: 'wind', group:'nihi', gender:'f', world:['ot'],rarity: 5,  status: 'available' },
{ name: 'Dr. Ratio', imgName: '1305', have: true, element: 'imaginary', group:'hunt', gender:'m', world:['ot'],rarity: 5,  status: 'available' },
{ name: 'Xueyi', imgName: '1214', have: true, element: 'quantum', group:'dest', gender:'f', world:['txl'], rarity: 4,  status: 'available' },
{ name: 'Ruan Mei', imgName: '1303', have: false, element: 'ice', group:'harm', gender:'f', world:['hss'],rarity: 5,  status: 'available', version: '3.2' },
{ name: 'Hanya', imgName: '1215', have: false, element: 'physical', group:'harm', gender:'f', world:['txl'], rarity: 4,  status: 'available', version: '3.4' },
{ name: 'Argenti', imgName: '1302', have: true, element: 'physical', group:'eru', gender:'m', world:['ot'],rarity: 5,  status: 'available' },
{ name: 'Huohuo', imgName: '1217', have: false, element: 'wind', group:'abun', gender:'f', world:['txl'], rarity: 5,  status: 'available', version: '3.1' },
{ name: 'Topaz & Numby', imgName: '1112', have: false, element: 'fire', group:'hunt', gender:'f', world:['ot'],rarity: 5,  status: 'available', version: '2.5' },
{ name: 'Guinaifen', imgName: '1210', have: false, element: 'fire', group:'nihi', gender:'f', world:['txl'], rarity: 4,  status: 'available', version: '3.1' },
{ name: 'Jingliu', imgName: '1212', have: false, element: 'ice', group:'dest', gender:'f', world:['txl'], rarity: 5,  status: 'available', version: '3.4' },
{ name: 'Lynx', imgName: '1110', have: true, element: 'quantum', group:'abun', gender:'f', world:['JVI'],rarity: 4,  status: 'available' },
{ name: 'Fu Xuan', imgName: '1208', have: false, element: 'quantum', group:'prese', gender:'f', world:['txl'], rarity: 5,  status: 'available', version: '3.2' },
{ name: 'Dan Heng • IL', imgName: '1213', have: true, element: 'imaginary', group:'dest', gender:'m', world:['ae','txl'],rarity: 5,  status: 'available' },
{ name: 'Kafka', imgName: '1005', have: true, element: 'thunder', group:'nihi', gender:'f', world:['ot'],rarity: 5,  status: 'available' },
{ name: 'Luka', imgName: '1111', have: true, element: 'physical', group:'nihi', gender:'m', world:['JVI'],rarity: 4,  status: 'available' },
{ name: 'Blade', imgName: '1205', have: true, element: 'wind', group:'dest', gender:'m', world:['txl'],rarity: 5,  status: 'available' },
{ name: 'Luocha', imgName: '1203', have: true, element: 'imaginary', group:'abun', gender:'m', world:['ot'],rarity: 5,  status: 'available' },
{ name: 'Yukong', imgName: '1207', have: true, element: 'imaginary', group:'harm', gender:'f', world:['txl'], rarity: 4,  status: 'available' },
{ name: 'Silver Wolf', imgName: '1006', have: true, element: 'quantum', group:'nihi', gender:'f', world:['ot'],rarity: 5,  status: 'available' },
{ name: 'Jing Yuan', imgName: '1204', have: false, element: 'thunder', group:'eru', gender:'m', world:['txl'], rarity: 5,  status: 'available', version: '2.7' },
{ name: 'March 7th', imgName: '1001', have: true, element: 'ice', group:'prese', gender:'f', world:['ae'],rarity: 4,  status: 'available' },
{ name: 'Dan Heng', imgName: '1002', have: true, element: 'wind', group:'hunt', gender:'m', world:['ae'],rarity: 4,  status: 'available' },
{ name: 'Himeko', imgName: '1003', have: true, element: 'fire', group:'eru', gender:'f', world:['ae'],rarity: 5,  status: 'available' },
{ name: 'Welt', imgName: '1004', have: false, element: 'imaginary', group:'nihi', gender:'m', world:['ae'],rarity: 5,  status: 'available', version: '3.2' },
{ name: 'Arlan', imgName: '1008', have: true, element: 'thunder', group:'dest', gender:'m', world:['hss'], rarity: 4,  status: 'available' },
{ name: 'Asta', imgName: '1009', have: true, element: 'fire', group:'harm', gender:'f', world:['hss'], rarity: 4,  status: 'available' },
{ name: 'Herta', imgName: '1013', have: true, element: 'ice', group:'eru', gender:'f', world:['hss'], rarity: 4,  status: 'available' },
{ name: 'Bronya', imgName: '1101', have: true, element: 'wind', group:'harm', gender:'f', world:['JVI'],rarity: 5,  status: 'available' },
{ name: 'Seele', imgName: '1102', have: true, element: 'quantum', group:'hunt', gender:'f', world:['JVI'],rarity: 5,  status: 'available' },
{ name: 'Serval', imgName: '1103', have: true, element: 'thunder', group:'eru', gender:'f', world:['JVI'],rarity: 4,  status: 'available' },
{ name: 'Gepard', imgName: '1104', have: true, element: 'ice', group:'prese', gender:'m', world:['JVI'],rarity: 5,  status: 'available' },
{ name: 'Natasha', imgName: '1105', have: true, element: 'physical', group:'abun', gender:'f', world:['JVI'],rarity: 4,  status: 'available' },
{ name: 'Pela', imgName: '1106', have: true, element: 'ice', group:'nihi', gender:'f', world:['JVI'],rarity: 4,  status: 'available' },
{ name: 'Clara', imgName: '1107', have: true, element: 'physical', group:'dest', gender:'f', world:['JVI'],rarity: 5,  status: 'available' },
{ name: 'Sampo', imgName: '1108', have: true, element: 'wind', group:'nihi', gender:'m', world:['JVI'],rarity: 4,  status: 'available' },
{ name: 'Hook', imgName: '1109', have: true, element: 'fire', group:'dest', gender:'f', world:['JVI'],rarity: 4,  status: 'available' },
{ name: 'Qingque', imgName: '1201', have: true, element: 'quantum', group:'eru', gender:'f', world:['txl'], rarity: 4,  status: 'available' },
{ name: 'Tingyun', imgName: '1202', have: true, element: 'thunder', group:'harm', gender:'f', world:['txl'], rarity: 4,  status: 'available' },
{ name: 'Sushang', imgName: '1206', have: true, element: 'physical', group:'hunt', gender:'f', world:['txl'], rarity: 4,  status: 'available' },
{ name: 'Yanqing', imgName: '1209', have: true, element: 'ice', group:'hunt', gender:'m', world:['txl'], rarity: 5,  status: 'available' },
{ name: 'Bailu', imgName: '1211', have: true, element: 'thunder', group:'abun', gender:'f', world:['txl'], rarity: 5,  status: 'available' },

{ name: 'Evernight', imgName: '1413', have: false, element: 'thunder', group:'reme', gender:'f', world:['ae','amp'],rarity: 5,  status: 'soon', version: '3.6' },
{ name: 'Dan Heng • PT', imgName: '1414', have: false, element: 'thunder', group:'prese', gender:'m', world:['ae','amp'],rarity: 5,  status: 'soon', version: '3.6' },

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
  region: new Set(),
  gender: null,
  group: null,
  world: null,
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

      // Filter by region (multi-select)
      if (selectedFilters.region.size > 0) {
        if (!Array.isArray(c.region)) return false; // Safety check

        if (!c.region.some(r => selectedFilters.region.has(r))) {
          return false;
        }
      }

      // Filter by gender
      if (selectedFilters.gender && c.gender !== selectedFilters.gender) return false;

      // Filter by group
      if (selectedFilters.group && c.group !== selectedFilters.group) return false;

        // Filter by world
      if (selectedFilters.world && !c.world.includes(selectedFilters.world)) return false;

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

      iconWrapper.style.background = c.rarity || 'linear-gradient(135deg, #444, #999)';

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
      img.src = `../assets/charaid/StarRail/${imgSrcName}.png`;
      img.alt = c.name;

      const elementImg = document.createElement('img');
      elementImg.className = 'element-icon';
      elementImg.src = `../assets/element/HSR/${c.element}.png`;
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
        const imgPath = `../assets/Sprite/StarRail/${imgName}.png`;
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

// 5) Region (multi-select checkboxes)
document.querySelectorAll('input[name="region"]').forEach(input => {
  input.addEventListener('change', e => {
    if (e.target.checked) {
      selectedFilters.region.add(e.target.value);
    } else {
      selectedFilters.region.delete(e.target.value);
    }
    renderList();
  });
});

// 6) NewStatus (checkbox - controls both 'new' and 'soon')
document.querySelectorAll('input[name="newStatus"]').forEach(input => {
  input.addEventListener('change', e => {
    const isChecked = e.target.checked;
    selectedFilters.newStatus.new = isChecked;
    selectedFilters.newStatus.soon = isChecked;
    renderList();
  });
});

//7
setupToggleableRadio("world", "world");

// ============ Filter popup toggle =============
filterBtn.addEventListener('click', () => {
  filterPopup.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!filterBtn.contains(e.target) && !filterPopup.contains(e.target)) {
    filterPopup.classList.add('hidden');
  }
});

// ============ Sprite popup =============
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

// ============ Search input =============
searchInput.addEventListener('input', () => {
  renderList();
});

setupToggleableRadio("group", "group");

// ============ Initial render ============
renderList();
