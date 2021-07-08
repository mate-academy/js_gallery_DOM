'use strict';

const bigImage = document.querySelector('.gallery__large-img');
const images = document.querySelectorAll('.gallery__thumb');

for (const image of images) {
  image.addEventListener('click', (ev) => {
    ev.preventDefault();

    bigImage.src = image.src;
  });
}
