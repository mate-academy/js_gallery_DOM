'use strict';

const images = document.querySelectorAll('a');
const mainImage = document.querySelector('#largeImg');

images.forEach(image => {
  image.addEventListener('click', click => {
    click.preventDefault();
    mainImage.src = image.href;
  });
});
