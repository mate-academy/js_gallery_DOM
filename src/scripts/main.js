'use strict';

const img = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

img.addEventListener('click', (events) => {
  const targeted = events.target.closest('.list-item');

  if (!targeted) {
    return;
  }

  events.preventDefault();

  largeImg.src = targeted.querySelector('a').href;
});
