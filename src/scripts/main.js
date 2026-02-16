'use strict';

const gallery = document.querySelector('.gallery__list');

const mainImage = document.getElementById('largeImg');

if (gallery) {
  gallery.addEventListener('click', (e) => {
    const link = e.target.closest('.list-item__link');

    if (!link) {
      return;
    }

    if (!mainImage) {
      return;
    }

    e.preventDefault();

    mainImage.src = link.href;
  });
}
