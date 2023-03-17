'use strict';

const galleryList = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target;

  if (!item.matches('img')) {
    return;
  };

  mainImage.src = item.parentElement.href;
});
