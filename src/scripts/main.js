'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

// eslint-disable-next-line no-shadow
galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item');
  const link = item.querySelector('.list-item__link');

  largeImg.src = link.href;
});
