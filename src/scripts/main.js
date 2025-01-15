'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

if (galleryList) {
  galleryList.addEventListener('click', (e) => {
    e.preventDefault();

    const previewImg = e.target.closest('.list-item__link');

    if (previewImg && mainImg) {
      mainImg.src = previewImg.href;
    }
  });
}
