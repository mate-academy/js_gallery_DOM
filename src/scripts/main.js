'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.getElementById('largeImg');
const galleryList = gallery.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();
  largeImg.src = e.target.closest('.list-item__link').href;
});
