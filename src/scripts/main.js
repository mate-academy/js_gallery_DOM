'use strict';

const galleryList = document.querySelector('.gallery__list');

const largeImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (ev) => {
  const item = ev.target.closest('.list-item__link');

  ev.preventDefault();

  if (!item || !galleryList.contains(item)) {
    return false;
  };

  largeImage.src = item.href;
});
