'use strict';

const largeImage = document.getElementById('largeImg');

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  const target = e.target.closest('li');

  if (!target) {
    return;
  }

  if (target.querySelector('img') === null) {
    return;
  }

  const imgSrc = target.querySelector('img').src;

  largeImage.src = imgSrc;
});
