'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (Handler) => {
  Handler.preventDefault();

  const item = Handler.target.parentElement;

  largeImg.src = item.href;
});
