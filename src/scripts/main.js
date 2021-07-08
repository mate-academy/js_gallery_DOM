'use strict';

const bigImage = document.querySelector('.gallery__large-img');
const imagesList = document.querySelector('.gallery__list');

imagesList.addEventListener('click', ev => {
  ev.preventDefault();

  bigImage.src = ev.target.closest('.list-item__link').href;
});
