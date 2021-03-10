'use strict';

const largeImage = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  e.preventDefault();
  largeImage.src = e.target.closest('.list-item__link').href;
});
