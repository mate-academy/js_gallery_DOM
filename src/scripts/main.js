'use strict';

const list = document.querySelector('.gallery__list');
const bigImg = document.querySelector('#largeImg');

list.addEventListener('click', (even) => {
  even.preventDefault();

  const item = even.target.closest('.list-item');

  if (!item) {
    return;
  }

  const link = item.querySelector('a');

  bigImg.src = link.href;
});
