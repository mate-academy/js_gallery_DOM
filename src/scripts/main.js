'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbsContainer = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbsContainer.addEventListener('click', (evt) => {
    const target = evt.target;
    const anchorElement = target.closest('a');

    if (anchorElement && anchorElement.hasAttribute('href')) {
      evt.preventDefault();

      const newImageSrc = anchorElement.getAttribute('href');

      largeImg.src = newImageSrc;
      largeImg.alt = anchorElement.getAttribute('title');
    }
  });
});
