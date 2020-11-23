'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImage = document.getElementById('largeImg');

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const galleryImage = event.target.closest('.list-item__link');

  largeImage.src = galleryImage.href;
});
