'use strict';

// Main application logic goes here
const click = document.querySelector('.gallery');

click.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.closest('a');

  if (!link) {
    return;
  }
  e.preventDefault();

  const largeImage = document.querySelector('.gallery__large-img');

  largeImage.src = link.href;
  largeImage.alt = link.querySelector('img').alt;
});
