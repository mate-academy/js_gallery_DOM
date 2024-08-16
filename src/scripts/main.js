'use strict';

const gallery = document.querySelector('.gallery');

const bigImage = document.getElementById('largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const galleryImg = e.target.closest('.list-item__link');

  bigImage.src = galleryImg.href;
});
