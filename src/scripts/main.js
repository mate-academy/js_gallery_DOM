'use strict';

const nav = document.querySelector('.gallery__list');
const imgLarge = document.querySelector('.gallery__large-img');

nav.addEventListener('click', (events) => {
  events.preventDefault();

  const link = events.target.closest('.gallery__thumb');

  if (!link) {
    return;
  }

  imgLarge.src = link.src;
});
