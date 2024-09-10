'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

// eslint-disable-next-line no-shadow
galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const linkImg = event.target.closest('.list-item__link');

  largeImg.src = linkImg.href;
});
