'use strict';

const list = document.querySelector('.gallery__list');
const mainImg = document.getElementById('largeImg');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target;

  mainImg.src = item.closest('.list-item__link').href;
});
