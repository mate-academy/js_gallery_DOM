'use strict';

const big = document.getElementById('largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', () => {
  event.preventDefault();

  const item = event.target;

  big.src = item.parentElement.href;
});
