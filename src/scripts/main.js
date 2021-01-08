'use strict';

const list = document.querySelector('.gallery__list');
const picture = document.querySelector('.gallery__large-img');

list.addEventListener('click', (occasion) => {
  occasion.preventDefault();

  const item = occasion.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  picture.src = item.href;
});
