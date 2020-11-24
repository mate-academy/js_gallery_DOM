'use strict';

const galleryList = document.querySelector('.gallery__list');
const galleryImage = document.querySelector('.gallery__img');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const targetImage = event.target.closest('.list-item__link');

  if (!targetImage || !galleryList.contains(targetImage)) {
    return;
  }

  galleryImage.src = targetImage.href;
});
