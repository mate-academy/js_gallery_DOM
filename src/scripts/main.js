'use strict';

const largeImg = document.getElementById('largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (events) => {
  events.preventDefault();
  largeImg.src = events.target.closest('.list-item__link').href;
});
