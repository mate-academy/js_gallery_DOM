'use strict';

const list = document.querySelector('.gallery__list');
const bigImage = document.querySelector('#largeImg');

const swapImg = (e) => {
  e.preventDefault();
  bigImage.src = e.target.closest('.list-item__link').href;
};

list.addEventListener('click', swapImg);
