'use strict';

const listGallery = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

listGallery.addEventListener('click', (item) => {
  item.preventDefault();

  const slide = item.target.closest('.list-item__link');

  largeImg.src = slide.href;
});
