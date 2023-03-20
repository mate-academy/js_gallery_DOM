'use strict';

const gallery = document.querySelector('.gallery__list');
const mainPhoto = document.querySelector('#largeImg');

// eslint-disable-next-line
gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link').href;

  mainPhoto.src = item;
});
