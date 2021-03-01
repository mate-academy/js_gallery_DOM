'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

const clickHandler = function(e) {
  e.preventDefault();

  const clicked = e.target.closest('.list-item__link');

  largeImg.src = clicked.href;
};

galleryList.addEventListener('click', clickHandler);
