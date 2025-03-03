'use strict';

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const galleryImg = document.querySelector('.gallery__img');
  const link = e.target.closest('.list-item__link').href;

  if (!link) {
    return;
  }

  galleryImg.src = link;
});
