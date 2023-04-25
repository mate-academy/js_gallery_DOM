'use strict';

const mainImage = document.querySelector('#largeImg');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('gallery__img')) {
    mainImage.src = e.target.src;
  }

  if (e.target.classList.contains('list-item__link')) {
    mainImage.src = e.target.querySelector('.gallery__img').src;
  }
});
