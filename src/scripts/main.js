'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (galleryEvent) => {
  const bigImage = document.querySelector('.gallery__large-img');
  const a = galleryEvent.target.closest('a');

  if (a !== null) {
    galleryEvent.preventDefault();
    bigImage.setAttribute('src', a.href);
  }
});
