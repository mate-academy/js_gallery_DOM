'use strict';

const mainPhoto = document.querySelector('#largeImg');
const images = document.querySelectorAll('.list-item');

images.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    const imageSrc = e.target.parentElement.href;

    mainPhoto.src = imageSrc;
  });
});
