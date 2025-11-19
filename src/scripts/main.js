'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const thumbs = document.querySelector('.gallery__list');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (link === null) {
    return;
  }

  largeImg.src = link.href;
});
