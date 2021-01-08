'use strict';

const picture = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  picture.src = e.target.closest('.list-item__link').href;
});
