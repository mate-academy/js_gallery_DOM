'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbImages = document.querySelectorAll('.list-item__link');

[...thumbImages].map(thumb => {
  thumb.addEventListener('click', (event) => {
    event.preventDefault();
    mainImage.src = thumb.href;
  });
});
