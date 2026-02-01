'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  const link = event.target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();

  const path = link.href;

  const mainImage = document.querySelector('.gallery__large-img');

  mainImage.src = path;
});
