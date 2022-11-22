'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const galleryImg = document.querySelector('.gallery__list');

galleryImg.addEventListener('click', e => {
  const item = e.target.closest('.list-item__link');

  e.preventDefault();

  mainImg.src = item.href;
});
