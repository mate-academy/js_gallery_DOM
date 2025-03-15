'use strict';

const gallery = document.querySelector('.gallery');
const largeImage = document.getElementById('largeImg');

gallery.addEventListener('click', function (ev) {
  ev.preventDefault();

  const galleryImg = ev.target.closest('.list-item__link');

  largeImage.src = galleryImg.href;
});
