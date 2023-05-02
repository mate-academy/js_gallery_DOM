/* eslint-disable no-useless-return */
'use strict';

const galleryBlock = document.querySelector('.gallery');
const largeImg = galleryBlock.querySelector('#largeImg');

galleryBlock.addEventListener('click', e => {
  e.preventDefault();

  const a = e.target.closest('a');

  if (!a) {
    return;
  }

  const img = a.href;

  largeImg.src = img;
});
