'use strict';

const list = document.querySelector('.gallery__list');
const img = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  img.src = item.firstElementChild.src;
  e.preventDefault();
});
