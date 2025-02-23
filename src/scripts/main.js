'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (eventClick) => {
  eventClick.preventDefault();

  const item = eventClick.target.closest('.list-item');
  const img = item.querySelector('.list-item__link');

  if (!item) {
    return;
  }

  largeImg.src = `${img.href}`;
});
