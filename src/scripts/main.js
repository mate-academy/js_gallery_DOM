'use strict';

const galleryList = document.querySelector('.gallery__list');
const bigImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  const clickedLink = e.target.closest('a');

  if (!clickedLink) {
    return;
  }

  e.preventDefault();

  bigImage.src = clickedLink.href;
});
