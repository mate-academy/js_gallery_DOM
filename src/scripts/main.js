'use strict';

const mainImage = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  mainImage.src = item.href;
});
