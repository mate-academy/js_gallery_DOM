'use strict';

const images = document.querySelector('.gallery__list');

const largeImg = document.querySelector('#largeImg');

images.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item || !images.contains(item)) {
    return;
  }

  largeImg.src = item.href;
});
