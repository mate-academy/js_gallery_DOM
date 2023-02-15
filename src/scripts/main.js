'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  const thumbnail = e.target.closest('a');

  if (!thumbnail) {
    return;
  }

  largeImage.src = thumbnail.href;
  largeImage.alt = thumbnail.alt;

  e.preventDefault();
});
