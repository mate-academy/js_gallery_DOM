'use strict';

const imgList = document.querySelector('.gallery__list');
const bigImg = document.querySelector('img');

imgList.addEventListener('click', (event) => {
  event.preventDefault();
});

imgList.addEventListener('click', (event) => {
  bigImg.src = event.target.src;
});
