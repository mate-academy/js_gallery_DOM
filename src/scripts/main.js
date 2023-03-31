'use strict';

const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (handler) => {
  handler.preventDefault();

  const smallImage = handler.target.closest('.list-item__link');

  if (!smallImage) {
    return;
  }

  const largeImage = document.querySelector('.gallery__large-img');

  largeImage.setAttribute('src', smallImage.href);
});
