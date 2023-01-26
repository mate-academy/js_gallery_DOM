'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (event) => {
  event.preventDefault();
  largeImg.src = event.target.closest('a');
});
