'use strict';

const selectedImage = document.getElementById('largeImg');
const images = document.querySelectorAll('a');

for (const image of images) {
  image.addEventListener('click', (e) => {
    e.preventDefault();

    selectedImage.setAttribute('src', image.getAttribute('href'));
  });
}
