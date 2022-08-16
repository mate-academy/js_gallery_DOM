'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

const handler = (events) => {
  const item = events.target.closest('.list-item__link');

  events.preventDefault();

  if (!item) {
    return;
  }

  largeImage.src = item;
};

list.addEventListener('click', handler);
