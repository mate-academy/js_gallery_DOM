'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (param) => {
  const item = param.target;

  param.preventDefault();

  if (item.classList.contains('gallery__thumb')) {
    largeImg.setAttribute('src', `${item.closest('.list-item__link').href}`);
  }
});
