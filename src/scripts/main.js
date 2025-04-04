'use strict';

const image = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

image.addEventListener('click', (events) => {
  const link = events.target.closest('a');

  if (!link) {
    return;
  }

  events.preventDefault();

  const href = link.href;

  largeImg.src = href;
});
