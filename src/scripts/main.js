'use strict';

const gallery = document.querySelector('.gallery__list');
const bigImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();

  bigImage.src = link.getAttribute('href');
  bigImage.alt = link.getAttribute('title');
});
