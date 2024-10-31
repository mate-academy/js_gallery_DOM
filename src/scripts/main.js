'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const mainImage = document.querySelector('.main-image img');

  gallery.addEventListener('click', (e) => {
    let target = e.target;

    if (target.tagName === 'A') {
      target = target.querySelector('img');
    }

    if (target && target.tagName === 'IMG') {
      mainImage.src = target.src;
    }
  });
});
