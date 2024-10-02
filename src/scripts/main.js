'use strict';

const mainImg = document.getElementById('largeImg');
const galleryList = document.getElementById('thumbs');

const images = document.querySelectorAll('.gallery__thumb');
const links = document.querySelectorAll('.list-item__link');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  images.forEach((image) => {
    if (image === e.target) {
      mainImg.src = image.closest('.list-item__link').href;
    }
  });

  links.forEach((link) => {
    if (link === e.target) {
      mainImg.src = link.href;
    }
  });
});
