'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (eventObject) => {
  const item = eventObject.target.closest('.list-item__link');

  eventObject.preventDefault();

  if (!item) {
    return;
  }

  mainImage.src = item.href;
});
