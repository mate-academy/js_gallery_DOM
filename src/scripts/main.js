'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (clickEvent) => {
  const clickedImage = clickEvent.target.closest('a');

  largeImage.src = clickedImage.href;
  clickEvent.preventDefault();
});
