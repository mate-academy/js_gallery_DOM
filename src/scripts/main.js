'use strict';

const largeImg = document.getElementById('largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (events) => {
  events.preventDefault();

  const link = events.target.closest('.list-item__link');

  largeImg.src = link.href;
});
