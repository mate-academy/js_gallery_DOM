'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.gallery__img');

gallery.addEventListener('click', function (eve) {
  if (eve.target.tagName === 'IMG') {
    mainImage.src = eve.target.src;
  } else {
    mainImage.src = eve.target.href;
  }
});
