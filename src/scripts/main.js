'use strict';

const list = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

list.addEventListener('click', (events) => {
  events.preventDefault();

  const item = events.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  largeImage.src = item.href;
});
