'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const listItem = e.target.closest('.list-item__link');

  if (!listItem || !mainImage) {
    return;
  }

  mainImage.src = listItem.href;
});
