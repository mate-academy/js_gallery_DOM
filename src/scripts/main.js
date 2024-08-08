'use strict';

const mainImg = document.getElementById('largeImg');
const imgList = document.querySelector('.gallery__list');

imgList.addEventListener('click', (even) => {
  even.preventDefault();

  const image = even.target.closest('.list-item__link');

  if (image) {
    mainImg.src = image.href;
  }
});
