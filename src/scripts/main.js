'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  mainImg.src = event.target.closest('.list-item__link').href;
});
