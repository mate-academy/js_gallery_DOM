'use strict';

const imagesList = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

imagesList.addEventListener('click', (browserEvent) => {
  browserEvent.preventDefault();

  const image = browserEvent.target.closest('.list-item__link');

  mainImage.src = image.href;
});
