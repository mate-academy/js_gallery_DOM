'use strict';

const mainImg = document.getElementById('largeImg');
const listImg = document.querySelectorAll('.list-item__link');

for (const photo of listImg) {
  photo.addEventListener('click', (even) => {
    even.preventDefault();

    mainImg.src = photo.href;
  });
}
