'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const galleryMainImage = gallery.querySelector('#largeImg');

  gallery.addEventListener('click', (e) => {
    const itemGallery = e.target.closest('.list-item');

    if (!itemGallery) {
      return;
    }

    const itemGalleryLink = itemGallery.querySelector('.list-item__link');

    e.preventDefault();
    galleryMainImage.src = itemGalleryLink.getAttribute('href');
  });
});
