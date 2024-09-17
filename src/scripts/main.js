'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (eventClick) => {
  const item = eventClick.target.closest('.list-item__link');

  eventClick.preventDefault();

  largeImage.src = item.href;
});
