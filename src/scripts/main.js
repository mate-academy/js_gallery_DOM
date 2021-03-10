'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const clickedImage = clickEvent.target.closest('a');

  if (!clickedImage) {
    return;
  }

  largeImage.src = clickedImage.href;
});
