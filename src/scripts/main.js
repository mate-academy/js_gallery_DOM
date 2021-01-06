'use strict';

const thumbs = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (galleryEvent) => {
  galleryEvent.preventDefault();

  const item = galleryEvent.target.closest('.list-item__link');

  if (item) {
    largeImg.src = item.href;
  }
});
