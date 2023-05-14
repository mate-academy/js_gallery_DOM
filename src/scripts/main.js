'use strict';

const list = document.querySelector('.gallery__list');

const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (even) => {
  const item = even.target.closest('.list-item__link');

  even.preventDefault();

  if (!item || !list.contains(item)) {
    return;
  }

  largeImg.src = item.href;
});
