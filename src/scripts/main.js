'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  const listItem = e.target.closest('a');

  if (!listItem) {
    return;
  }

  e.preventDefault();

  largeImg.src = listItem.href;
  largeImg.alt = listItem.title;
});
