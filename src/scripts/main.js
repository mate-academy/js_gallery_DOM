'use strict';

const list = document.querySelector('.gallery__list');

const largeImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  e.preventDefault();

  largeImg.src = item.href;
});
