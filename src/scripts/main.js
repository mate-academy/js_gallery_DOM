'use strict';

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (galleryEvent) => {
  const item = galleryEvent.target.closest('.list-item__link');
  const mainImg = document.querySelector('.gallery__large-img');

  galleryEvent.preventDefault();
  mainImg.src = item.href;
});
