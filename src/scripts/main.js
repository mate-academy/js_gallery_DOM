'use strict';

const largeImage = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', e => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  largeImage.src = item.href;
});
