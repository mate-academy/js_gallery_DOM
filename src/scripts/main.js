'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const mainImage = document.querySelector('#largeImg');

  gallery.addEventListener('click', (e) => {
    const thumbnail =
      e.target.tagName === 'img'
        ? e.target
        : e.target.tagName === 'a' && e.target.querySelector('img');

    if (thumbnail) {
      mainImage.src = thumbnail.src;
    }
  });
});
