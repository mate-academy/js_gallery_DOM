'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', ev => {
  ev.preventDefault();
  largeImg.src = ev.target.closest('.list-item__link').href;
});
