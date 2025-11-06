'use strict';

const images = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

// eslint-disable-next-line no-shadow
images.addEventListener('click', (event) => {
  const link = event.target.closest('.list-item');

  if (!link) {
    return;
  }

  event.preventDefault();

  const anchor = link.querySelector('a');

  largeImg.src = anchor.href;

  largeImg.setAttribute('src', anchor);
});
