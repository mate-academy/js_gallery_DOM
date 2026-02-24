'use strict';

const gallery = document.querySelector('.gallery__list');
const preview = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }
  e.preventDefault();

  const newSrc = link.dataset.source || link.href;

  if (!newSrc) {
    return;
  }

  if (preview) {
    preview.src = newSrc;
  }
});
