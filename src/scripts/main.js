'use strict';

const list = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (event) => {
  event.preventDefault();
  mainImage.src = event.target.closest('.list-item__link').href;
});
