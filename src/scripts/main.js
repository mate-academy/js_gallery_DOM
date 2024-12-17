'use strict';

const images = document.querySelectorAll('a');
const mainImg = document.querySelector('#largeImg');

const imagesArray = Array.from(images);

imagesArray.forEach((image) => {
  image.addEventListener('click', (el) => {
    el.preventDefault();
    mainImg.src = image.href;
  });
});
