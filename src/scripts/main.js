'use strict';

const largeImage = document.querySelector('#largeImg');
const galleryImages = document.querySelector('.gallery__list');

galleryImages.addEventListener('click', (e) => {
  const target = e.target;
  const link =
    target.tagName === 'IMG'
      ? target.closest('a')
      : target.tagName === 'A'
        ? target
        : null;

  if (!link) {
    return;
  }
  e.preventDefault();

  const bigUrl = link.href;

  largeImage.src = bigUrl;
});
