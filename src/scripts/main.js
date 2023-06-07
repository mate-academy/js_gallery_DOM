'use strict';

const mainImg = document.querySelector('#largeImg');
const smallImages = document.querySelectorAll('.gallery__thumb');

smallImages.forEach(img => {
  img.addEventListener('click', (e) => {
    e.preventDefault();
    mainImg.src = e.target.parentElement.href;
  });
});
