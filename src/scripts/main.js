'use strict';

const imgList = document.querySelector('.gallery__list');
const bigImg = document.querySelector('img');

imgList.addEventListener('click', (event) => {
  event.preventDefault();

  bigImg.src = event.target.parentElement.href;
});
