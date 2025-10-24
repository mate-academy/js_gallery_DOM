'use strict';

const nav = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__img');

nav.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  mainImg.setAttribute('src', link.href);
});
