'use strict';

const galeryList = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

galeryList.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  if (clickEvent.target.closest('.list-item__link')) {
    mainImage.src = clickEvent.target.closest('.list-item__link').href;
  }
});
