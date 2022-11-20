'use strict';

const largeImgEl = document.querySelector('.gallery__large-img');

const galleryListEl = document.querySelector('.gallery__list');

galleryListEl.addEventListener('click', (e) => {
  e.preventDefault();

  const clicked = e.target;

  const neededImg = clicked.closest('.list-item__link').href;

  largeImgEl.src = neededImg;
});
