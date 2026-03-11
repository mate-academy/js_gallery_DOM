'use strict';

const mainImage = document.getElementById('largeImg');
const galleryImages = document.getElementById('thumbs');

galleryImages.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;

  const link = target.closest('a');

  if (!link) {
    return;
  }
  mainImage.src = link.href;
});
