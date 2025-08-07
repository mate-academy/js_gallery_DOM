'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.querySelector('#largeImg');
  const gallery = document.querySelector('.gallery');

  gallery.addEventListener('click', (e) => {
    const link = e.target.closest('.list-item__link');

    if (!link) {
      return;
    }

    e.preventDefault();

    const thumbImg = link.querySelector('.gallery__thumb');

    if (thumbImg && thumbImg.src) {
      largeImg.src = thumbImg.src;
    }
  });
});
