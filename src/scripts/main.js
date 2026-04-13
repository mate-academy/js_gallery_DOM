'use strict';

const container = document.querySelector('.gallery');
const mainImage = document.querySelector('img');

container.addEventListener('click', (evt) => {
  const link = evt.target.closest('a');

  if (!link) {
    return;
  }

  evt.preventDefault();

  const newSrc = link.href;

  mainImage.src = newSrc;
});
