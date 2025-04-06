'use strict';

const mainImage = document.getElementById('largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (customEvent) => {
  customEvent.preventDefault();

  if (customEvent.target.tagName === 'A') {
    mainImage.src = customEvent.target.href;
  }

  if (customEvent.target.tagName === 'IMG') {
    mainImage.src = customEvent.target.parentElement.href;
  }
});
