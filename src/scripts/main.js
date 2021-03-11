'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const clicked = e.target.closest('.list-item__link');

  if (!clicked) {
    return;
  };

  largeImg.src = clicked.href;
});
