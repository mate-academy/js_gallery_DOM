'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (events) => {
  const link = events.target.closest('a');

  if (!link) {
    return;
  }

  events.preventDefault();

  const href = link.href;

  const largeImg = document.getElementById('largeImg');

  largeImg.src = href;
});
