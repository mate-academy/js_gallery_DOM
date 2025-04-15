'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.getElementById('largeImg');
  const thumbs = document.getElementById('thumbs');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    let link = null;

    if (e.target.tagName === 'IMG') {
      link = e.target.closest('a');
    } else if (e.target.tagName === 'A') {
      link = e.target;
    }

    if (link) {
      const newSrc = link.getAttribute('href');
      const newAlt = link.getAttribute('title');

      largeImg.setAttribute('src', newSrc);
      largeImg.setAttribute('alt', newAlt);
    }
  });
});
