'use strict';

const largeImg = document.getElementById('largeImg');
const listGallery = document.querySelector('.gallery__list');

listGallery.addEventListener('click', (evt) => {
  evt.preventDefault();

  largeImg.src = evt.target.closest('.list-item__link').href;
});
