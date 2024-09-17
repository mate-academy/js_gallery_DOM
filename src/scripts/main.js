'use strict';

const listImages = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

listImages.addEventListener('click', (action) => {
  action.preventDefault();

  const image = action.target.closest('a');

  if (!image) {
    return;
  }
  mainImg.src = image.href;
});
