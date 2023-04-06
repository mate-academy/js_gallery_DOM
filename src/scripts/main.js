'use strict';

const gallery = document.querySelector('.gallery__list');

const largeImg = document.querySelector('#largeImg');
const largeImgHeight = getComputedStyle(largeImg).height;

// eslint-disable-next-line no-shadow
gallery.addEventListener('click', (event) => {
  event.preventDefault();
  largeImg.src = event.target.src;
  largeImg.style.height = largeImgHeight;
});
