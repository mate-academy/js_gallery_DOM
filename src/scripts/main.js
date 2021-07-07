'use strict';

const list = document.querySelector('.gallery__list');
const bigImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');

  event.preventDefault();
  bigImage.src = item.href;
});
