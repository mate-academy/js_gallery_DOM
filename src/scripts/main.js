'use strict';

const largeImg = document.getElementById('largeImg');
const galleryList = document.getElementById('thumbs');

galleryList.addEventListener('click', (eve) => {
  eve.preventDefault();

  const img = eve.target.closest('.list-item__link');

  if (!img) {
    return;
  }

  largeImg.src = img.href;
});
