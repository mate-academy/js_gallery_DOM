'use strict';

const largeImage = document.querySelector('.gallery__large-img');

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (events) => {
  const item = events.target.closest('a');

  events.preventDefault();

  largeImage.src = item.href;
});
