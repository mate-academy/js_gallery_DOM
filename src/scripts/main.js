'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }
  e.preventDefault();

  const bigSrc = link.href || link.dataset.preview;

  largeImg.src = bigSrc;
});
