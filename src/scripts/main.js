'use strict';

const bigImg = document.getElementById('largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (event) => {
  const item = event.target;

  bigImg.src = item.closest('.list-item__link').href;
  event.preventDefault();
});
