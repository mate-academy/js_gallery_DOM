'use strict';

const listGallery = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

listGallery.addEventListener('click', (events) => {
  events.preventDefault();

  const item = events.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImg.src = item.href;
});
