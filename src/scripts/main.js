'use strict';

const mainImage = document.querySelector('.gallery__large-img');

const list = document.querySelector('.gallery__list');

list.addEventListener('click', () => {
  const item = event.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  event.preventDefault();

  mainImage.src = item.href;
});
