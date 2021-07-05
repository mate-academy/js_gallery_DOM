'use strict';

const images = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

images.addEventListener('click', (click) => {
  const link = click.target.closest('a');

  if (!link) {
    return;
  }

  largeImg.setAttribute('src', link.href);
  click.preventDefault();
});
