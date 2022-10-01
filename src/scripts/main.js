'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('.gallery__thumb');
  const targetSrc = target.closest('.list-item__link').href;

  if (!target || !galleryList.contains(target)) {
    return;
  }

  largeImg.src = targetSrc;
});
