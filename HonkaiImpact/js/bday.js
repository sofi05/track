const birthdays = {

  '01-01': [{ folder: 'Durandal', imgName: 'Palatinus_Equinox' }], 

  '02-09': [{ folder: 'FuHua', imgName: 'Fenghuang_of_Vicissitude' }],

  '03-01': [{ folder: 'Rita', imgName: 'Spina_Astera' }],
  '03-28': [{ folder: 'Theresa', imgName: 'Schicksals_Imperative' }],
  
  '04-03': [{ folder: 'Sushang', imgName: 'Peregrine_Sword' }],
  '04-13': [{ folder: 'Mei', imgName: 'Herrscher_of_Origin' }],
  '04-30': [{ folder: 'SoloChara', imgName:'Infinite_Ouroboros' }], //Mobius
  
  '05-05': [{ folder: 'SoloChara', imgName:'Helical_Contraption'}], //Vill-V
  '05-25': [{ folder: 'SoloChara', imgName:'Disciplinary_Perdition'}], //Aponia
  
  '06-11': [{folder:'Himeko', imgName:'Vermilion_Knight_-_Eclipse'}], 
  '06-19': [{ folder: 'SoloChara', imgName:'Midnight_Absinthe'}], //Natasha

  '07-11': [{ folder: 'SoloChara', imgName:'Reverist_Calico'}], //Pardofelis
  '07-22': [{folder:'Sakura', imgName:'Darkbolt_Jonin'}],
  
  '08-18': [{folder:'Bronya', imgName:'Herrscher_of_Truth'}],

  '09-08': [{ folder: 'SoloChara', imgName:'Sugary_Starburst'}], //Kira
  '09-23': [{ folder: 'SoloChara', imgName:'Sweet_n_Spicy'}], //Carole   

  '10-18': [{folder: 'Seele', imgName:'Herrscher_of_Rebirth'}],
  '10-31': [{ folder: 'SoloChara', imgName:'Golden_Diva'}], //Eden

  '11-11': [{ folder:'Elysia', imgName:'Herrscher_of_Human_-_Ego'}],
  '11-29': [{ folder: 'SoloChara', imgName:'Valkyrie_Quicksand'}], //Susannah

  '12-07': [{ folder:'Kiana', imgName:'Ba-Dum_Fiery_Wishing_Star'}],
  '12-21': [{ folder:'Griseo', imgName:'Cosmic_Expression'}],
};

function getTodayDateKey() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  return `${month}-${day}`;
}

function createDebugImage(entry) {
  const img = document.createElement('img');
  const src = `../assets/charaid/Honkai/${entry.folder}/${entry.imgName}.png`;

  console.log('Creating img element with src:', src);
  img.src = src;

  img.alt = entry.imgName.replace(/_/g, ' ');
  img.title = img.alt;
  console.log('alt set to:', img.alt);

  img.onerror = () => {
    console.error('Image failed to load:', src);
    img.style.border = '2px solid red';
    img.title += ' (Image failed to load)';
  };
  img.onload = () => {
    console.log('Image loaded successfully:', src);
  };

  return img;
}

function debugShowBirthdays() {
  const key = getTodayDateKey();
  console.log('Today is:', key);

  const container = document.getElementById('birthday-icons');
  if (!container) {
    console.warn('Could not find #birthday-icons');
    return;
  }
  console.log('Found container:', container);

  container.innerHTML = '<!-- debug clear -->';

  const list = birthdays[key];
  console.log('Birthdays list for today:', list);

  if (list && list.length) {
    list.forEach(entry => {
      const img = createDebugImage(entry);
      container.appendChild(img);
      console.log('Appended img:', img);
    });
  } else {
    const p = document.createElement('p');
    p.textContent = 'No birthdays today!';
    container.appendChild(p);
    console.log('Appended fallback text');
  }
}

document.addEventListener('DOMContentLoaded', debugShowBirthdays);
