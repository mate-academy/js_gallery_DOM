'use strict';

const galleryList = document.querySelector('.gallery__list');
const bigImage = document.querySelector('#largeImg');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();
  bigImage.src = event.target.closest('.list-item__link').href;
});
