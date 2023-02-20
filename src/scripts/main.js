'use strict';

const largeImage = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImage.src = item.href;
});
