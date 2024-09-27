'use strict';

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const currentImg = document.getElementById('largeImg');

  const item = clickEvent.target.closest('.list-item__link');

  if (!item || !galleryList.contains(item)) {
    return;
  }

  currentImg.src = item.href;
});
