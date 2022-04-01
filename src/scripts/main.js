'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (elem) => {
  elem.preventDefault();
  largeImg.src = elem.target.closest('.list-item__link').href;
});
