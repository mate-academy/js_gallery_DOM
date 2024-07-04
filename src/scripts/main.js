'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.getElementById('largeImg');
  const thumbsContainer = document.getElementById('thumbs');

  thumbsContainer.addEventListener('click', (evt) => {
    evt.preventDefault();

    let target = evt.target;

    if (target.tagName === 'IMG') {
      target = target.parentElement;
    }

    if (target.tagName === 'A') {
      const newSrc = target.getAttribute('href');

      largeImg.setAttribute('src', newSrc);
    }
  });
});
