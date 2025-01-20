'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.getElementById('largeImg');

  const thumbs = document.getElementById('thumbs');

  // eslint-disable-next-line no-shadow
  thumbs.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;

    if (target.tagName === 'IMG') {
      const link = target.closest('a');

      if (link) {
        largeImg.src = link.href;
      }
    }
  });
});
