'use strict';

const largeImg = document.querySelector('#largeImg');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImg.src = item.href;
});
