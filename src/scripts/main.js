'use strict';

const container = document.querySelector('.gallery');
const mainImg = document.querySelector('.gallery__large-img');

container.addEventListener('click', (move) => {
  const link = move.target.closest('a');

  if (!link) {
    return;
  }

  const img = link.querySelector('img');

  mainImg.src = img.src;
});
