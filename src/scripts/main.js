/* eslint-disable no-shadow */
'use strict';

const listOfImagesElem = document.querySelector('.gallery__list');
const largeImageElem = document.querySelector('.gallery__large-img');

listOfImagesElem.addEventListener('click', function (event) {
  const link = event.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  event.preventDefault();

  largeImageElem.src = link.href;
});
