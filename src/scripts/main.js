'use strict';

const photos = document.querySelector('#thumbs');
const largePhoto = document.querySelector('#largeImg');

photos.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  largePhoto.src = link.href;
});
