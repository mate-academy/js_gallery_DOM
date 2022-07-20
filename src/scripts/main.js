'use strict';

const list = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (clicked) => {
  clicked.preventDefault();

  const item = clicked.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  mainImage.src = item.href;
});
