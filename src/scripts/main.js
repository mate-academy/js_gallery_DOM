'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = gallery.querySelector('#largeImg');
const smallImg = gallery.querySelector('.gallery__list');

// eslint-disable-next-line no-shadow
smallImg.addEventListener('click', (event) => {
  event.preventDefault();

  const img = event.target.closest('.list-item__link');

  if (!img) {
    return;
  }

  const link = img.closest('a');

  largeImg.src = link.href;
});
