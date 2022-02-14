'use strict';

const list = document.querySelector('.gallery__list');
const img = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  const item = e.target.closest('.gallery__img');

  if (!item || !list.contains(item)) {
    return;
  }

  img.src = item.src;
});
