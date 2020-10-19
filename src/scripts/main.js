'use strict';

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (event) => {
  const smallImage = event.target.closest('.list-item');
  const bigImage = document.querySelector('#largeImg');

  event.preventDefault();

  if (!smallImage) {
    return;
  }

  bigImage.src = smallImage.querySelector('.list-item__link').href;
});
