'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  // eslint-disable-next-line no-shadow
  gallery.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target.closest('a');

    if (!target) {
      return;
    }

    const newSrc = target.getAttribute('href');

    largeImg.src = newSrc;
  });
});
