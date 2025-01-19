'use strict';

const mainImg = document.querySelector('#largeImg');
const galleryImgs = document.querySelectorAll('.gallery__thumb');

galleryImgs.forEach((image) => {
  image.addEventListener('click', (e) => {
    e.preventDefault();

    const newSrc = e.currentTarget.parentNode.href;

    mainImg.src = newSrc;
  });
});
