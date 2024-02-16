/* eslint-disable no-shadow */
'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target;

  if (!item.classList.contains('gallery__img')) {
    return false;
  }

  largeImg.src = item.parentElement.href;
});
