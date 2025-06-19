'use strict';

const photos = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

photos.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();

  largeImg.setAttribute('src', link.href);
});
