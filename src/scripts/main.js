'use strict';

const imgLarge = document.querySelector('.gallery__large-img');
const galeryList = document.querySelector('.gallery__list');

galeryList.addEventListener('click', (event) => {
  event.preventDefault();
  imgLarge.src = event.target.closest('.list-item__link').href;
});
