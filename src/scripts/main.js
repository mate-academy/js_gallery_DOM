'use strict';

const list = document.querySelector('.gallery__list');
const img = document.querySelector('.gallery__img');

list.addEventListener('click', e => {
  e.preventDefault();

  const item = e.target.closest('.list-item');

  if (!item || !list.contains(item)) {
    return;
  }

  const link = item.querySelector('.list-item__link');

  img.src = link.href;
});
