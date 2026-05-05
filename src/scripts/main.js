'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();
  largeImg.src = link.href;
});
