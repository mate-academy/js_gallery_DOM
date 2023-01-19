'use strict';

const listGallery = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

listGallery.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item || !listGallery.contains(item)) {
    return;
  }

  largeImage.src = item.href;
});
