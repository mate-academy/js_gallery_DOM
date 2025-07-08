'use strict';

const mainImage = document.getElementById('largeImg');

const listImages = document.getElementById('thumbs');

listImages.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  const href = link.href;

  e.preventDefault();

  mainImage.src = href;
});
