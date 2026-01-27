'use strict';

const container = document.querySelector('.gallery');

container.addEventListener('click', (events) => {
  const img = events.target.closest('img');

  if (img === null) {
    return;
  }

  const largeImg = document.querySelector('.gallery__large-img');

  largeImg.src = img.src;
});
