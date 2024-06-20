'use strict';

const galleryList = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

galleryList.addEventListener('click', (action) => {
  action.preventDefault();

  const img = action.target.closest('.list-item__link');

  if (!img) {
    return;
  }

  largeImg.src = img.href;
});
