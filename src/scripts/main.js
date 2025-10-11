'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

if (galleryList || largeImage) {
  galleryList.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (!link) {
      return;
    }

    e.preventDefault();

    const image = link.querySelector('img');

    if (!image) {
      return;
    }

    largeImage.src = link.href;
    largeImage.alt = image.alt || 'Large Image';
  });
}
