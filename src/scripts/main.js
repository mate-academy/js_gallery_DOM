'use strict';

const imagesList = document.body.querySelector('.gallery__list');
const mainImg = document.body.querySelector('#largeImg');

imagesList.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const closestElement = clickEvent.target.closest('.list-item__link');

  if (!closestElement) {
    return;
  }
  mainImg.src = closestElement.href;
});
