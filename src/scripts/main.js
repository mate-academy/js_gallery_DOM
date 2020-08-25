'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbImages = document.querySelector('.gallery__list');

thumbImages.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('list-item__link')
    || event.target.classList.contains('gallery__thumb')) {
    mainImage.src = event.target.closest('.list-item__link').href;
  }
});
