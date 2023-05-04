'use strict';

const galleryList = document.querySelector('.gallery__list');

const largeImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (galleryList.contains(item)) {
    largeImage.src = item.href;
  }
});
