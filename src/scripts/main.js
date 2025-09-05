'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const bigPicture = document.getElementById('largeImg');
  const smallPicture = document.getElementById('thumbs');

  smallPicture.addEventListener('click', (ev) => {
    ev.preventDefault();

    const link = ev.target.closest('a');

    if (!link) {
      return;
    }
    bigPicture.src = link.href;

    const thumbImg = link.querySelector('img');

    bigPicture.alt = thumbImg?.alt || 'main image';
  });
});
