'use strict';

const list = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const thumbItem = e.target.closest('.list-item__link');

  if (thumbItem) {
    mainImage.src = thumbItem.href;
  }
});
