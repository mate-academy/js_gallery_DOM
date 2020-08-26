'use strict';

const galleryList = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();
});

galleryList.addEventListener('click', (event) => {
  mainImg.src = event.target.src;
});
