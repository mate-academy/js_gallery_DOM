'use strict';

const galleryList = document.querySelector('.gallery__list');
const mainPic = document.getElementById('largeImg');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();
  mainPic.src = e.target.src;
});
