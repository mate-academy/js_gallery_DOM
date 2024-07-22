'use strict';

const galleryList = document.querySelector('.gallery__list');
const galleryLargeImg = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (link) {
    galleryLargeImg.src = link.href;
  }
});
