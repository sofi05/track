const characters = [
{ name: 'Cerydra', imgName: '1412', have: false, element: 'wind', rarity: 5,  status: 'new', version: '3.5' },
{ name: 'Hysilens', imgName: '1410', have: false, element: 'physical', rarity: 5,  status: 'new', version: '3.5' },
{ name: 'Phainon', imgName: '1408', have: true, element: 'physical', rarity: 5,  status: 'available' },
{ name: 'Cipher', imgName: '1406', have: false, element: 'quantum', rarity: 5,  status: 'available', version: '3.3' },
{ name: 'Hyacine', imgName: '1409', have: true, element: 'wind', rarity: 5,  status: 'available' },
{ name: 'Anaxa', imgName: '1405', have: false, element: 'wind', rarity: 5,  status: 'available', version: '3.2' },
{ name: 'Castorice', imgName: '1407', have: true, element: 'quantum', rarity: 5,  status: 'available' },
{ name: 'Mydei', imgName: '1404', have: false, element: 'imaginary', rarity: 5,  status: 'available', version: '3.1' },
{ name: 'Tribbie', imgName: '1403', have: false, element: 'quantum', rarity: 5,  status: 'available', version: '3.4' },
{ name: 'Aglaea', imgName: '1402', have: false, element: 'thunder', rarity: 5,  status: 'available', version: '3.3' },
{ name: 'The Herta', imgName: '1401', have: true, element: 'ice', rarity: 5,  status: 'available' },
{ name: 'Fugue', imgName: '1225', have: false, element: 'fire', rarity: 5,  status: 'available', version: '3.2' },
{ name: 'Sunday', imgName: '1313', have: false, element: 'imaginary', rarity: 5,  status: 'available', version: '3.4' },
{ name: 'Rappa', imgName: '1317', have: false, element: 'imaginary', rarity: 5,  status: 'available', version: '2.6' },
{ name: 'Lingsha', imgName: '1222', have: false, element: 'fire', rarity: 5,  status: 'available', version: '3.0' },
{ name: 'Feixiao', imgName: '1220', have: false, element: 'wind', rarity: 5,  status: 'available', version: '3.0' },
{ name: 'Moze', imgName: '1223', have: true, element: 'thunder', rarity: 4,  status: 'available' },
{ name: 'Jiaoqiu', imgName: '1218', have: false, element: 'fire', rarity: 5,  status: 'available', version: '3.2' },
{ name: 'Yunli', imgName: '1221', have: false, element: 'physical', rarity: 5,  status: 'available', version: '3.1' },
{ name: 'March 7th', imgName: '1224', have: false, element: 'imaginary', rarity: 4, status: 'available', version: '2.1' },
{ name: 'Jade', imgName: '1314', have: false, element: 'quantum', rarity: 5,  status: 'available', version: '3.0' },
{ name: 'Firefly', imgName: '1310', have: false, element: 'fire', rarity: 5,  status: 'available', version: '3.4' },
{ name: 'Boothill', imgName: '1315', have: false, element: 'physical', rarity: 5,  status: 'available', version: '3.0' },
{ name: 'Robin', imgName: '1309', have: false, element: 'physical', rarity: 5,  status: 'available', version: '3.0' },
{ name: 'Aventurine', imgName: '1304', have: true, element: 'imaginary', rarity: 5,  status: 'available' },
{ name: 'Gallagher', imgName: '1301', have: true, element: 'fire', rarity: 4,  status: 'available' },
{ name: 'Acheron', imgName: '1308', have: true, element: 'thunder', rarity: 5,  status: 'available' },
{ name: 'Misha', imgName: '1312', have: true, element: 'ice', rarity: 4,  status: 'available' },
{ name: 'Sparkle', imgName: '1306', have: false, element: 'quantum', rarity: 5,  status: 'available', version: '3.4' },
{ name: 'Black Swan', imgName: '1307', have: true, element: 'wind', rarity: 5,  status: 'available' },
{ name: 'Dr. Ratio', imgName: '1305', have: true, element: 'imaginary', rarity: 5,  status: 'available' },
{ name: 'Xueyi', imgName: '1214', have: true, element: 'quantum', rarity: 4,  status: 'available' },
{ name: 'Ruan Mei', imgName: '1303', have: false, element: 'ice', rarity: 5,  status: 'available', version: '3.2' },
{ name: 'Hanya', imgName: '1215', have: false, element: 'physical', rarity: 4,  status: 'available', version: '3.4' },
{ name: 'Argenti', imgName: '1302', have: true, element: 'physical', rarity: 5,  status: 'available' },
{ name: 'Huohuo', imgName: '1217', have: false, element: 'wind', rarity: 5,  status: 'available', version: '3.1' },
{ name: 'Topaz & Numby', imgName: '1112', have: false, element: 'fire', rarity: 5,  status: 'available', version: '2.5' },
{ name: 'Guinaifen', imgName: '1210', have: false, element: 'fire', rarity: 4,  status: 'available', version: '3.1' },
{ name: 'Jingliu', imgName: '1212', have: false, element: 'ice', rarity: 5,  status: 'available', version: '3.4' },
{ name: 'Lynx', imgName: '1110', have: true, element: 'quantum', rarity: 4,  status: 'available' },
{ name: 'Fu Xuan', imgName: '1208', have: false, element: 'quantum', rarity: 5,  status: 'available', version: '3.2' },
{ name: 'Dan Heng • IL', imgName: '1213', have: true, element: 'imaginary', rarity: 5,  status: 'available' },
{ name: 'Kafka', imgName: '1005', have: true, element: 'thunder', rarity: 5,  status: 'available' },
{ name: 'Luka', imgName: '1111', have: true, element: 'physical', rarity: 4,  status: 'available' },
{ name: 'Blade', imgName: '1205', have: true, element: 'wind', rarity: 5,  status: 'available' },
{ name: 'Luocha', imgName: '1203', have: true, element: 'imaginary', rarity: 5,  status: 'available' },
{ name: 'Yukong', imgName: '1207', have: true, element: 'imaginary', rarity: 4,  status: 'available' },
{ name: 'Silver Wolf', imgName: '1006', have: true, element: 'quantum', rarity: 5,  status: 'available' },
{ name: 'Jing Yuan', imgName: '1204', have: false, element: 'thunder', rarity: 5,  status: 'available', version: '2.7' },
{ name: 'March 7th', imgName: '1001', have: true, element: 'ice', rarity: 4,  status: 'available' },
{ name: 'Dan Heng', imgName: '1002', have: true, element: 'wind', rarity: 4,  status: 'available' },
{ name: 'Himeko', imgName: '1003', have: true, element: 'fire', rarity: 5,  status: 'available' },
{ name: 'Welt', imgName: '1004', have: false, element: 'imaginary', rarity: 5,  status: 'available', version: '3.2' },
{ name: 'Arlan', imgName: '1008', have: true, element: 'thunder', rarity: 4,  status: 'available' },
{ name: 'Asta', imgName: '1009', have: true, element: 'fire', rarity: 4,  status: 'available' },
{ name: 'Herta', imgName: '1013', have: true, element: 'ice', rarity: 4,  status: 'available' },
{ name: 'Bronya', imgName: '1101', have: true, element: 'wind', rarity: 5,  status: 'available' },
{ name: 'Seele', imgName: '1102', have: true, element: 'quantum', rarity: 5,  status: 'available' },
{ name: 'Serval', imgName: '1103', have: true, element: 'thunder', rarity: 4,  status: 'available' },
{ name: 'Gepard', imgName: '1104', have: true, element: 'ice', rarity: 5,  status: 'available' },
{ name: 'Natasha', imgName: '1105', have: true, element: 'physical', rarity: 4,  status: 'available' },
{ name: 'Pela', imgName: '1106', have: true, element: 'ice', rarity: 4,  status: 'available' },
{ name: 'Clara', imgName: '1107', have: true, element: 'physical', rarity: 5,  status: 'available' },
{ name: 'Sampo', imgName: '1108', have: true, element: 'wind', rarity: 4,  status: 'available' },
{ name: 'Hook', imgName: '1109', have: true, element: 'fire', rarity: 4,  status: 'available' },
{ name: 'Qingque', imgName: '1201', have: true, element: 'quantum', rarity: 4,  status: 'available' },
{ name: 'Tingyun', imgName: '1202', have: true, element: 'thunder', rarity: 4,  status: 'available' },
{ name: 'Sushang', imgName: '1206', have: true, element: 'physical', rarity: 4,  status: 'available' },
{ name: 'Yanqing', imgName: '1209', have: true, element: 'ice', rarity: 5,  status: 'available' },
{ name: 'Bailu', imgName: '1211', have: true, element: 'thunder', rarity: 5,  status: 'available' },

{ name: 'Evernight', imgName: '1413', have: false, element: 'thunder', rarity: 5,  status: 'soon', version: '3.6' },
{ name: 'Dan Heng • PT', imgName: '1414', have: false, element: 'thunder', rarity: 5,  status: 'soon', version: '3.6' },

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
