'use strict';

const list = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target.closest('.list-item__link');

  mainImg.src = item.href;
});
