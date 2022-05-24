'use strict';

const imagesList = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

imagesList.addEventListener('click', (ev) => {
  ev.preventDefault();

  const image = ev.target.closest('.list-item__link');

  mainImage.src = image.href;
});
