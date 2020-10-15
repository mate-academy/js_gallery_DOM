'use strict';

const imagesList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

imagesList.addEventListener('click', (event) => {
  const imageLink = event.target.closest('.list-item__link');

  event.preventDefault();

  if (!imageLink) {
    return;
  }

  largeImage.src = imageLink.href;
});
