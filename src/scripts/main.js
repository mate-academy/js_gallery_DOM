'use strict';

const bigImage = document.getElementById('largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  if (e.target.closest('.list-item')) {
    const a = e.target.closest('.list-item__link');

    bigImage.setAttribute('src', a);
  }
  e.preventDefault();
});
