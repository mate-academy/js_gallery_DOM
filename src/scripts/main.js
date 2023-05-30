'use strict';

const mainPhoto = document.getElementById('largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (ev) => {
  ev.preventDefault();

  const image = ev.target.closest('.list-item__link');

  mainPhoto.src = image.href;
});
