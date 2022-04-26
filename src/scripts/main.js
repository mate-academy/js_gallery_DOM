'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item');

  if (!item) {
    return;
  };

  e.preventDefault();

  largeImg.src = item.children[0].href;
});
