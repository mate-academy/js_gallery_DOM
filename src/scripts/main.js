'use strict';

const mainImage = document.querySelector('.gallery__img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  e.preventDefault();

  if (!link) {
    return;
  }

  mainImage.src = link.href;
});
