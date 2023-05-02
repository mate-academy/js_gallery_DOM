'use strict';

const centralFrame = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', e => {
  const item = e.target.closest('.list-item__link');

  if (item) {
    e.preventDefault();
    centralFrame.src = item.href;
  }
});
