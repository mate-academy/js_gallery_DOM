'use strict';

const imagesList = document.body.querySelector('.gallery__list');
const mainImg = document.body.querySelector('#largeImg');

imagesList.addEventListener('click', (e) => {
  e.preventDefault();

  const closestElement = e.target.closest('.list-item__link');

  mainImg.src = closestElement.href;
});
