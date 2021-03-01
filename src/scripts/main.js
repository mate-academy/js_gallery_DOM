'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (listenerEvent) => {
  listenerEvent.preventDefault();

  const link = listenerEvent.target.closest('.list-item__link');

  if (!link || !galleryList.contains(link)) {
    return;
  }

  largeImage.src = link.href;
});
