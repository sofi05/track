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
        <button id="slider-close">Close</button>
        <div id="slider-message"></div>
      </div>
    `;
  
    const popupContainer = document.getElementById('popup-cont');
    popupContainer.innerHTML = `<div id="game-past" class="game-past hidden"><div class="popup-inner">${popupHTML}</div></div>`;
  
    const popup = document.getElementById('game-past');
    const sliderContent = document.getElementById('slider-content');
    const sliderMessage = document.getElementById('slider-message');
    const sliderClose = document.getElementById('slider-close');
  
    const switchButton = document.getElementById('tab-past');
  
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
      }
    });
  
    // Sample video + description content
    const sliderContents = [
      `<h4>Fly Me to the Moon</h4>
       <p>Description goes here.</p>
       <iframe width="100%" height="315" src="https://www.youtube.com/embed/sample1" frameborder="0" allowfullscreen></iframe>`,
  
      `<h4><a href="https://www.youtube.com/watch?v=fTUQhodL5A8">Zombiegal Kawaii</a></h4> is a 2D side-scrolling shooter game. <br>
       It is the company's second game and <br>
       its game's assets and mechanics was later <br>
       reused for its sequel, Guns GirlZ. <br>
       It centers on the adventures of Kiana Kaslana<br>
        as she fights her way through the zombie-infested school grounds.</p>`
    ];
  
    // Show content on image click
    popup.querySelectorAll('.game-hnk').forEach(icon => {
      icon.addEventListener('click', () => {
        const index = icon.dataset.index;
        sliderMessage.innerHTML = sliderContents[index] || `<p>No content available</p>`;
        sliderContent.classList.remove('hidden');
      });
    });
  
    // Close slider button
    sliderClose.addEventListener('click', () => {
      sliderContent.classList.add('hidden');
    });
  });
  