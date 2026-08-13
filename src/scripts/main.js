'use strict';

const galleryList = document.querySelector('.gallery__list');
const bigImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  const clickedItem = e.target.closest('.gallery__img');

  if (!clickedItem) {
    return;
  }

  e.preventDefault();

  bigImage.src = clickedItem.parentElement.href;
});
