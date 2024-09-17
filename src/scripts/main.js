'use strict';

const listOfImages = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

listOfImages.addEventListener('click', e => {
  e.preventDefault();

  mainImage.src = e.target.closest('.list-item__link').href;
});
