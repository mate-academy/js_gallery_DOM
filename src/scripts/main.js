'use strict';

const galleryCont = document.querySelector('.gallery__list');
const galleryImgLarge = document.querySelector('#largeImg');

galleryCont.addEventListened('click', (event) => {
  event.preventDefault();

  galleryImgLarge.src = event.target.closest('.list-item__link').href;
});
