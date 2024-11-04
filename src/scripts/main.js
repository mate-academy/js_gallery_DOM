'use strict';

const gallery = document.querySelector('.gallery');
const largeImage = document.getElementById('largeImg');

// eslint-disable-next-line no-shadow
gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('a');

  if (!link) {
    return;
  }

  const largeImageURL = link.getAttribute('href');

  largeImage.src = largeImageURL;
});
