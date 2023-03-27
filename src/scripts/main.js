'use strict';

const largeImage = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', clickedEvent => {
  clickedEvent.preventDefault();

  const item = clickedEvent.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImage.src = item.href;
});