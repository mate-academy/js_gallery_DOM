'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (action) => {
  const link = action.target.closest('.list-item__link');

  action.preventDefault();

  largeImage.src = link.href;
});
