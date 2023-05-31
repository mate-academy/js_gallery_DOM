'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

list.addEventListener('click', (action) => {
  const image = action.target.closest('.list-item__link');

  if (!image || !list.contains(image)) {
    return;
  }
  action.preventDefault();

  largeImage.src = image.href;
});
