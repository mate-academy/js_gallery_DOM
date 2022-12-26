'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');
  const itemImg = item.getAttribute('href');

  event.preventDefault();

  if (!item || !list.contains(item)) {
    return;
  }

  largeImage.setAttribute('src', itemImg);
});
