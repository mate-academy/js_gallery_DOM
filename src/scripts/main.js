'use strict';

const mainImg = document.querySelector('#largeImg');
const smallImages = document.querySelectorAll('.gallery__thumb');

smallImages.forEach(img => {
  img.addEventListener('click', (a) => {
    a.preventDefault();
    mainImg.src = a.target.parentElement.href;
  });
});
