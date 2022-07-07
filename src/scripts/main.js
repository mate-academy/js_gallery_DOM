'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (eventimg) => {
  const item = eventimg.target.closest('a');

  if (!item) {
    return;
  }

  eventimg.preventDefault();

  largeImg.src = item.href;
});
