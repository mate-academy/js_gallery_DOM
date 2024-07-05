'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('gallery__thumb')) {
    const thumbPath = new URL(e.target.src);
    const bigImage = thumbPath.pathname
      .split('-')
      .slice(0, 2)
      .join('-')
      .slice(1);

    const galleryImage = gallery.firstElementChild.firstElementChild;

    const newPathGallery = galleryImage.src.split('/');

    newPathGallery.splice(-1, 1, `${bigImage}.png`);
    galleryImage.src = newPathGallery.join('/');
  }
});
