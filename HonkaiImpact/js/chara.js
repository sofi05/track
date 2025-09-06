const characters = [
  //part 1 (Honkai Impact 3rd)
  { name: 'Bronya • BN', imgName: 'Black_Nucleus', folder:'Bronya', have: true, element: 'BIO', rarity: '5', part:'1', status: 'available' },
  { name: 'Bronya • DB', imgName: 'Dimension_Breaker', folder:'Bronya', have: false, element: 'MECH', rarity: '5', part:'1', status: 'available', version:'5.1' },
  { name: 'Bronya • DK', imgName: 'Drive_Kometa', folder:'Bronya', have: false, element: 'PSY', rarity: '4', part:'1', status: 'available', version:'3.1' },
  { name: 'Bronya • HB', imgName: 'Haxxor_Bunny', folder:'Bronya', have: true, element: 'PSY', rarity: '4', part:'1', status: 'available' },
  { name: 'Bronya • HoR', imgName: 'Herrscher_of_Reason', folder:'Bronya', have: true, element: 'MECH', rarity: '5', part:'1', status: 'available' },
  { name: 'Bronya • HoT', imgName: 'Herrscher_of_Truth', folder:'Bronya', have: true, element: 'IMG', rarity: '5', part:'1', status: 'available' },
  { name: 'Bronya • S', imgName: 'Silverwing_-_N-EX', folder:'Bronya', have: false, element: 'BIO', rarity: '5', part:'1', status: 'available', version:'7.8' },
  { name: 'Bronya • SS', imgName: 'Snowy_Sniper', folder:'Bronya', have: true, element: 'BIO', rarity: '4', part:'1', status: 'available' },
  { name: 'Bronya • VC', imgName: 'Valkyrie_Chariot', folder:'Bronya', have: true, element: 'PSY', rarity: '3', part:'1', status: 'available' },
  { name: 'Bronya • WD', imgName: 'Wolfs_Dawn', folder:'Bronya', have: true, element: 'PSY', rarity: '4', part:'1', status: 'available' },
  { name: 'Bronya • YA', imgName: 'Yamabuki_Armor', folder:'Bronya', have: true, element: 'PSY', rarity: '4', part:'1', status: 'available' },

  { name: 'Durandal • BN', imgName: 'Bright_Knight_-_Excelsis', folder:'Durandal', have: false, element: 'MECH', rarity: '5', part:'1', status: 'available', version:'7.0' },
  { name: 'Durandal • DA', imgName: 'Dea_Anchora', folder:'Durandal', have: false, element: 'BIO', rarity: '5', part:'1', status: 'available', version:'7.5' },
  { name: 'Durandal • PE', imgName: 'Palatinus_Equinox', folder:'Durandal', have: false, element: 'IMG', rarity: '5', part:'1', status: 'available', version:'7.8' },
  { name: 'Durandal • VG', imgName: 'Valkyrie_Gloria', folder:'Durandal', have: true, element: 'QUA', rarity: '4', part:'1', status: 'available' },

  { name: 'Elysia • HoH', imgName: 'Herrscher_of_Human_-_Ego', folder:'Elysia', have: true, element: 'PSY', rarity: '5', part:'1', status: 'available' },
  { name: 'Elysia • MPE', imgName: 'Miss_Pink_Elf', folder:'Elysia', have: false, element: 'PSY', rarity: '5', part:'1', status: 'available', version:'7.8' },

  { name: 'Fu Hua • AE', imgName: 'Azure_Empyrea', folder:'FuHua', have: false, element: 'PSY', rarity: '5', part:'1', status: 'available', version:'7.3' },
  { name: 'Fu Hua • FoV', imgName: 'Fenghuang_of_Vicissitude', folder:'FuHua', have: false, element: 'BIO', rarity: '5', part:'1', status: 'available', version:'7.2' },
  { name: 'Fu Hua • HoF', imgName: 'Hawk_of_the_Fog', folder:'FuHua', have: false, element: 'PSY', rarity: '4', part:'1', status: 'available', version:'3.5' },
  { name: 'Fu Hua • HoS', imgName: 'Herrscher_of_Sentience', folder:'FuHua', have: true, element: 'BIO', rarity: '5', part:'1', status: 'available' },
  { name: 'Fu Hua • NS', imgName: 'Night_Squire', folder:'FuHua', have: true, element: 'BIO', rarity: '4', part:'1', status: 'available' },
  { name: 'Fu Hua • P', imgName: 'Phoenix', folder:'FuHua', have: false, element: 'PSY', rarity: '5', part:'1', status: 'available', version:'4.9' },
  { name: 'Fu Hua • SK', imgName: 'Shadow_Knight', folder:'FuHua', have: false, element: 'MECH', rarity: '5', part:'1', status: 'available', version:'5.2' },
  { name: 'Fu Hua • VA', imgName: 'Valkyrie_Accipiter', folder:'FuHua', have: true, element: 'PSY', rarity: '4', part:'1', status: 'available' },

  { name: 'Griseo • CE', imgName: 'Cosmic_Expression', folder:'Griseo', have: true, element: 'SD', rarity: '4', part:'1', status: 'available' },
  { name: 'Griseo • SI', imgName: 'Starry_Impression', folder:'Griseo', have: true, element: 'PSY', rarity: '4', part:'1', status: 'available' },

  { name: 'Himeko • BS', imgName: 'Battle_Storm', folder:'Himeko', have: true, element: 'BIO', rarity: '3', part:'1', status: 'available' },
  { name: 'Himeko • BR', imgName: 'Blood_Rose', folder:'Himeko', have: false, element: 'PSY', rarity: '5', part:'1', status: 'available', version:'5.0' },
  { name: 'Himeko • K', imgName: 'Kriegsmesser', folder:'Himeko', have: true, element: 'PSY', rarity: '4', part:'1', status: 'available' },
  { name: 'Himeko • SF', imgName: 'Scarlet_Fusion', folder:'Himeko', have: true, element: 'MECH', rarity: '4', part:'1', status: 'available' },
  { name: 'Himeko • VT', imgName: 'Valkyrie_Triumph', folder:'Himeko', have: true, element: 'BIO', rarity: '4', part:'1', status: 'available' },
  { name: 'Himeko • VK', imgName: 'Vermilion_Knight_-_Eclipse', folder:'Himeko', have: true, element: 'MECH', rarity: '5', part:'1', status: 'available' },
  
  { name: 'Kallen • RI', imgName: 'Ritual_Imayoh', folder:'Kallen', have: true, element: 'MECH', rarity: '4', part:'1', status: 'available' },
  { name: 'Kallen • SS', imgName: 'Sixth_Serenade', folder:'Kallen', have: true, element: 'PSY', rarity: '5', part:'1', status: 'available' },
  { name: 'Kallen • S', imgName: 'Sundenjager', folder:'Kallen', have: true, element: 'MECH', rarity: '4', part:'1', status: 'available' },

  { name: 'Kiana • DP', imgName: 'Divine_Prayer', folder:'Kiana', have: true, element: 'PSY', rarity: '4', part:'1', status: 'available' },
  { name: 'Kiana • HoF', imgName: 'Herrscher_of_Finality', folder:'Kiana', have: true, element: 'IMG', rarity: '5', part:'1', status: 'available' },
  { name: 'Kiana • HoF', imgName: 'Herrscher_of_Flamescion', folder:'Kiana', have: false, element: 'PSY', rarity: '5', part:'1', status: 'available', version:'8.1' },
  { name: 'Kiana • HoV', imgName: 'Herrscher_of_the_Void', folder:'Kiana', have: true, element: 'BIO', rarity: '5', part:'1', status: 'available' },
  { name: 'Kiana • KM', imgName: 'Knight_Moonbeam', folder:'Kiana', have: false, element: 'BIO', rarity: '5', part:'1', status: 'available', version:'5.2' },
  { name: 'Kiana • VR', imgName: 'Valkyrie_Ranger', folder:'Kiana', have: false, element: 'MECH', rarity: '4', part:'1', status: 'available', version:'4.3' },
  { name: 'Kiana • VD', imgName: 'Void_Drifter', folder:'Kiana', have: false, element: 'MECH', rarity: '4', part:'1', status: 'available', version:'3.3' },
  { name: 'Kiana • WC', imgName: 'White_Comet', folder:'Kiana', have: true, element: 'MECH', rarity: '3', part:'1', status: 'available' },

  { name: 'Mei • CI', imgName: 'Crimson_Impulse', folder:'Mei', have: true, element: 'BIO', rarity: '3', part:'1', status: 'available' },
  { name: 'Mei • DS', imgName: 'Danzai_Spectramancer', folder:'Mei', have: false, element: 'MECH', rarity: '4', part:'1', status: 'available', version:'4.2' },
  { name: 'Mei • HoO', imgName: 'Herrscher_of_Origin', folder:'Mei', have: true, element: 'IMG', rarity: '5', part:'1', status: 'available' },
  { name: 'Mei • HoT', imgName: 'Herrscher_of_Thunder', folder:'Mei', have: false, element: 'PSY', rarity: '5', part:'1', status: 'available', version:'7.3' },
  { name: 'Mei • LE', imgName: 'Lightning_Empress', folder:'Mei', have: false, element: 'PSY', rarity: '5', part:'1', status: 'available', version:'5.0' },
  { name: 'Mei • SD', imgName: 'Shadow_Dash', folder:'Mei', have: true, element: 'MECH', rarity: '4', part:'1', status: 'available' },
  { name: 'Mei • SF', imgName: 'Striker_Fulminata', folder:'Mei', have: false, element: 'BIO', rarity: '4', part:'1', status: 'available', version:'3.0' },
  { name: 'Mei • VB', imgName: 'Valkyrie_Bladestrike', folder:'Mei', have: true, element: 'BIO', rarity: '4', part:'1', status: 'available' },

  { name: 'Liliya', imgName: 'Blueberry_Blitz', folder:'Olenyeva', have: true, element: 'MECH', rarity: '4', part:'1', status: 'available' },
  { name: 'Rozalia • FT', imgName: 'Fervent_Tempo', folder:'Olenyeva', have: false, element: 'PSY', rarity: '5', part:'1', status: 'available', version:'4.3' },
  { name: 'Rozalia • MC', imgName: 'Molotov_Cherry', folder:'Olenyeva', have: true, element: 'PSY', rarity: '5', part:'1', status: 'available' },

  { name: 'Rita • AK', imgName: 'Argent_Knight_-_Artemis', folder:'Rita', have: false, element: 'BIO', rarity: '5', part:'1', status: 'available', version:'7.0' }, 
  { name: 'Rita • FR', imgName: 'Fallen_Rosemary', folder:'Rita', have: true, element: 'QUA', rarity: '5', part:'1', status: 'available' },
  { name: 'Rita • PI', imgName: 'Phantom_Iron', folder:'Rita', have: true, element: 'MECH', rarity: '4', part:'1', status: 'available' },
  { name: 'Rita • SA', imgName: 'Spina_Astera', folder:'Rita', have: false, element: 'MECH', rarity: '5', part:'1', status: 'available', version:'7.8' },
  { name: 'Rita • UR', imgName: 'Umbral_Rose', folder:'Rita', have: true, element: 'PSY', rarity: '4', part:'1', status: 'available' },

  { name: 'Sakura • DJ', imgName: 'Darkbolt_Jonin', folder:'Sakura', have: true, element: 'BIO', rarity: '4', part:'1', status: 'available' },
  { name: 'Sakura • FS', imgName: 'Flame_Sakitama', folder:'Sakura', have: true, element: 'BIO', rarity: '4', part:'1', status: 'available' },
  { name: 'Sakura • GM', imgName: 'Goushinnso_Memento', folder:'Sakura', have: true, element: 'MECH', rarity: '5', part:'1', status: 'available' },
  { name: 'Sakura • GM', imgName: 'Gyakushinn_Miko', folder:'Sakura', have: true, element: 'BIO', rarity: '4', part:'1', status: 'available' },

  { name: 'Seele • HoR', imgName: 'Herrscher_of_Rebirth', folder:'Seele', have: false, element: 'PSY', rarity: '5', part:'1', status: 'available', version:'6.8' },
  { name: 'Seele • SN', imgName: 'Starchasm_Nyx', folder:'Seele', have: false, element: 'QUA', rarity: '5', part:'1', status: 'available', version:'7.7' },
  { name: 'Seele • SN', imgName: 'Stygian_Nymph', folder:'Seele', have: false, element: 'QUA', rarity: '5', part:'1', status: 'available', version:'7.0' },
  { name: 'Seele • SP', imgName: 'Swallowtail_Phantasm', folder:'Seele', have: true, element: 'QUA', rarity: '4', part:'1', status: 'available' },

  { name: 'Sushang', imgName: 'Jade_Knight', folder:'Sushang', have: false, element: 'PSY', rarity: '5', part:'1', status: 'available', version:'6.1' },
  
  { name: 'Theresa • CH', imgName: 'Celestial_Hymn', folder:'Theresa', have: false, element: 'BIO', rarity: '5', part:'1', status: 'available', version:'5.1' },
  { name: 'Theresa • LK', imgName: 'Luna_Kindred', folder:'Theresa', have: true, element: 'BIO', rarity: '4', part:'1', status: 'available' },
  { name: 'Theresa • LV', imgName: 'Lunar_Vow_-_Crimson_Love', folder:'Theresa', have: false, element: 'PSY', rarity: '5', part:'1', status: 'available', version:'7.0' },
  { name: 'Theresa • SR', imgName: 'Sakuno_Rondo', folder:'Theresa', have: true, element: 'PSY', rarity: '4', part:'1', status: 'available' },
  { name: 'Theresa • SA', imgName: 'Starlit_Astrologos', folder:'Theresa', have: true, element: 'BIO', rarity: '4', part:'1', status: 'available' },
  { name: 'Theresa • TP', imgName: 'Twilight_Paladin', folder:'Theresa', have: false, element: 'MECH', rarity: '5', part:'1', status: 'available', version:'8.1' },
  { name: 'Theresa • VP', imgName: 'Valkyrie_Pledge', folder:'Theresa', have: true, element: 'PSY', rarity: '4', part:'1', status: 'available' },
  { name: 'Theresa • VE', imgName: 'Violet_Executer', folder:'Theresa', have: false, element: 'MECH', rarity: '5', part:'1', status: 'available', version:'8.1' },

  { name: 'Ai Hyperion', imgName: 'Chrono_Navi', folder:'SoloChara', have: true, element: 'MECH', rarity: '4', part:'1', status: 'available' }, 
  { name: 'Aponia', imgName: 'Disciplinary_Perdition', folder:'SoloChara', have: false, element: 'BIO', rarity: '5', part:'1', status: 'available', version:'3.4' },
  { name: 'Schariac', imgName: 'Dreamweaver', folder:'SoloChara', have: true, element: 'MECH', rarity: '5', part:'1', status: 'available' },
  { name: 'Eden', imgName: 'Golden_Diva', folder:'SoloChara', have: true, element: 'IMG', rarity: '4', part:'1', status: 'available' },
  { name: 'Vill-V', imgName: 'Helical_Contraption', folder:'SoloChara', have: false, element: 'QUA', rarity: '5', part:'1', status: 'available', version:'5.9' },
  { name: 'Mobius', imgName: 'Infinite_Ouroboros', folder:'SoloChara', have: false, element: 'MECH', rarity: '4', part:'1', status: 'available', version:'8.1' },
  { name: 'Natasha', imgName: 'Midnight_Absinthe', folder:'SoloChara', have: true, element: 'IMG', rarity: '4', part:'1', status: 'available' },
  { name: 'Sirin', imgName: 'Miracle_Magical_Girl', folder:'SoloChara', have: true, element: 'IMG', rarity: '4', part:'1', status: 'available' },
  { name: 'Pardofelis', imgName: 'Reverist_Calico', folder:'SoloChara', have: true, element: 'IMG', rarity: '4', part:'1', status: 'available' },
  { name: 'Shigure Kira', imgName: 'Sugary_Starburst', folder:'SoloChara', have: false, element: 'MECH', rarity: '4', part:'1', status: 'available', version:'6.7' },
  { name: 'Carole', imgName: 'Sweet_n_Spicy', folder:'SoloChara', have: true, element: 'MECH', rarity: '4', part:'1', status: 'available' },
  { name: 'PROMETHEUS', imgName: 'Terminal_Aide_0017', folder:'SoloChara', have: true, element: 'IMG', rarity: '4', part:'1', status: 'available' },
  { name: 'Susannah', imgName: 'Valkyrie_Quicksand', folder:'SoloChara', have: true, element: 'QUA', rarity: '4', part:'1', status: 'available' },

  //COLLAB characters
  { name: 'Fischl', imgName: 'Prinzessin_der_Verurteilung', folder:'All_Collabs', have: true, element: 'BIO', rarity: '4', part:'1', status: 'available', collab: true },
  { name: 'Sparkle', imgName: 'Thousand-Faced_Maestro_-_Cameo', folder:'All_Collabs', have: true, element: 'QUA', rarity: '5', part:'2', status: 'available', collab: true },

  //part 2 (Honkai Impact 3th)
  { name: 'Coralie • BF', imgName: 'Behold_Fate-Defying_Dragon', folder:'Coralie', have: false, element: 'MECH', rarity: '5', part:'2', status: 'new', version:'8.4' },
  { name: 'Coralie • VB', imgName: 'Valkyrie_Blastmetal', folder:'Coralie', have: true, element: 'PSY', rarity: '4', part:'2', status: 'available' },
  { name: 'Durandal', imgName: 'Reign_Solaris', folder:'Durandal', have: true, element: 'IMG', rarity: '5', part:'2', status: 'available' },
  { name: 'Erdös • PA', imgName: 'Planar_Armament_-_Warped_Spacetime', folder:'Erdos', have: false, element: 'BIO', rarity: '5', part:'2', status: 'available', version:'8.3' },
  { name: 'Erdös • VB', imgName: 'Valkyrie_Boltstorm', folder:'Erdos', have: true, element: 'MECH', rarity: '4', part:'2', status: 'available' },
  { name: 'Kiana', imgName: 'Ba-Dum_Fiery_Wishing_Star', folder:'Kiana', have: true, element: 'SD', rarity: '5', part:'2', status: 'available' },
  { name: 'Sushang', imgName: 'Peregrine_Sword', folder:'Sushang', have: false, element: 'BIO', rarity: '5', part:'2', status: 'available', version:'8.2' },
  { name: 'Senadina', imgName: 'Deepspace_Anchor_-_First_Light', folder:'SoloChara', have: false, element: 'SD', rarity: '5', part:'2',  status: 'available', version:'8.2' },
  { name: 'Songque', imgName: 'Jovial_Deception_-_Shadowdimmer', folder:'SoloChara', have: false, element: 'SD', rarity: '5', part:'2',  status: 'available', version:'7.6' },
  { name: '"Lantern"', imgName: 'Lone_Destruction_-_Shadowchaser', folder:'SoloChara', have: false, element: 'PSY', rarity: '5', part:'2',  status: 'available', version:'7.5' },
  { name: 'Thelema', imgName: 'Mad_Pleasure_-_Shadowbringer', folder:'SoloChara', have: false, element: 'MECH', rarity: '5', part:'2',  status: 'available', version:'7.4' },
  { name: 'Vita', imgName: 'Lone_Planetfarer', folder:'SoloChara', have: false, element: 'MECH', rarity: '5', part:'2',  status: 'available', version:'7.8' },
  { name: 'Theresa', imgName: 'Schicksals_Imperative', folder:'Theresa', have: false, element: 'QUA', rarity: '5', part:'2',  status: 'available', version:'7.7' },
  // Add more characters here
];

