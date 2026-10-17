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
  // Leaving a character that has several pictures: how many EXTRA presses of -> / <- it takes at its
  // first / last picture before the popup moves to the next / previous character.
  // 0 = it moves on at once, 1 = "press again to leave" (a hint is shown). Per call: { holdAtEdge: 1 }.
  Dex.POPUP_EDGE_PRESSES = 0;

  const MAX_DOTS = 12; // more pictures than this show a counter instead of dots
  const SWIPE_MIN = 50; // px a finger must travel to change picture

  let removeListeners = null; // cleans up whatever the open popup attached
  let thumbsGuardAdded = false;

  const byId = (id) => document.getElementById(id);
  const isOpen = (popup) => popup.style.display === 'flex';

  // ---------------------------------------------------------------
  // Open
  // ---------------------------------------------------------------
  /**
   * Dex.showPopup(pictures, name, options)
   *   options.groups   [{ images: [...], name }, ...]  one group per character. A group with
   *                    several pictures shows arrows + thumbnails; stepping past its first / last
   *                    picture moves to the neighbouring character. (`pictures` is ignored then.)
   *   options.startGroup / options.start   where to begin (group number / picture number)
   *   options.holdAtEdge   see Dex.POPUP_EDGE_PRESSES
   *   A group may also have  icon: 'url'  and  bg: 'css background'. Then the neighbouring characters show
   *   as small faded icons on the left / right (behind the picture). Pressing towards one brings it to the
   *   front; pressing again moves to that character. (holdAtEdge then defaults to 1; the ends do not wrap.)
   */
  Dex.showPopup = function (images, altText, { fit = false, start = 0, groups = null, startGroup = 0, holdAtEdge } = {}) {
    const popup = byId('spritePopup');
    const popupImg = byId('spritePopupImg');
    if (!popup || !popupImg) return;

    // groups -> one flat list of pictures + where each group starts and ends
    const ranges = [];
    if (groups) {
      groups = groups.map((g) => ({ ...g, images: [].concat(g.images).filter(Boolean) })).filter((g) => g.images.length);
      images = [];
      groups.forEach((g) => {
        ranges.push({ from: images.length, to: images.length + g.images.length - 1, name: g.name, icon: g.icon, bg: g.bg });
        images.push(...g.images);
      });
      start = (ranges[Math.min(startGroup, ranges.length - 1)] || { from: 0 }).from + start;
    }
    images = (Array.isArray(images) ? images : [images]).filter(Boolean);
    if (!images.length) return;
    const tiles = Boolean(groups && groups.some((g) => g.icon)); // side icons of the neighbouring characters
    const hold = holdAtEdge ?? (tiles ? 1 : Dex.POPUP_EDGE_PRESSES);
    const groupAt = (i) => ranges.find((r) => i >= r.from && i <= r.to) || { from: 0, to: images.length - 1 };

    if (removeListeners) removeListeners();

    const prevBtn = byId('prevBtn');
    const nextBtn = byId('nextBtn');
    const thumbs = byId('thumbnailContainer');
    const isGallery = Boolean(thumbs) && !groups; // grouped mode draws its own arrows / thumbnails (works with either markup)
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
        popupImg.onerror = () => { popupImg.onerror = () => { popupImg.style.visibility = 'hidden'; }; popupImg.src = Dex.FALLBACK_SPRITE; popupImg.style.visibility = 'visible'; };
      } else if (isGallery) {
        popupImg.alt = `${altText} - ${index + 1}`;
        popupImg.onerror = () => { popupImg.onerror = () => { popupImg.style.visibility = 'hidden'; }; popupImg.src = Dex.FALLBACK_SPRITE; };
      } else {
        popupImg.alt = altText;
        popupImg.onerror = () => {
          popupImg.onerror = null;
          popupImg.src = Dex.FALLBACK_SPRITE;
        };
      }
      popupImg.src = src;

      if (thumbs) {
        thumbs.querySelectorAll('.thumbnail-img').forEach((t, n) => t.classList.toggle('selected', n === i));
      }
      refreshDots(i);
      if (groups) refreshGroupUI();
    }

    // dots / counter: one per picture, or one per character when pictures are grouped
    function refreshDots(i) {
      if (!dots) return;
      const at = groups ? ranges.indexOf(groupAt(i)) : i;
      if (counter) counter.textContent = `${at + 1} / ${groups ? ranges.length : total}`;
      else [...dots.children].forEach((d, n) => d.classList.toggle('active', n === at));
    }

    // Simple popup with several pictures: a subtle row of dots + tap the picture for the next one.
    let dots = null;
    let counter = null; // many pictures: "3 / 120" instead of one dot each
    const dotCount = groups ? ranges.length : total;
    if (!isGallery && canNavigate && !tiles) {
      dots = Dex.el('div', 'sprite-dots');
      if (dotCount > MAX_DOTS) {
        counter = Dex.el('span', 'sprite-counter');
        dots.appendChild(counter);
      } else {
        for (let n = 0; n < dotCount; n++) {
          const dot = Dex.el('button', 'sprite-dot');
          dot.type = 'button';
          dot.setAttribute('aria-label', groups ? `Character ${n + 1}` : `Picture ${n + 1}`);
          dot.addEventListener('click', (e) => { e.stopPropagation(); showImageAt(groups ? ranges[n].from : n); });
          dots.appendChild(dot);
        }
      }
      (popupImg.parentElement || popup).appendChild(dots);
      popupImg.classList.add('tap-next');
      popupImg.onclick = (e) => { e.stopPropagation(); step(1); };
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

    // ---- grouped mode: arrows + thumbnails for a character with several pictures ----
    let groupUI = null; // { arrows: [prev, next], strip, group }
    let edgePresses = 0;
    let hintTimer = null;

    function showHint(text) {
      groupUI.hint.textContent = text;
      groupUI.hint.classList.add('show');
      clearTimeout(hintTimer);
      hintTimer = setTimeout(() => groupUI && groupUI.hint.classList.remove('show'), 1400);
    }

    let armedDir = 0;      // -1 / +1 while a side icon waits for the second press
    const disarm = () => { armedDir = 0; edgePresses = 0; if (tiles) refreshTiles(); };

    // ---- side icons of the neighbouring characters (behind the picture, fading) ----
    let sides = null;
    function refreshTiles() {
      if (!tiles) return;
      const here = ranges.indexOf(groupAt(index));
      if (!sides) {
        const wrapper = popupImg.parentElement;
        if (wrapper) { wrapper.style.position = 'relative'; wrapper.style.zIndex = '2'; } // the picture covers the icons
        sides = [-1, 1].map((direction) => {
          const box = Dex.el('div', `sprite-side ${direction < 0 ? 'prev' : 'next'}`);
          const icon = Dex.el('img');
          icon.onerror = () => { icon.onerror = null; icon.src = Dex.FALLBACK_ICON; };
          box.appendChild(icon);
          box.addEventListener('click', (e) => {
            e.stopPropagation();
            const neighbour = ranges[ranges.indexOf(groupAt(index)) + direction];
            if (neighbour) { disarm(); showImageAt(neighbour.from); }
          });
          popup.appendChild(box);
          return { direction, box, icon, shown: null };
        });
      }
      sides.forEach((side) => {
        const neighbour = ranges[here + side.direction];
        side.box.style.display = neighbour ? 'block' : 'none';
        if (!neighbour) return;
        if (side.shown !== neighbour) {
          side.shown = neighbour;
          side.icon.src = neighbour.icon || Dex.FALLBACK_ICON;
          side.box.style.background = neighbour.bg || '#555';
          side.box.title = neighbour.name || '';
        }
        side.box.classList.toggle('armed', armedDir === side.direction && edgePresses >= hold);
      });
    }

    function refreshGroupUI() {
      refreshTiles();
      const group = groupAt(index);
      const several = group.to > group.from;
      if (!groupUI) {
        const make = (cls, text, direction) => {
          const b = Dex.el('button', `sprite-arrow ${cls}`, text);
          b.type = 'button';
          b.addEventListener('click', (e) => { e.stopPropagation(); step(direction); });
          popup.appendChild(b);
          return b;
        };
        groupUI = {
          arrows: [make('prev', '←', -1), make('next', '→', 1)],
          strip: Dex.el('div', 'sprite-thumbs'),
          hint: Dex.el('div', 'sprite-hint'),
          group: null,
        };
        groupUI.strip.addEventListener('click', (e) => e.stopPropagation());
        ['touchstart', 'touchmove', 'touchend'].forEach((t) => groupUI.strip.addEventListener(t, (e) => e.stopPropagation(), { passive: true }));
        popup.append(groupUI.strip, groupUI.hint);
      }
      groupUI.arrows.forEach((a) => (a.style.display = several ? 'block' : 'none'));
      groupUI.strip.style.display = several ? 'flex' : 'none';
      if (dots) dots.style.display = several ? 'none' : 'flex';

      if (several && groupUI.group !== group) {
        groupUI.group = group;
        groupUI.strip.innerHTML = '';
        for (let n = group.from; n <= group.to; n++) {
          const thumb = Dex.el('img', 'sprite-thumb');
          thumb.src = images[n];
          thumb.alt = `${altText} - ${n - group.from + 1}`;
          thumb.addEventListener('click', (e) => { e.stopPropagation(); edgePresses = 0; showImageAt(n); });
          groupUI.strip.appendChild(thumb);
        }
      }
      if (several) {
        [...groupUI.strip.children].forEach((t, n) => t.classList.toggle('selected', group.from + n === index));
      }
    }

    function step(direction) {
      if (!canNavigate) return;
      if (groups) {
        const group = groupAt(index);
        const target = index + direction;
        if (target >= group.from && target <= group.to) { // still inside this character's pictures
          disarm();
          showImageAt(target);
          return;
        }
        const here = ranges.indexOf(group);
        const next = here + direction;
        if (tiles && (next < 0 || next >= ranges.length)) return; // no character on that side
        // leaving the character: with `hold` extra presses first (the side icon comes to the front)
        if (armedDir !== direction) { armedDir = direction; edgePresses = 0; }
        if (edgePresses < hold) {
          edgePresses++;
          if (tiles) refreshTiles();
          else showHint(direction > 0 ? 'Press again for the next character' : 'Press again for the previous character');
          return;
        }
        disarm();
        showImageAt(tiles ? (direction > 0 ? ranges[next].from : ranges[next].to) : (target + total) % total);
        return;
      }
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
    if (groups && thumbs) thumbs.style.display = 'none'; // the gallery strip is replaced by the grouped one
    if (prevBtn && nextBtn && groups) prevBtn.style.display = nextBtn.style.display = 'none';
    else if (prevBtn && nextBtn) {
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
      clearTimeout(hintTimer);
      if (groupUI) {
        groupUI.arrows.forEach((a) => a.remove());
        groupUI.strip.remove();
        groupUI.hint.remove();
        groupUI = null;
      }
      if (sides) {
        sides.forEach((s) => s.box.remove());
        sides = null;
        const wrapper = popupImg.parentElement;
        if (wrapper) { wrapper.style.position = ''; wrapper.style.zIndex = ''; }
      }
      if (dots) dots.remove();
      popupImg.classList.remove('tap-next');
      popupImg.onclick = null;
      cleanups.forEach((undo) => undo());
      removeListeners = null;
    };

    // ---- go ----
    showImageAt(start < total ? start : 0);
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
