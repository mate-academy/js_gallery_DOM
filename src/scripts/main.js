'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryOfThumbs = document.querySelector('.gallery__list');

galleryOfThumbs.addEventListener('click', (action) => {
  action.preventDefault();

  const item = action.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImg.src = item.href;
});
