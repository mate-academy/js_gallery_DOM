'use strict';

const image = document.querySelector('.gallery__large-img');
const imagesList = document.querySelector('.gallery__list');

imagesList.addEventListener('click', e => {
  e.preventDefault();

  image.src = e.target.closest('.list-item__link').href;
});
