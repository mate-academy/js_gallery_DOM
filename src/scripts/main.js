'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  // e.preventDefault();
  const item = e.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  e.preventDefault();

  largeImg.src = item.href;
});
