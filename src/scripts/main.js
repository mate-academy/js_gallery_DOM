'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (occurrent) => {
  occurrent.preventDefault();

  const item = occurrent.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImg.src = item.href;
});
