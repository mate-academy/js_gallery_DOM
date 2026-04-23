'use strict';

const bigI = document.querySelector('#largeImg');
const small = document.querySelectorAll('.gallery__img');

small.forEach((img) => {
  img.addEventListener('click', () => {
    if (bigI) {
      bigI.src = img.src;
    }
  });
});
