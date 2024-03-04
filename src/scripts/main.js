'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  const image = e.target.closest('.list-item__link');

  if (!image) {
    return;
  }
  e.preventDefault();

  largeImage.src = image.href;
});
