'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImage.src = item.href;
});
