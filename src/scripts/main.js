'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('largeImage');
  const thumbnails = document.querySelectorAll('.thumb');

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', (e) => {
      e.preventDefault();

      const target =
        e.target.tagName === 'IMG'
          ? e.target.parentElement
          : e.target;

      const nSrc = target.getAttribute('href');

      if (nSrc) {
        mainImage.src = nSrc;
      }
    });
  });
});
