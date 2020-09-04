'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();
  largeImg.src = event.target.closest('.list-item__link').href;
});
