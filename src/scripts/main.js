'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', () => {
  event.preventDefault();
  largeImg.src = event.target.parentElement.href;
});
