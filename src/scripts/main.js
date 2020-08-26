'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  };

  largeImg.src = item.href;
});
