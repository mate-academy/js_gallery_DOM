'use strict';

const images = document.querySelectorAll('.list-item');
const bigImage = document.getElementById('largeImg');

images.forEach(image => {
  image.addEventListener('click', (el) => {
    el.preventDefault();

    bigImage.src = image.querySelector('a').href;
  });
});
