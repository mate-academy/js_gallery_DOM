/* eslint-disable no-shadow */
'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const smallImgList = document.querySelector('.gallery__list');

smallImgList.addEventListener('click', (event) => {
  event.preventDefault();

  largeImg.src = event.target.closest('a').href;
});
