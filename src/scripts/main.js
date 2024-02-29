'use strict';

const largeImage = document.getElementById('largeImg');
const smallImages = document.getElementById('thumbs');

smallImages.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImage.src = item.href;
});
