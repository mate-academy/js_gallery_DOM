'use strict';

const bigImage = document.querySelector('#largeImg');

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const element = e.target.closest('.list-item__link');

  bigImage.src = element.href;
});
