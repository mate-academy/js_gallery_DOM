'use strict';

const listOfImages = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');
const galleryImages = document.querySelectorAll('.gallery__thumb');

listOfImages.addEventListener('click', (event) => {
  event.preventDefault();

  const closestParent = event.target.closest('.list-item__link');

  if (!closestParent || !listOfImages.contains(closestParent)) {
    return;
  };

  largeImg.src = closestParent.href;

  galleryImages.forEach(img => {
    img.style.boxShadow = '0 0 0 0 rgba(0, 0, 255, .4)';
  });

  closestParent.firstElementChild.style.boxShadow = '0 0 5px 1px rgba(0, 0, 255, .4)';
});
