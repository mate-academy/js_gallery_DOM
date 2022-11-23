'use strict';

const images = document.querySelectorAll('.list-item');
const bigImage = document.getElementById('largeImg');

images.forEach(image => {
  image.addEventListener('click', (e) => {
    e.preventDefault();

    bigImage.src = image.querySelector('a').href;
  });
});
