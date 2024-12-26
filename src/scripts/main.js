'use strict';

const largeImage = document.getElementById('largeImg');
const listGallery = document.querySelector('.gallery__list');

listGallery.addEventListener('click', (currentElement) => {
  const link = currentElement.target.closest('a');

  if (link !== null) {
    largeImage.src = link.href;
  }

  currentElement.preventDefault();
});
