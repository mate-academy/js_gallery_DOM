'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  largeImage.src = e.target.closest('a').href;
});
