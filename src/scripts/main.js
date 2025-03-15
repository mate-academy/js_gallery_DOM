'use strict';

const largeImg = document.querySelector('#largeImg');
const nav = document.querySelector('.gallery__list');

nav.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
