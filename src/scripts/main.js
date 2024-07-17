'use strict';

const mainImg = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const linkToSmallPhoto = event.target.closest('a');

  if (linkToSmallPhoto) {
    mainImg.src = linkToSmallPhoto;
  }
});
