'use strict';

const largeImage = document.getElementById('largeImg');

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (even) => {
  even.preventDefault();

  const item = even.target.closest('.list-item');

  if (!item) {
    return;
  }
  largeImage.src = item.children[0].href;
});
