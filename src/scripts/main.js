'use strict';

const thumbImages = document.querySelectorAll('.list-item__link');
const mainImage = document.getElementById('largeImg');

thumbImages.forEach(thumbImage => thumbImage.addEventListener('click', (e) => {
  e.preventDefault();

  mainImage.src = thumbImage.href;
}));
