'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (events) => {
  const item = events.target;

  events.preventDefault();
  largeImg.src = item.parentElement.href;
});
