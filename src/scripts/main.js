'use strict';

const imagesList = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

imagesList.addEventListener('click', (event) => {
  event.preventDefault();

  const closestParent = event.target.closest('.list-item__link');

  if (!closestParent || !imagesList.contains(closestParent)) {
    return;
  };

  mainImg.src = closestParent.href;
});
