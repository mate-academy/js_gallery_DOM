'use strict';

const thumbnails = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

thumbnails.addEventListener('click', (evt) => {
  const currentThumbnail = evt.target.closest('.list-item__link');

  if (!currentThumbnail) {
    return;
  }

  evt.preventDefault();

  largeImage.src = currentThumbnail.href;
});
