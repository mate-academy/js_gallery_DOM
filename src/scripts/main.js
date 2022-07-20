'use strict';

const list = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (clicked) => {
  clicked.preventDefault();

  const item = clicked.target.closest('.list-item');

  if (!item || !list.contains(item)) {
    return;
  }

  const itemImage = item.querySelector('.list-item__link');

  mainImage.src = itemImage.href;
});
