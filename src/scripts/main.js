'use strict';

const mainImg = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (evnt) => {
  evnt.preventDefault();

  const linkToSmallPhoto = evnt.target.closest('a');

  if (linkToSmallPhoto) {
    mainImg.src = linkToSmallPhoto.href;
  }
});
