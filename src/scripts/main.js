'use strict';

const largeImg = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  e.preventDefault();
  largeImg.src = e.target.closest('.list-item__link').href;
});
