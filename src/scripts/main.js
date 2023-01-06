'use strict';

const galleryList = document.querySelector('.gallery__list');
const image = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const clicked = e.target.closest('.list-item__link');

  if (!clicked || !galleryList.contains(clicked)) {
    return;
  }

  image.src = clicked.href;
});
