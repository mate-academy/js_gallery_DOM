'use strict';

const galeryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

galeryList.addEventListener('click', (e) => {
  e.preventDefault();

  const img = e.target.closest('a');

  largeImg.src = img.href;
});
