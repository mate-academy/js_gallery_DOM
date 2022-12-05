'use strict';

const images = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

images.addEventListener('click', (handler) => {
  handler.preventDefault();

  const item = handler.target.closest('.list-item__link');

  if (!item || !images.contains(item)) {
    return;
  }

  largeImage.src = item.href;
});
