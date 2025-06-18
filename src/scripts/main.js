'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    const link = e.target.closest('a');

    if (!link || !thumbs.contains(link)) {
      return;
    }

    const newSrc = link.getAttribute('href');
    const newAlt = link.getAttribute('title');

    largeImg.src = newSrc;
    largeImg.alt = newAlt;
  });
});
