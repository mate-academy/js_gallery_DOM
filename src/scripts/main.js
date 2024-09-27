'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.getElementById('largeImg');

list.addEventListener('click', (ev) => {
  const item = ev.target.closest('.list-item__link');

  ev.preventDefault();
  largeImage.src = item.href;
});
