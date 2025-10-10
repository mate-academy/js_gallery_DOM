'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

galleryList.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link || !largeImage) {
    return;
  }

  const image = link.querySelector('img');

  e.preventDefault();

  largeImage.src = link.href;
  largeImage.alt = image.alt;
});
