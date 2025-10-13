'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.querySelector('.gallery__list');

  if (!thumbs) {
    return;
  }

  thumbs.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (!link || !thumbs.contains(link)) {
      return;
    }

    e.preventDefault();

    const img = document.getElementById('largeImg');

    if (!img) {
      return;
    }

    img.src = link.href;
    img.alt = link.getAttribute('title') || 'image';
  });
});
