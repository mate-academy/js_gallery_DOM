'use strict';

const galleryList = document.querySelector('.gallery__list');
const bigImg = document.querySelector('.gallery__large-img');

// eslint-disable-next-line no-shadow
galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  bigImg.src = link.href;
});
