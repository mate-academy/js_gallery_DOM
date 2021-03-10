'use strict';

const largeImage = document.querySelector('.gallery__large-img');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const clickedImage = clickEvent.target.closest('.list-item__link');

  if (!clickedImage) {
    return;
  }

  largeImage.src = clickedImage.href;
});
