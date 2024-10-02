'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  if (target.tagName === 'IMG') {
    const newSrc = target.getAttribute('href');

    largeImg.src = newSrc;
  } else if (target.tagName === 'A') {
    const newSrc = target.getAttribute('href');

    largeImg.src = newSrc;
  }

  if (largeImg.src.startsWith(window.location.origin)) {
    largeImg.src = largeImg.src.replace(window.location.origin, '');
  }
});
