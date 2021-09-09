'use strict';

const images = document.querySelectorAll('.gallery__img');
const mainImage = document.getElementById('largeImg');

for (const image of images) {
  image.addEventListener('click', () => {
    event.preventDefault();
    mainImage.src = image.src;
  });
};
