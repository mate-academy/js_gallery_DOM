'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const mainImage = document.querySelector('.main-image');

  if (gallery && mainImage) {
    gallery.addEventListener('click', (e) => {
      e.preventDefault();

      const target = e.target.closest('a');

      if (target && target.querySelector('img')) {
        mainImage.src = target.href;
      }
    });
  }
});
