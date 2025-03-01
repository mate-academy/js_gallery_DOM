'use strict';

const largeIm = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (eve) => {
  eve.preventDefault();

  const target = eve.target;

  if (target) {
    largeIm.src = target.src;
  }
});
