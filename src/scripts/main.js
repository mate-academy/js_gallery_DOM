'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbsContainer = document.querySelector('#thumbs');

thumbsContainer.addEventListener('click', (e) => {
  const thumbsLink = e.target.closest('a');

  if (!thumbsLink) {
    return [];
  }

  e.preventDefault();

  const newImg = thumbsLink.href;

  largeImg.src = newImg;
});
