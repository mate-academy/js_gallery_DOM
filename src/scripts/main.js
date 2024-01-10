'use strict';

const largeImg = document.getElementById('largeImg');
const imgList = document.querySelector('.gallery__list');

// eslint-disable-next-line no-shadow
imgList.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  largeImg.src = item.href;
});
