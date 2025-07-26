'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImage = document.getElementById('largeImg');
  const thumbs = document.getElementById('thumbs');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    const link = e.target.closest('a');

    if (!link || !thumbs.contains(link)) {
      return;
    }

    const newSrc = new URL(link.getAttribute('href'), location.origin).href;

    largeImage.src = newSrc;
  });
});
