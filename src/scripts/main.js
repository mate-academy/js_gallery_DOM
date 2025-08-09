'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    let link;

    if (e.target.tagName === 'IMG') {
      link = e.target.closest('a');
    } else if (e.target.tagName === 'A') {
      link = e.target;
    }

    if (!link) {
      return;
    }

    const newSrc = link.getAttribute('href');
    const newAlt = link.getAttribute('title') || 'main image';

    largeImg.src = newSrc;
    largeImg.alt = newAlt;
  });
});
