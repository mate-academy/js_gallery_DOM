'use strict';

const largeImg = document.getElementById('largeImg');
const listItem = document.querySelector('.gallery__list');

listItem.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target.closest('.list-item__link');

  if (!item) {
    return;
  }
  largeImg.src = item.href;
});
