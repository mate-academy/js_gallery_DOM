'use strict';

const galleryList = document.querySelector('.gallery__list');
const image = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item || !galleryList.contains(item)) {
    return;
  }

  image.src = item.href;
});
