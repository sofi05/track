const imageUploader = document.getElementById('imageUploader');
const galleryGrid = document.getElementById('galleryGrid');
const imagePopup = document.getElementById('imagePopup');
const popupImg = document.getElementById('popupImg');
const popupClose = document.getElementById('popupClose');
const clearBtn = document.getElementById('clearGalleryBtn');

let galleryImages = [];

// Load images from localStorage on start
function loadGallery() {
  const stored = localStorage.getItem('galleryImages');
  if (stored) {
    galleryImages = JSON.parse(stored);
    renderGallery();
  }
}

// Render thumbnails
function renderGallery() {
  galleryGrid.innerHTML = '';
  galleryImages.forEach((dataUrl, index) => {
    const img = document.createElement('img');
    img.src = dataUrl;
    img.alt = `Image ${index + 1}`;
    img.addEventListener('click', () => openPopup(dataUrl));
    galleryGrid.appendChild(img);
  });
}

// Handle multi-file uploads
imageUploader.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  if (!files.length) return;

  // Process each file asynchronously
  let filesProcessed = 0;

  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      galleryImages.push(reader.result);
      filesProcessed++;

      // When all files are processed, update localStorage and render
      if (filesProcessed === files.length) {
        localStorage.setItem('galleryImages', JSON.stringify(galleryImages));
        renderGallery();
      }
    };
    reader.readAsDataURL(file);
  });

  // Reset input so same files can be uploaded again if needed
  e.target.value = '';
});

// Popup logic
function openPopup(src) {
  popupImg.src = src;
  imagePopup.classList.remove('hidden');
}

popupClose.addEventListener('click', () => {
  imagePopup.classList.add('hidden');
});

imagePopup.addEventListener('click', (e) => {
  if (e.target === imagePopup) {
    imagePopup.classList.add('hidden');
  }
});

// Clear gallery button
clearBtn.addEventListener('click', () => {
  localStorage.removeItem('galleryImages');
  galleryImages = [];
  renderGallery();
});

// Load gallery on script load
loadGallery();
