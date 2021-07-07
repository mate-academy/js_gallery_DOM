'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const imagesList = document.querySelector('.gallery__list');

imagesList.addEventListener('click', (event) => {
  event.preventDefault();

  const closestParent = event.target.closest('.list-item__link');

  if (!closestParent || !imagesList.contains(closestParent)) {
    return;
  }

  largeImg.src = closestParent.href;
});
