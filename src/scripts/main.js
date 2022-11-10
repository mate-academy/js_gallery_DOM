'use strict';

const list = document.querySelector('.gallery__list');
const img = document.querySelector('.gallery__large-img');

list.addEventListener('click', (eventPhoto) => {
  eventPhoto.preventDefault();

  img.src = eventPhoto.target.closest('.list-item__link').href;
});
