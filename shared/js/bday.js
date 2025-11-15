(function () {
  const { birthdays, createImageElement } = window.BDAY_CONFIG;

  function getTodayDateKey() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    return `${month}-${day}`;
  }

  function createBirthdayElement(name) {
    if (typeof createImageElement === 'function') {
      return createImageElement(name);
    }
    // fallback generic element if no createImageElement provided
    const container = document.createElement('div');
    container.textContent = name;
    return container;
  }

  function showTodaysBirthdays() {
    const todayKey = getTodayDateKey();
    const bdaySection = document.getElementById('birthday-icons');
    if (!bdaySection) return;
    bdaySection.innerHTML = ''; 

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
})();