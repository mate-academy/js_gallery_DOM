'use strict';

const ul = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }
  largeImg.src = link.href;
});
