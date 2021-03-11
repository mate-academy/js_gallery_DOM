'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (smallImg) => {
  smallImg.preventDefault();

  largeImg.src = smallImg.target.parentNode.href;
});
