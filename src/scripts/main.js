'use strict';

const largeImage = document.querySelector('#largeImg');
const listGallery = document.querySelector('.gallery__list');

listGallery.addEventListener('click', (theEvent) => {
  const item = theEvent.target.closest('.list-item__link');

  theEvent.preventDefault();

  if (!item || !listGallery.contains(item)) {
    return;
  }

  largeImage.src = item.href;
});
