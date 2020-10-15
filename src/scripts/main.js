'use strict';

const images = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

images.addEventListener('click', (event) => {
  const imageLink = event.target.closest('.list-item__link');

  event.preventDefault();

  if (!imageLink) {
    return;
  }

  largeImage.src = imageLink.href;
});
