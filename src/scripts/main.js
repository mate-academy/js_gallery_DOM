'use strict';

const mainImage = document.querySelector('#largeImg');
const listImg = document.querySelector('.gallery__list');

listImg.addEventListener('click', (event) => {
  event.preventDefault();

  mainImage.src = event.target.closest('.list-item__link').href;
});
