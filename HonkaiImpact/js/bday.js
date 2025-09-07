window.BDAY_CONFIG = {
  birthdays: {

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

  //'09-06': [{ folder:'Kiana', imgName:'Ba-Dum_Fiery_Wishing_Star'}], //Test
},

createImageElement(entry) {
    const container = document.createElement('div');
    container.classList.add('birthday-icon');

    const img = document.createElement('img');
    const src = `../assets/charaid/Honkai/${entry.folder}/${entry.imgName}.png`;
    img.src = src;
    img.alt = entry;

    img.onerror = () => {
      img.style.display = 'none';
    };

    container.appendChild(img);
    return container;
  },
};