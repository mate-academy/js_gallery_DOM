'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target;

  largeImage.src = item.parentElement.href;
});
