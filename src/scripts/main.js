'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();

  const thumbs = document.querySelector('.gallery__list');

  if (!thumbs) {
    return;
  }

  thumbs.addEventListener('click', (evt) => {
    evt.preventDefault();

    const link = evt.target.closest('a');

    if (!link || !thumbs.contains(link)) {
      return;
    }

    const img = document.querySelector('.gallery__large-img');

    if (!img) {
      return;
    }

    img.src = link.href;
  });
});
