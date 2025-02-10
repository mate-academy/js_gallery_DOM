'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const mainImage = document.querySelector('.gallery__large-img');

  gallery.addEventListener('click', (ev) => {
    const anchor = ev.target.closest('a');

    if (anchor) {
      ev.preventDefault();
      mainImage.setAttribute('src', anchor.href);
    }
  });
});
