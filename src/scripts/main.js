'use strict';

const main = document.getElementById('largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (imgevent) => {
  const item = imgevent.target;

  imgevent.preventDefault();

  main.src = item.closest('a').href;
});
