'use strict';
const list = document.querySelector('.gallery__list');

const mainScreen = document.querySelector('#largeImg');

list.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');
  mainScreen.src = item;
  event.preventDefault();
})