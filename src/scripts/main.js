'use strict';

const thumbnailsContainer = document.querySelector('.gallery__list');

const largeImage = document.getElementById('largeImg');

thumbnailsContainer.addEventListener('click', (e) => {
  const closestLink = e.target.closest('.list-item__link');

  if (!closestLink) {
    return;
  }
  e.preventDefault();

  const fullLargeImg = closestLink.href;

  largeImage.src = fullLargeImg;
});
