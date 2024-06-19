'use strict';

const mainPhoto = document.querySelector('#largeImg');
const imagesContainers = document.querySelectorAll('.list-item');

imagesContainers.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    const imageSrc = e.target.parentElement.href;

    if (mainPhoto) {
      mainPhoto.src = imageSrc;
    }
  });
});
