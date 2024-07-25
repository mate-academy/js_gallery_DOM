'use strict';

const galleryList = document.querySelector('.gallery__list');
const currentImage = document.querySelector('.gallery__large-img');

const initGalleryWithPhoto = () => {
  galleryList.addEventListener('click', (e) => {
    e.preventDefault();

    const link = e.target.closest('.list-item .list-item__link');

    if (!link) {
      return;
    }

    currentImage.src = link.href;
  });
};

document.addEventListener('DOMContentLoaded', initGalleryWithPhoto);
