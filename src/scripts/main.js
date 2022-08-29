'use strict';

const items = document.querySelector('.gallery__list');
const largePic = document.getElementById('largeImg');

items.addEventListener('click', (e) => {
  e.preventDefault();

  const pic = e.target.closest('.list-item__link');

  largePic.src = pic.href;
});
