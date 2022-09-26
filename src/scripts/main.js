'use strict';

const list = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

const handler = events => {
  const item = events.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  events.preventDefault();

  largeImage.src = item.href;
};

list.addEventListener('click', handler);
