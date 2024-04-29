'use strict';

const bigImage = document.querySelector('#largeImg');
const imagesList = document.querySelector('.gallery__list');

imagesList.addEventListener('click', photoChange);

function photoChange(e) {
  e.preventDefault();

  const currentImage = e.target.closest('.list-item__link');

  bigImage.src = currentImage.href;
}
