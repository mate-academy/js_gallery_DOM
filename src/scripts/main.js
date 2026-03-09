'use strict';

const smallImages = document.querySelectorAll('.gallery__thumb');
const largeImage = document.querySelector('#largeImg');

smallImages.forEach((image) => {
  image.addEventListener('click', (change) => {
    change.preventDefault();

    const parentLink = image.parentElement;

    largeImage.src = parentLink.href;
  });
});
