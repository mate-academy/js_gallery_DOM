'use strict';

const galleryImage = document.querySelector('.gallery__img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const imageInSlider = event.target.closest('.list-item__link');

  if (!imageInSlider || !galleryList.contains(imageInSlider)) {
    return;
  }

  galleryImage.src = imageInSlider.href;
});
