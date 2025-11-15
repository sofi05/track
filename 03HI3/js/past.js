document.addEventListener('DOMContentLoaded', () => {
  const popupHTML = `
    <h3 style="text-align:center;">Past Honkai</h3>
    <div class="game-hnk-list">
      <div class="game-hnk" data-index="0">
        <img src="../assets/gameico/old/FlyMe2theMoon.webp" alt="Fly Me to the Moon" />
      </div>
      <div class="game-hnk" data-index="1">
        <img src="../assets/gameico/old/Zombiegal_Kawaii.webp" alt="Zombiegal Kawaii" />
      </div>
    </div>
    <div id="slider-content" class="slider-content hidden">
      <div id="slider-message"></div>
    </div>
  `;

  const popupContainer = document.getElementById('popup-cont');
  popupContainer.innerHTML = `<div id="game-past" class="game-past hidden"><div class="popup-inner">${popupHTML}</div></div>`;

  const popup = document.getElementById('game-past');
  const sliderContent = document.getElementById('slider-content');
  const sliderMessage = document.getElementById('slider-message');
  const switchButton = document.getElementById('tab-past');

  let activeIcon = null; 

  // Show popup
  switchButton.addEventListener('click', e => {
    e.preventDefault();
    popup.classList.remove('hidden');
  });

  // Close popup if background clicked
  popup.addEventListener('click', e => {
    if (e.target === popup) {
      popup.classList.add('hidden');
      sliderContent.classList.add('hidden');
      resetIcons(); 
    }
  });

  // Description content
  const sliderContents = [
    `<h4><a href="https://www.youtube.com/watch?v=AkzHkRAIjgo">Fly Me to the Moon</a></h4>
     <p>The first game developed by early miHoYo members before the company was formally established. 
     The development team was composed of Cai Haoyu, Luo Yuhao, Jin Zhicheng, CiCi, and Liu Wei. 
     The story centers on the adventure of Kiana Kaslana as she travels to the moon with a jetpack.</p>`,

    `<h4><a href="https://www.youtube.com/watch?v=fTUQhodL5A8">Zombiegal Kawaii</a></h4> 
     A 2D side-scrolling shooter game. 
     It's the company's second game and its game's assets and mechanics were later reused for its sequel, <i>Guns GirlZ</i>.
     It centers on the adventures of Kiana Kaslana as she fights her way through the zombie-infested school grounds.</p>`
  ];

  const resetIcons = () => {
    document.querySelectorAll('.game-hnk img').forEach(img => {
      img.classList.remove('active', 'gray');
    });
    activeIcon = null; 
  };

  // Show content on image click and toggle active state
  popup.querySelectorAll('.game-hnk').forEach(icon => {
    icon.addEventListener('click', () => {
      const index = icon.dataset.index;
      const img = icon.querySelector('img');

      if (activeIcon === img) {
        sliderContent.classList.add('hidden');
        resetIcons();
        return;
      }

      sliderMessage.innerHTML = sliderContents[index] || `<p>No content available</p>`;
      sliderContent.classList.remove('hidden');
      
      // Graying out the other icons
      resetIcons(); 
      img.classList.add('active'); 
      img.classList.remove('gray'); 
      activeIcon = img; 

      document.querySelectorAll('.game-hnk img').forEach(otherImg => {
        if (otherImg !== img) {
          otherImg.classList.add('gray');
        }
      });
    });
  });
});