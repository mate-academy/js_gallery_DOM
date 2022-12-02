'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (handler) => {
  const item = handler.target.closest('.list-item__link');

  handler.preventDefault();

  largeImg.src = item.href;
});
