'use strict';

const list = document.querySelector('.gallery__list');
const bigImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (occasion) => {
  const item = occasion.target.closest('.list-item__link');

  occasion.preventDefault();

  if (!item || !list.contains(item)) {
    return;
  }

  bigImage.src = item.href;
});
