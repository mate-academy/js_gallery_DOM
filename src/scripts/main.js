'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (ev) => {
  ev.preventDefault();

  const img = ev.target.closest('a');

  if (!img) {
    return;
  }

  largeImg.src = img.href;
});
