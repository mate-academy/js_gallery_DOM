/* eslint-disable no-shadow */
'use strict';

const largeImg = document.getElementById('largeImg');
const imagesList = document.querySelector('.gallery__list');

imagesList.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  largeImg.src = link.href;
});
