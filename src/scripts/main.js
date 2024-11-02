'use strict';

const largeImg = document.getElementById('largeImg');
const thumbsContainer = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
thumbsContainer.addEventListener('click', (event) => {
  const link = event.target.closest('a');

  if (!link) {
    return;
  }

  event.preventDefault();

  largeImg.src = link.href;
});
