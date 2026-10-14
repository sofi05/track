/* =====================================================================
   sprite-popup.js — the full-screen picture viewer.

   Usage from any page script:
       Dex.showPopup(['a.png', 'b.png'], 'Character name');   // several pictures
       Dex.showPopup('a.png', 'Character name');              // one picture
       Dex.showPopup(list, 'Name', { fit: true });            // shrink the picture to fit the window
       Dex.closePopup();

   It works with the two kinds of markup found in your HTML pages:
     * Simple    -> <div id="spritePopup" class="sprite-popup"> ... one picture
     * Gallery   -> <div id="spritePopup" class="popup"> ... with #prevBtn,
                    #nextBtn and #thumbnailContainer (thumbnails, swipe, drag)
   ===================================================================== */
(function () {
  const Dex = (window.Dex = window.Dex || {});

  const THUMB_SIZE = 60;
  const THUMB_GAP = 5;
  const SWIPE_MIN = 50; // px a finger must travel to change picture

  let removeListeners = null; // cleans up whatever the open popup attached
  let thumbsGuardAdded = false;

  const byId = (id) => document.getElementById(id);
  const isOpen = (popup) => popup.style.display === 'flex';

  // ---------------------------------------------------------------
  // Open
  // ---------------------------------------------------------------
  Dex.showPopup = function (images, altText, { fit = false } = {}) {
    const popup = byId('spritePopup');
    const popupImg = byId('spritePopupImg');
    if (!popup || !popupImg) return;

    images = (Array.isArray(images) ? images : [images]).filter(Boolean);
    if (!images.length) return;

    if (removeListeners) removeListeners();

    const prevBtn = byId('prevBtn');
    const nextBtn = byId('nextBtn');
    const thumbs = byId('thumbnailContainer');
    const isGallery = Boolean(thumbs);
    const total = images.length;
    const canNavigate = total > 1;
    let index = 0;

    // ---- show one picture ----
    function showImageAt(i) {
      index = i;
      const src = images[index] || images[0];

      if (fit) {
        popupImg.style.width = '';
        popupImg.style.height = '';
        popupImg.style.objectFit = 'contain';
        popupImg.style.visibility = 'hidden';
        popupImg.alt = `${altText} - ${src.split('/').pop().replace(/\.(png|webp)/, '')}`;
        popupImg.onload = fitToScreen;
        popupImg.onerror = () => { popupImg.style.visibility = 'hidden'; };
      } else if (isGallery) {
        popupImg.alt = `${altText} - ${index + 1}`;
        popupImg.onerror = () => { popupImg.style.visibility = 'hidden'; };
      } else {
        popupImg.alt = altText;
        popupImg.onerror = () => {
          popupImg.onerror = null;
          popupImg.src = Dex.FALLBACK_IMG;
        };
      }
      popupImg.src = src;

      if (thumbs) {
        thumbs.querySelectorAll('.thumbnail-img').forEach((t, n) => t.classList.toggle('selected', n === i));
      }
    }

    // Scale the picture to fit the window, but never enlarge small pictures.
    function fitToScreen() {
      const ratio = Math.min(
        (window.innerWidth * 0.95) / popupImg.naturalWidth,
        (window.innerHeight * 0.95) / popupImg.naturalHeight,
        1
      );
      popupImg.style.width = popupImg.naturalWidth * ratio + 'px';
      popupImg.style.height = popupImg.naturalHeight * ratio + 'px';
      popupImg.style.visibility = 'visible';
    }

    function step(direction) {
      if (!canNavigate) return;
      showImageAt((index + direction + total) % total);
      scrollThumbToCenter(index);
    }

    // ---- thumbnails (gallery markup only) ----
    function centerThumbsIfTheyFit() {
      const width = [...thumbs.children].reduce((sum, t) => sum + t.getBoundingClientRect().width + THUMB_GAP, 0);
      thumbs.style.justifyContent = width <= thumbs.getBoundingClientRect().width ? 'center' : 'flex-start';
    }

    function scrollThumbToCenter(i) {
      const thumb = thumbs && thumbs.querySelectorAll('.thumbnail-img')[i];
      if (!thumb) return;
      const maxScroll = Math.max(0, thumbs.scrollWidth - thumbs.clientWidth);
      const target = thumb.offsetLeft - (thumbs.clientWidth / 2 - thumb.offsetWidth / 2);
      thumbs.scrollLeft = Math.min(Math.max(target, 0), maxScroll);
    }

    function scrollThumbIntoView(thumb) {
      if (thumb.offsetLeft < thumbs.scrollLeft) {
        thumbs.scrollLeft = thumb.offsetLeft;
      } else if (thumb.offsetLeft + thumb.offsetWidth > thumbs.scrollLeft + thumbs.clientWidth) {
        thumbs.scrollLeft = thumb.offsetLeft + thumb.offsetWidth - thumbs.clientWidth;
      }
    }

    const cleanups = [];
    function listen(target, type, handler, options) {
      target.addEventListener(type, handler, options);
      cleanups.push(() => target.removeEventListener(type, handler, options));
    }

    if (isGallery) {
      thumbs.innerHTML = '';
      thumbs.style.display = canNavigate ? 'flex' : 'none';

      let loaded = 0;
      images.forEach((src, i) => {
        const thumb = Dex.el('img', 'thumbnail-img');
        thumb.alt = `${altText} - ${i + 1}`;
        Object.assign(thumb.style, {
          width: THUMB_SIZE + 'px',
          height: THUMB_SIZE + 'px',
          objectFit: 'cover',
          flex: '0 0 auto',
        });
        thumb.src = src;
        thumb.onload = () => {
          if (++loaded < total) return;
          centerThumbsIfTheyFit();
          setTimeout(() => { scrollThumbToCenter(0); thumbs.scrollLeft = 0; }, 100);
        };

        // A tap on a thumbnail picks it; a drag (finger moved) does not.
        let touchStartX = 0;
        let touchMoved = false;
        thumb.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; touchMoved = false; }, { passive: true });
        thumb.addEventListener('touchmove', (e) => { if (Math.abs(e.touches[0].clientX - touchStartX) > 10) touchMoved = true; }, { passive: true });
        thumb.addEventListener('touchend', (e) => {
          if (touchMoved) return;
          e.stopPropagation();
          showImageAt(i);
          scrollThumbToCenter(i);
        });
        thumb.addEventListener('click', (e) => {
          e.stopPropagation();
          showImageAt(i);
          scrollThumbIntoView(thumb);
        });

        thumbs.appendChild(thumb);
      });

      // Drag the thumbnail strip with the mouse.
      let dragging = false;
      let dragStartX = 0;
      let dragStartScroll = 0;
      const stopDrag = () => { dragging = false; thumbs.classList.remove('dragging'); };
      listen(thumbs, 'mousedown', (e) => {
        dragging = true;
        dragStartX = e.pageX - thumbs.offsetLeft;
        dragStartScroll = thumbs.scrollLeft;
        thumbs.classList.add('dragging');
      });
      listen(thumbs, 'mousemove', (e) => {
        if (!dragging) return;
        e.preventDefault();
        thumbs.scrollLeft = dragStartScroll - (e.pageX - thumbs.offsetLeft - dragStartX) * 1.5;
      });
      listen(thumbs, 'mouseup', stopDrag);
      listen(thumbs, 'mouseleave', stopDrag);
      // Swiping the strip must not change the big picture.
      ['touchstart', 'touchmove', 'touchend'].forEach((type) =>
        listen(thumbs, type, (e) => e.stopPropagation(), { passive: true })
      );

      if (!thumbsGuardAdded) {
        thumbs.addEventListener('click', (e) => e.stopPropagation()); // clicking the strip keeps the popup open
        thumbsGuardAdded = true;
      }
    }

    // ---- arrows, keyboard, swipe ----
    if (prevBtn && nextBtn) {
      prevBtn.style.display = nextBtn.style.display = canNavigate ? 'block' : 'none';
      prevBtn.onclick = (e) => { e.stopPropagation(); step(-1); };
      nextBtn.onclick = (e) => { e.stopPropagation(); step(1); };
    }

    listen(document, 'keydown', (e) => {
      if (!isOpen(popup)) return;
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    });

    let swipeStartX = 0;
    listen(popup, 'touchstart', (e) => { swipeStartX = e.touches[0].clientX; }, { passive: true });
    listen(popup, 'touchend', (e) => {
      const diff = e.changedTouches[0].clientX - swipeStartX;
      if (Math.abs(diff) < 10) return;
      if (diff > SWIPE_MIN) step(-1);
      else if (diff < -SWIPE_MIN) step(1);
    }, { passive: true });

    popup.onclick = (e) => { if (e.target === popup) Dex.closePopup(); };

    removeListeners = () => {
      cleanups.forEach((undo) => undo());
      removeListeners = null;
    };

    // ---- go ----
    showImageAt(0);
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (isGallery) {
      setTimeout(() => { centerThumbsIfTheyFit(); scrollThumbToCenter(0); thumbs.scrollLeft = 0; }, 20);
    }
  };

  // ---------------------------------------------------------------
  // Close
  // ---------------------------------------------------------------
  Dex.closePopup = function () {
    const popup = byId('spritePopup');
    if (!popup) return;
    popup.style.display = 'none';
    document.body.style.overflow = '';
    if (removeListeners) removeListeners();
  };

  // ---------------------------------------------------------------
  // One-time wiring: ✕ button, Escape key, window resize
  // ---------------------------------------------------------------
  function init() {
    document.querySelector('#spritePopup .close-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      Dex.closePopup();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') Dex.closePopup();
    });

    window.addEventListener('resize', () => {
      const simplePopup = document.querySelector('.sprite-popup');
      if (simplePopup) simplePopup.style.height = window.innerHeight + 'px';
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
