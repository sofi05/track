const birthdays = {
  '01-03': ['Wanderer'],
  '01-06': ['Lanyan'],
  '01-09': ['Tohma'],
  '01-10': ['Chevreuse'],
  '01-18': ['Diona'],
  '01-20': ['Citlali'],
  '01-22': ['Momoka'],
  '01-24': ['Rosaria'],

  '02-02': ['Linette', 'Liney'],
  '02-11': ['Alhatham'],
  '02-14': ['Beidou'],
  '02-22': ['Kokomi'],
  '02-29': ['Bennett'],

  '03-03': ['Qiqi'],
  '03-06': ['Yaoyao'],
  '03-10': ['Shenhe'],
  '03-13': ['Xilonen'],
  '03-14': ['Qin'],
  '03-16': ['Mizuki'],
  '03-21': ['Noel'],
  '03-23': ['Ifa'],
  '03-26': ['Ayato'],
  '03-30': ['Sigewinne'],

  '04-02': ['Ineffa'],
  '04-04': ['Aloy'],
  '04-07': ['Dehya'],
  '04-10': ['Charlotte'],
  '04-11': ['Liuyun'],
  '04-17': ['Xiao'],
  '04-20': ['Yelan'],
  '04-22': ['Kachina'],
  '04-25': ['Baizhuer'],
  '04-30': ['Diluc'],

  '05-03': ['Candace'],
  '05-08': ['Collei'],
  '05-18': ['Gorou'],
  '05-21': ['Yunjin'],
  '05-25': ['Dahlia'],
  '05-27': ['Fischl'],
  '05-31': ['Sethos'],

  '06-01': ['Itto'], // You may choose to handle Player separately
  '06-08': ['Escoffier'],
  '06-09': ['Lisa'],
  '06-16': ['Venti'],
  '06-21': ['Yoimiya'],
  '06-23': ['Cyno'],
  '06-26': ['Shougun'],
  '06-27': ['Yae'],

  '07-05': ['Barbara'],
  '07-09': ['Kaveh'],
  '07-14': ['Sara'],
  '07-15': ['Hutao'],
  '07-20': ['Tartaglia'],
  '07-24': ['Heizo'],
  '07-27': ['Klee', 'Shinobu'],
  '07-28': ['Feiyan'],

  '08-03': ['Mualani'],
  '08-08': ['Iansan'],
  '08-10': ['Ambor'],
  '08-11': ['Mika'],
  '08-16': ['Navia'],
  '08-17': ['Chiori'],
  '08-20': ['Faruzan'],
  '08-22': ['Arlecchino'],
  '08-26': ['Ningguang'],
  '08-28': ['Mavuika'],
  '08-31': ['Mona'],

  '09-07': ['Chongyun'],
  '09-09': ['Razor'],
  '09-13': ['Albedo'],
  '09-20': ['Clorinde'],
  '09-22': ['Emilie'],
  '09-24': ['Freminet'],
  '09-28': ['Ayaka'],

  '10-09': ['Xingqiu'],
  '10-13': ['Furina'],
  '10-14': ['Olorun'],
  '10-16': ['Xinyan'],
  '10-19': ['Sayu'],
  '10-25': ['Eula'],
  '10-27': ['Nahida'],
  '10-29': ['Kazuha'],

  '11-02': ['Xiangling'],
  '11-05': ['SkirkNew'],
  '11-11': ['Kinich'],
  '11-15': ['Varesa'],
  '11-20': ['Keqing'],
  '11-23': ['Wriothesley'],
  '11-26': ['Sucrose'],
  '11-30': ['Kaeya'],

  '12-02': ['Ganyu'],
  '12-03': ['Nilou'],
  '12-10': ['Chasca'],
  '12-18': ['Neuvillette'],
  '12-19': ['Layla'],
  '12-21': ['Dori'],
  '12-22': ['Gaming'],
  '12-29': ['Tighnari'],
  '12-31': ['Zhongli'],
};

function getTodayDateKey() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  return `${month}-${day}`; // MM-DD
}

function createBirthdayElement(name) {
  const container = document.createElement('div');
  container.classList.add('birthday-icon');

  const img = document.createElement('img');
  img.alt = name;
  img.src = `../assets/charaid/Genshin/UI_AvatarIcon_${name}.png`;

  img.onerror = () => {
    img.style.display = 'none';
  };

  container.appendChild(img);
  return container;
}

function showTodaysBirthdays() {
  const todayKey = getTodayDateKey();
  const bdaySection = document.getElementById('birthday-today');
  bdaySection.innerHTML = ''; // Clear existing

  const todayList = birthdays[todayKey];

  if (todayList && todayList.length > 0) {
    todayList.forEach((name) => {
      const birthdayIcon = createBirthdayElement(name);
      bdaySection.appendChild(birthdayIcon);
    });
  } else {
    bdaySection.textContent = 'No birthdays today!';
  }
}

document.addEventListener('DOMContentLoaded', showTodaysBirthdays);

    document.addEventListener("DOMContentLoaded", () => {
      const birthdayContainer = document.getElementById("birthday-icons");
      const todayKey = getTodayDateKey();

      if (birthdays[todayKey]) {
        birthdays[todayKey].forEach((name) => {
          const img = document.createElement("img");
          const cleanName = name.replace(/[^a-zA-Z]/g, "");
          const fileName = `UI_AvatarIcon_${cleanName}.png`;
          img.src = `../assets/charaid/Genshin/${fileName}`;
          img.alt = name;
          img.title = name;
          birthdayContainer.appendChild(img);
        });
      } else {
        const none = document.createElement("p");
        none.textContent = "No birthdays today!";
        birthdayContainer.appendChild(none);
      }

      function getTodayDateKey() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        return `${month}-${day}`;
      }
    });

