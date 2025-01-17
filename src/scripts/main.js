'use strict';

const thumbsContainer = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbsContainer.addEventListener('click', (e) => {
  const thumbsLink = e.target.closest('a');

  if (!thumbsLink) {
    return [];
  }
  event.preventDefault();

  const newImageSrc = thumbsLink.href;

  largeImg.src = newImageSrc;
});
