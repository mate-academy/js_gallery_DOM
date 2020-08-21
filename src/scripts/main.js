'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();
  largeImage.src = event.target.src.replace('-thumb.jpeg', '.png');
});
