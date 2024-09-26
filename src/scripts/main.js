'use strict';

const mainImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (ev) => {
  ev.preventDefault();

  const link = ev.target.closest('a');

  if (!link) {
    return;
  }

  const largeImageSrc = link.href;

  mainImage.src = largeImageSrc;
});
