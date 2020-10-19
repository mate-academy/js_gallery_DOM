'use strict';

const galeryList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

galeryList.addEventListener('click', (event) => {
  event.preventDefault();

  largeImage.src = event.target.closest('.list-item__link').href;
});
