'use strict';

const largeImage = document.getElementById('largeImg');
const smallImages = document.querySelector('.gallery__list');

smallImages.addEventListener('click', evt => {
  const smallPicture = evt.target.closest('.list-item__link');

  evt.preventDefault();

  if (!smallPicture || !smallImages.contains(smallPicture)) {
    return;
  }

  largeImage.src = smallPicture.href;
});
