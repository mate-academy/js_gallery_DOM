'use strict';

const list = document.querySelector('.gallery__list');
const mainImage = document.querySelector('#largeImg');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  mainImage.src = item.href;
})
