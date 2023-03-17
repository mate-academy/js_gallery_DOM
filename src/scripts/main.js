'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (ev) => {
  const img = ev.target.closest('.list-item__link');

  ev.preventDefault();
  largeImg.src = img.href;
});
