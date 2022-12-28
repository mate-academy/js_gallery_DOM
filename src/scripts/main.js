'use strict';

const list = document.querySelector('.gallery__list');
const mainPhoto = document.querySelector('#largeImg');

list.addEventListener('click', (eventImg) => {
  const element = eventImg.target.closest('.list-item__link');

  if (!element || !list.contains(element)) {
    return;
  }

  eventImg.preventDefault();

  mainPhoto.src = element.href;
});
