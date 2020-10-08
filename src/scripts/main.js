'use strict';

const galleryList = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (event) => {
  const item = event.target;

  if (item.closest('.list-item__link')) {
    event.preventDefault();
    mainImg.src = item.closest('.list-item__link').href;
  }
});
