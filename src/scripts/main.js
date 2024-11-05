'use strict';

const gallery = document.querySelector('.gallery');
const galleryImg = document.getElementById('largeImg');

gallery.addEventListener('click', (evt) => {
  evt.preventDefault();
});

gallery.addEventListener('click', (evt) => {
  const link = evt.target.closest('a');

  if (!link) {
    return;
  }

  galleryImg.src = link.href;
});
