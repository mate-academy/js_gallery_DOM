'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbImages = document.querySelector('.gallery__list');

thumbImages.addEventListener('click', (event) => {
  event.preventDefault();

  mainImage.src = event.target.closest('.list-item__link').href;
});
