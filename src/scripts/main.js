'use strict';

const thumbsContainer = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

thumbsContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const linkElement = e.target.closest('a');

  if (linkElement) {
    const newSrc = linkElement.href;

    largeImage.src = newSrc;
  }
});
