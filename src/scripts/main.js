'use strict';

const listImages = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

listImages.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.closest('.list-item__link')) {
    largeImg.src = e.target.closest('.list-item__link').href;
  }
});
