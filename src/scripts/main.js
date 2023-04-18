'use strict';

const galeryList = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

galeryList.addEventListener('click', (e) => {
  e.preventDefault();

  mainImage.src = e.target.closest('.list-item__link').href;
});
