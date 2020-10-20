'use strict';

const images = document.querySelectorAll('a');
const largeImg = document.getElementById('largeImg');

for (const img of images) {
  img.onclick = (event) => {
    event.preventDefault();

    largeImg.src = event.target.src;
  };
}
