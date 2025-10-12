'use strict';

const bigImage = document.querySelector('#largeImg');
const container = document.querySelector('.gallery__list');

container.addEventListener('click', (events) => {
  const link = events.target.closest('a');

  if (!link) {
    return;
  }

  events.preventDefault();
  bigImage.src = link.href;
  bigImage.alt = link.title;
});
