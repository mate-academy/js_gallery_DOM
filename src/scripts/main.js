'use strict';

const mainImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const thumb = e.target.closest('.gallery__thumb');

  if (!thumb) {
    return;
  }

  const link = thumb.closest('a');

  if (link) {
    mainImage.src = link.href;
  }
});
