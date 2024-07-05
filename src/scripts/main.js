'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('gallery__thumb')) {
    const thumbPath = new URL(e.target.src);
    const bigImage = thumbPath.pathname
      .split('/')
      .at(-1)
      .split('-')
      .slice(0, 2)
      .join('-');

    const galleryImage = gallery.firstElementChild.firstElementChild;

    const newPathGallery = galleryImage.src.split('/');

    newPathGallery.splice(-1, 1, `${bigImage}.png`);
    galleryImage.src = newPathGallery.join('/');
  }
});
