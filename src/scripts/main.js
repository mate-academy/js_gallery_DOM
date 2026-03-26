'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

// eslint-disable-next-line no-shadow
thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  // Determine the anchor element regardless of whether img or a was clicked
  const link = target.tagName === 'IMG' ? target.closest('a') : target;

  if (!link || !link.href) {
    return;
  }

  largeImg.src = link.href;
  largeImg.alt = link.title;
});
