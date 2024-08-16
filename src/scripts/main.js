'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG' || target.tagName === 'A') {
    const link = target.closest('a');

    if (link) {
      largeImg.src = link.href;
    }
  }
});
