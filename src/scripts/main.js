'use strict';

const handler = function(e) {
  const thumb = e.target.closest('a');

  if (!thumb) {
    return;
  }

  e.preventDefault();
  mainImage.src = thumb.href;
};
const galleryList = document.getElementById('thumbs');
const mainImage = document.getElementById('largeImg');

galleryList.addEventListener('click', handler);
