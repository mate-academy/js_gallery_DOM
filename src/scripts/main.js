'use strict';

const galleryContainer = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

galleryContainer.addEventListener('click', (e) => {
  event.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImage.src = item.href;
});
