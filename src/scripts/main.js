'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');

  event.preventDefault();
  largeImg.src = item.href;
});
