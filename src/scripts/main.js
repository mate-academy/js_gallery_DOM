'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const imgList = document.querySelector('.gallery__list');

imgList.addEventListener('click', e => {
  e.preventDefault();
  largeImg.src = e.target.closest('.list-item__link').href;
});
