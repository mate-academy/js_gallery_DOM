'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const listItem = e.target.closest('a');

  if (!listItem) {
    return;
  }

  largeImg.src = listItem.href;
  largeImg.alt = listItem.title;
});
