'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target.tagName === 'IMG') {
      target = target.closest('a');
    }

    if (target && target.tagName === 'A') {
      const newSrc = target.getAttribute('href');

      largeImg.src = newSrc;
    }
  });
});
