'use strict';

const list = document.querySelector('.gallery__list');
const image = document.querySelector('.gallery__large-img');

list.addEventListener('click', (eventPhoto) => {
  eventPhoto.preventDefault();

  image.src = eventPhoto.target.closest('.list-item__link').href;
});
