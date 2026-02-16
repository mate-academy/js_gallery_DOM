'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const gallery = document.querySelector('.gallery__list');

if (mainImage) {
  gallery.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');

    if (!anchor) {
      return anchor;
    }

    e.preventDefault();
    mainImage.src = anchor.href;
  });
}
