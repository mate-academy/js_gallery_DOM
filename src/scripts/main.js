'use strict';

const images = document.querySelectorAll('.gallery__img');
const bigImage = document.getElementById('largeImg');

for (const image of images) {
  image.addEventListener('click', () => {
    event.preventDefault();
    bigImage.src = image.src;
  });
}
