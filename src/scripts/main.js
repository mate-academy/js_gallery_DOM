'use strict';

const largeImage = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', function(el) {
  el.preventDefault();

  const item = el.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImage.src = item.href;
});
