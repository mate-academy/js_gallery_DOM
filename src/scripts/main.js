'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbs.addEventListener('click', (eventClick) => {
    eventClick.preventDefault();

    let target = eventClick.target;

    if (target.tagName === 'IMG') {
      target = target.parentElement;
    }

    if (target.tagName === 'A') {
      const newSrc = target.getAttribute('href');

      largeImg.setAttribute('src', newSrc);
    }
  });
});
