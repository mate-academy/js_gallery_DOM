/* eslint-disable no-useless-return */
'use strict';

const galleryBlock = document.querySelector('.gallery');
const largeImg = galleryBlock.querySelector('#largeImg');

galleryBlock.addEventListener('click', e => {
  e.preventDefault();

  const thumbnailLink = e.target.closest('.list-item__link');

  if (!thumbnailLink) {
    return;
  }

  largeImg.src = thumbnailLink.href;
});
