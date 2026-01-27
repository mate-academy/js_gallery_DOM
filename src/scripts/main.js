'use strict';

const container = document.querySelector('.gallery');

container.addEventListener('click', (events) => {
  events.preventDefault();

  const a = events.target.closest('a');

  if (a === null) {
    return;
  }

  const thatImg = a.querySelector('img');

  const largeImg = document.querySelector('.gallery__large-img');

  largeImg.src = thatImg.src;
});
