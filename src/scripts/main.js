'use strict';

const largeImage = document.getElementById('largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (currentEvent) => {
  const link = currentEvent.target.closest('.list-item__link');

  if (link !== null) {
    largeImage.src = link.href;
  }

  currentEvent.preventDefault();
});
