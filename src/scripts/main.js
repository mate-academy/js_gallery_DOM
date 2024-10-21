'use strict';

const link = document.querySelectorAll('.list-item__link');


document.addEventListener('DOMContentLoaded', () => {
  const bigImg = document.querySelector('#largeImg');
  const images = document.querySelectorAll('.gallery__img.gallery__thumb');
  const link = document.querySelectorAll('.list-item__link');

  link.forEach((elem) => {
    elem.addEventListener('click', (obj) => {
      obj.preventDefault();

      images.forEach((image) => {
        image.addEventListener('click', () => {
          bigImg.setAttribute('src', elem.getAttribute('href'));
        });
       });
    });
  });
});
