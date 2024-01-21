/* eslint-disable no-shadow */
'use strict';

const largeImg = document.getElementById('largeImg');

const list = document.getElementById('thumbs');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target;

  if (!item.classList.contains('gallery__img')) {
    return false;
  }

  largeImg.src = item.parentElement.href;
});
