'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (events) => {
  events.preventDefault();

  const link = events.target;

  mainImage.src = link.parentElement.href;
});
