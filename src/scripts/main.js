'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  largeImg.src = item.firstElementChild.src;
  e.preventDefault();
});
