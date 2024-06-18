'use strict';

const gallerylist = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

gallerylist.addEventListener('click', (e) => {
  e.preventDefault();

  const thumb = e.target.closest('.list-item__link');

  if (!thumb) {
    return;
  }

  const newSrc = thumb.href;

  largeImg.setAttribute('src', newSrc);
});
