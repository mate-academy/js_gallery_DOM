'use strict';

const list = document.querySelector('.gallery__list');
const container = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  const item = e.target;

  e.preventDefault();
  container.src = item.parentElement.href;
});
