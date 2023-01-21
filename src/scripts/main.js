'use strict';

const images = document.querySelectorAll('a');
const largeImage = document.getElementById('largeImg');

images.forEach(image => {
  image.addEventListener('click', e => {
    e.preventDefault();
    largeImage.src = image.href;
  });
});
