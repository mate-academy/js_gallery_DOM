'use strict';

const mainImg = document.querySelector('.gallery__img');
const images = document.querySelector('.gallery__list');

images.addEventListener('click', (ev) => {
  ev.preventDefault();

  mainImg.src = ev.target.closest('.list-item__link').href;
});
