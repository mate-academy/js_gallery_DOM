'use strict';

const largeImage = document.querySelector('.gallery__large-img');
const imagesList = document.querySelector('.gallery__list');

imagesList.addEventListener('click', (event) => {
  event.preventDefault();

  const closestLink = event.target.closest('.list-item__link');

  largeImage.src = closestLink.href;
});
