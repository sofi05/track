// Honkai Impact 3rd birthdays.  'MM-DD': [{ name: 'Seele • HoR', id: '714' }]
//   id = the character's imgIcon in js/chara.js (the picture is the same icon as on the Characters page).
window.BDAY_CONFIG = {
  birthdays: {

    '01-01': [{ name: 'Durandal • PE', id: '804' }], 

    '02-09': [{ name: 'Fu Hua • FoV', id: '613' }],

    '03-01': [{ name: 'Rita • SA', id: '706' }],
    '03-28': [{ name: 'Theresa • SI', id: '512' }],
    
    '04-03': [{ name: 'Sushang • PS', id: '3102' }],
    '04-13': [{ name: 'Mei • HoO', id: '206' }],
    '04-30': [{ name: 'Mobius', id: '2301' }], //Mobius
    
    '05-05': [{ name: 'Vill-V', id: '3001' }], //Vill-V
    '05-25': [{ name: 'Aponia', id: '2701' }], //Aponia
    
    '06-11': [{ name: 'Himeko • VK', id: '412' }], 
    '06-19': [{ name: 'Natasha', id: '2401' }], //Natasha

    '07-11': [{ name: 'Pardofelis', id: '2601' }], //Pardofelis
    '07-22': [{ name: 'Sakura • DJ', id: '214' }],
    
    '08-18': [{ name: 'Bronya • HoT', id: '317' }],

    '09-08': [{ name: 'Shigure Kira', id: '3601' }], //Kira
    '09-23': [{ name: 'Carole Pepper', id: '2501' }], //Carole   

    '10-18': [{ name: 'Seele • HoR', id: '714' }],
    '10-31': [{ name: 'Eden', id: '2801' }], //Eden

    '11-11': [{ name: 'Elysia • HoH', id: '2202' }],
    '11-29': [{ name: 'Susannah', id: '3301' }], //Susannah

    '12-07': [{ name: 'Kiana • BD', id: '115' }],
    '12-21': [{ name: 'Griseo • CE', id: '2902' }],

    //'10-12': [{ name: 'Kiana • BD', id: '115' }], //Test
  },

createImageElement(entry) {
    const container = document.createElement('div');
    container.classList.add('birthday-icon');

    const img = document.createElement('img');
    const src = `../assets/charaid/HI3/${entry.id}.png`; // the same picture as the Characters page (its imgIcon)
    img.src = src;
    img.alt = entry.name;

    img.onerror = () => {
      img.style.display = 'none';
    };

    container.appendChild(img);
    return container;
  },
};

window.ALL_BDAY_CONFIGS = window.ALL_BDAY_CONFIGS || [];
window.ALL_BDAY_CONFIGS.push(window.BDAY_CONFIG);