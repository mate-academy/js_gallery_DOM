'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.getElementById('largeImg');

  const thumbs = document.getElementById('thumbs');

  thumbs.addEventListener('click', (e) => {
    event.preventDefault();

    if (e.target.tagName === 'IMG' && e.target.parentElement.tagName === 'A') {
      const newSrc = e.target.parentElement.href;

      largeImg.src = newSrc;
    }
  });
});
