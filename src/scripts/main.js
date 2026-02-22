'use strict';

const gallery = document.querySelector('.gallery__large-img');
const images = document.querySelector('.gallery__list');

if (gallery && images) {
  images.addEventListener('click', (e) => {
    const link = e.target.closest('.list-item__link');

    if (link) {
      e.preventDefault();

      const rawPath = link.getAttribute('href');
      const absoluteUrl = window.location.origin + rawPath;

      gallery.setAttribute('src', absoluteUrl);
    }
  });
}
