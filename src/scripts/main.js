'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (elEvent) => {
  elEvent.preventDefault();

  largeImage.src = elEvent.target.closest('.list-item__link').href;
});
