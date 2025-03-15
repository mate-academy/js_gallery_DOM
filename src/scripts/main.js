'use strict';

const galleryCont = document.querySelector('#thumbs');
const galleryImgLarge = document.querySelector('#largeImg');

galleryCont.addEventListener('click', (ev) => {
  ev.preventDefault();

  galleryImgLarge.src = ev.target.closest('.list-item__link').href;
});
