'use strict';

const largeImage = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  largeImage.src = item.href;
});
