'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (click) => {
  click.preventDefault();

  const item = click.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImg.src = item.href;
});
