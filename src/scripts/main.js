'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

// eslint-disable-next-line no-shadow
galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const targetItem = event.target.closest('.list-item__link');

  if (!targetItem) {
    return;
  }

  largeImage.src = targetItem.href;
});
