'use strict';

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (even) => {
  even.preventDefault();

  const item = even.target;

  document.getElementById('largeImg').src = item.src;
});
