'use strict';

const largeImage = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  largeImage.src = item.href;
});