let selectedPart = '2'; // Default to Part 2

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
      const matchesPart = selectedPart === 'all' || c.part === selectedPart || (selectedPart === 'collab' && c.collab);

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

      // Filter by group
      if (selectedFilters.group && c.group !== selectedFilters.group) return false;

      return matchesSearch && matchesPart;
    })
    .forEach(c => {
      const card = document.createElement('div');
      card.className = 'char-card';
      card.title = `${c.name} (${c.element}, ${c.rarity})`;

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'icon-wrapper';
      const rarityGradients = {
        5: 'linear-gradient(100deg, #7c4600ff, #ffa632cc)',
        4: 'linear-gradient(135deg, #805292ff, #d9c3f3cc)',
        3: 'linear-gradient(135deg, #498ee7ff, #c3f3e7cc)',
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

      // Use the new Honkai-based path
      const imgSrcName = c.imgName || c.name;
      img.src = `../assets/charaid/Honkai/${c.folder}/${imgSrcName}.png`;
      img.alt = c.name;

      const elementImg = document.createElement('img');
      elementImg.className = 'element-icon';
      elementImg.src = `../assets/element/HI3/${c.element}.png`;
      elementImg.alt = c.element;

      iconWrapper.appendChild(img);
      iconWrapper.appendChild(elementImg);

      const label = document.createElement('div');
      label.textContent = c.name;

      card.appendChild(iconWrapper);
      card.appendChild(label);
      charListEl.appendChild(card);

      // SPRITES - Change this
      card.addEventListener('click', () => {
        const imgName = c.imgName || c.name;
        const imgPath = `../assets/Sprite/HI3/${c.folder}/${imgSrcName}.png`;
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

// ✅ 5) group (now single-select)
setupToggleableRadio("group", "group");

// 6) NewStatus (checkbox - controls both 'new' and 'soon')
document.querySelectorAll('input[name="newStatus"]').forEach(input => {
  input.addEventListener('change', e => {
    const isChecked = e.target.checked;
    selectedFilters.newStatus.new = isChecked;
    selectedFilters.newStatus.soon = isChecked;
    renderList();
  });
});

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

document.querySelectorAll('.part-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active state from all buttons
    document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));

    // Add active state to the clicked button
    btn.classList.add('active');

    // Update selectedPart and re-render
    selectedPart = btn.dataset.part === 'collab' ? 'collab' : btn.dataset.part;
    renderList();
  });
});

renderList();
