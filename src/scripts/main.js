'use strict';

const thumbsElements = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbsElements.addEventListener('click', (e) => {
  const thumbsLink = e.target.closest('a');

  if (!thumbsLink) {
    return;
  }
  e.preventDefault();

  const newImage = thumbsLink.href;

  largeImg.src = newImage;
});
