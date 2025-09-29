'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImage = document.getElementById('largeImg');
  const galleries = document.querySelectorAll('.gallery__list');

  galleries.forEach((ul) => {
    ul.addEventListener('click', (e) => {
      const anchor = e.target.closest('a');
      const img = e.target.closest('img');
      const clickedEl = anchor || img;

      if (!anchor && !img) {
        return;
      }

      if (!largeImage || !ul.contains(clickedEl)) {
        return;
      }

      if (anchor) {
        e.preventDefault();
      }

      const href = anchor
        ? new URL(anchor.getAttribute('href'), window.location).href
        : img && img.src;

      if (!href) {
        return;
      }

      largeImage.src = href;

      largeImage.alt =
        (anchor && anchor.getAttribute('title')) ||
        (img && img.getAttribute('alt')) ||
        '';
    });
  });
});
