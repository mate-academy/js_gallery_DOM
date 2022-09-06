'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item');

  if (!item) {
    return;
  }

  const link = item.querySelector('.list-item__link');

  largeImg.src = link.href;
});
