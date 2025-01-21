'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbsContainer = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  // eslint-disable-next-line no-shadow
  thumbsContainer.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;

    if (target.tagName === 'IMG' || target.tagName === 'A') {
      const linkElement = target.tagName === 'A' ? target : target.closest('a');

      largeImg.src = linkElement.href;
    }
  });
});
