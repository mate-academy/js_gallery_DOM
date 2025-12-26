'use strict';

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item');

  if (!item) {
    return;
  }

  const link = item.querySelector('a');

  if (!link) {
    return;
  }

  const bigUrl = link.href;

  if (!bigUrl) {
    return;
  }

  const mainImg = document.querySelector('.gallery__thumb img');

  mainImg.src = bigUrl;
});
