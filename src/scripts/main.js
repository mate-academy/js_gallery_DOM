'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  largeImage.src = e.target.parentElement.href;
});
