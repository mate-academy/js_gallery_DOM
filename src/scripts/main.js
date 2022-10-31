'use strict';

const photos = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

photos.addEventListener('click', (picture) => {
  const item = picture.target.closest('.list-item__link');

  picture.preventDefault();

  largeImg.src = item.href;
});
