'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  largeImg.src = e.target.closest('a').href;
});
