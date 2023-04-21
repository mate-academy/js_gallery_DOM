'use strict';

const largeImage = document.getElementById('largeImg');
const thumbsGallery = document.querySelector('.gallery__list');

thumbsGallery.addEventListener('click', (currEvent) => {
  currEvent.preventDefault();

  if (currEvent.target.classList.contains('gallery__img')) {
    largeImage.src = currEvent.target.parentNode.href;
  }
});
