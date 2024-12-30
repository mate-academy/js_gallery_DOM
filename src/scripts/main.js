'use strict';

const thumbs = document.querySelector('.gallery__list');

thumbs.addEventListener('click', (ev) => {
  ev.preventDefault();

  const mainImage = document.querySelector('#largeImg');
  const src = ev.target.closest('.list-item__link').href;

  mainImage.src = src;
});
