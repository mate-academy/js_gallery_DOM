'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const galleryItems = document.querySelector('.gallery__list');

galleryItems.addEventListener('click', (element) => {
  element.preventDefault();
  largeImg.src = element.target.closest('.list-item__link').href;
});
