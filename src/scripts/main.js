'use strict';

const mainImage = document.querySelector('#largeImg');

const link = document.querySelectorAll('a');

link.forEach((elem) => {
  elem.addEventListener('click', (eve) => {
    mainImage.src = elem.href;
    eve.preventDefault();
  });
});
