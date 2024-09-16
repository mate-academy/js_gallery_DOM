'use strict';

const galeryImageLarge = document.querySelector('.gallery__large-img');
const galeryImageList = document.querySelector('.gallery__list');

galeryImageList.addEventListener('click', (event) => {
  event.preventDefault();
  galeryImageLarge.src = event.target.closest('.list-item__link').href;
});
