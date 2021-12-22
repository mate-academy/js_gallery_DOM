'use strict';

const list = document.querySelector('.gallery__list');
const img = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  img.src = item.href;
  e.preventDefault();
});
