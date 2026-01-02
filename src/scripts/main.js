'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('a');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
