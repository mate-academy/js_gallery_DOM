'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  e.preventDefault();

  if (!link) {
    return;
  }

  const galleryImg = gallery.querySelector('.gallery__large-img');

  galleryImg.src = link.href;
});
