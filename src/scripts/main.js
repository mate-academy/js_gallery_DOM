'use strict';

const galleryList = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (ev) => {
  const item = ev.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  ev.preventDefault();
  mainImage.src = item.href;
});
