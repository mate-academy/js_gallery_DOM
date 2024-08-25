'use strict';

const list = document.querySelector('.gallery__list');
const mainImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  mainImg.src = e.target.parentElement.href;
});
