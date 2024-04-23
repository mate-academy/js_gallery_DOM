/* eslint-disable no-shadow */
'use strict';

const list = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

list.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');

  event.preventDefault();
  largeImage.src = item.href;
});
