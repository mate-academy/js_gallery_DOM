'use strict';

const images = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

images.addEventListener('click', (events) => {
  const item = events.target.closest('.list-item__link');

  events.preventDefault();

  if (!item || !images.contains(item)) {
    return;
  }

  mainImg.src = item.href;
});
