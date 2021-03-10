'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const imageNavigation = document.querySelector('.gallery__list');

imageNavigation.addEventListener('click', () => {
  const selectedElement = event.target.closest('.list-item__link');

  event.preventDefault();
  mainImage.src = selectedElement.href;
});
