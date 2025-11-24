'use strict';

const ulElemGallery = document.querySelector('ul.gallery__list');
const initialImg = document.querySelector('#largeImg');

ulElemGallery.addEventListener('click', (e) => {
  e.preventDefault();

  const receivedItem = e.target.closest('a');

  if (!receivedItem) {
    return;
  }

  const currentImg = receivedItem.href;

  initialImg.src = currentImg;
});
