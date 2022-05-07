'use strict';

const largeImg = document.querySelector('.gallery__large-img');

const listImages = document.querySelector('.gallery__list');

listImages.addEventListener('click', (event) => {
  event.preventDefault();

  const image = event.target.closest('.list-item__link');

  largeImg.src = image.href;
});
