'use strict';

const images = document.querySelectorAll('a');
const largeImg = document.getElementById('largeImg');

for (const img of images) {
  img.addEventListener('click', (event) => {
    event.preventDefault();

    largeImg.src = event.target.src;
  });
}
