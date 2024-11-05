'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.getElementById('largeImg');
  const thumbs = document.getElementById('thumbs');

  // eslint-disable-next-line no-shadow
  thumbs.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;
    const link = target.closest('a');

    if (link) {
      const newSrc = link.getAttribute('href');

      largeImg.setAttribute('src', newSrc);
    }
  });
});
