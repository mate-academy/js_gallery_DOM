'use strict';

const images = document.querySelectorAll('img');
const mainImg = document.querySelector('#largeImg');
const imagesArray = Array.from(images);

imagesArray.forEach((image) => {
  image.addEventListener('click', (el) => {
    el.preventDefault();
    mainImg.src = el.target.closest('.list-item__link').href;
  });
});
