'use strict';

const mainPicture = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  mainPicture.src = event.target.closest('.list-item__link').href;
});
