'use strict';

const gallery = document.querySelector('.gallery');
const galleryMainImage = gallery.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();

  galleryMainImage.src = link.href;
});
